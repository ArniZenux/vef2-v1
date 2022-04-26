export function makeResult(max, min, variance, medaltal, median, stdDev, summu, svidRange){
  const zmax = max;
  const zmin = min;
  const zvar = variance;
  const zmean = medaltal;
  const zmed = median;
  const zdev = stdDev;
  const zsum = summu;
  const zrange = svidRange;

  const template = `
    <section>
      <p>Frávik : ${zvar}</p>
      <p>Hæsta gildi: ${zmax}</p>
      <p>Minnsta gildi: ${zmin}</p>
      <p>Meðaltal : ${zmean}</p>
      <p>Miðgildi : ${zmed}</p>
      <p>Staðalfrávik: ${zdev}</p>
      <p>Summu: ${zsum}</p>
      <p>Svið : ${zrange}</p>
    </section>
  `;

  return template;
}

export function makeList(entries) {
  let list = '';
  for (const entry of entries) {
    const link = `
      <section>
        <ul>
          <li>
            <h2>
              <a href="${`${entry}.html`}">${entry}</a> 
            </h2>
          </li>
        </ul>
      </section>
    `;
    
    list += link;
  }

  return `${list}`;
}

export function makeTemplate(title, txt, data, showBack = false) {
  const back = showBack ? '<p><a href="/">Til baka</a></p>' : '';
  return `
  <!doctype html>
    <html lang="is">
      <head>
        <meta charset="utf-8">
        <title>${title ?? ''}</title>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <div class="wrapper">
          <header>
            <h2>${txt}.txt</h2>
          </header>
            ${data ?? ''}
            ${back}
      </div>
    </body>
  </html>`;
}

export function makeIndex(title, data) {
  return `
  <!doctype html>
  <html lang="is">
    <head>
      <meta charset="utf-8">
      <title>${title ?? ''}</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <div class="wrapper"> 
        <header>
          <h2>${title ?? ''}</h2>
        </header>
          <div class="categories">
            
            ${data ?? 'Ekki til'}
            
          </div>
      </div>
    </body>
  </html>`;
}
