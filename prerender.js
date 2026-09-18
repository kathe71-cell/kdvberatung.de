import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist-ssr/entry-server.js');

const routesToPrerender = [
  {
    url: '/',
    title: 'KDV-Beratung – Kriegsdienstverweigerung Antrag & Leitfaden',
    desc: 'Kriegsdienstverweigerung (KDV) nach Art. 4 Abs. 3 GG: Interaktiver Antrags-Navigator, Gewissensbegründung Muster, Fristen & Adressen für Soldaten & Ungediente.'
  },
  {
    url: '/impressum',
    title: 'Impressum | kdvberatung.de',
    desc: 'Impressum und gesetzliche Anbieterkennzeichnung gemäß § 5 DDG für kdvberatung.de.'
  },
  {
    url: '/datenschutz',
    title: 'Datenschutzerklärung | kdvberatung.de',
    desc: 'Datenschutzerklärung und Hinweise zur DSGVO-konformen Nutzung auf kdvberatung.de.'
  },
  {
    url: '/rechner-embed',
    title: 'KDV-Navigator Widget | kdvberatung.de',
    desc: 'Kompaktes KDV-Status-Navigator-Widget zur Einbindung auf externen Websites.'
  }
];

console.log(`Starting prerendering of ${routesToPrerender.length} routes for kdvberatung.de...`);

for (const route of routesToPrerender) {
  try {
    const { html: appHtml } = render(route.url);
    let rendered = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    rendered = rendered.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
    rendered = rendered.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.desc}" />`);
    const fullUrl = `https://kdvberatung.de${route.url === '/' ? '' : route.url}`;
    rendered = rendered.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${fullUrl}" />`);
    rendered = rendered.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${fullUrl}" />`);
    rendered = rendered.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`);
    rendered = rendered.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${route.title}" />`);
    rendered = rendered.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.desc}" />`);
    rendered = rendered.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${route.desc}" />`);

    const filePath = route.url === '/' ? 'dist/index.html' : `dist${route.url}/index.html`;
    const absolutePath = toAbsolute(filePath);
    fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
    fs.writeFileSync(absolutePath, rendered);
    console.log(`  ✓ ${route.url} -> ${filePath} (${(rendered.length / 1024).toFixed(1)} kB)`);
  } catch (err) {
    console.error(`  ✗ Error prerendering ${route.url}:`, err);
  }
}

console.log('Prerendering complete!');
