import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App.jsx';

export function render(url) {
  const html = ReactDOMServer.renderToString(<App initialPath={url} />);
  return { html };
}
