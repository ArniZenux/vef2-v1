export function makeHTML(max, min) {
  const _max = max; 
  const _min = min; 

  //const html = entry.content;
  //const { date } = entry.metadata;

  const template = `
    <section>
      <p>Max: ${_max}</p>
      <p>Min: ${_min}</p>
    </section>
  `;

  return template;
}

export function DataTemplate(title, blog, showBack = false) {
  const back = showBack ? '<p><a href="/">Til baka</a></p>' : '';
  return `
  <!doctype html>
  <html>
    <head>
      <title>${title ?? ''}</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      ${blog ?? ''}
      ${back}
    </body>
  </html>`;
}