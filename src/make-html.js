export function make_resultHTML(max, min, variance, medaltal, median, std_dev, summu, svid_range){
  const _max = max;
  const _min = min;
  const _var = variance;
  const _mean = medaltal;
  const _med = median;
  const _dev = std_dev;
  const _sum = summu;
  const _range = svid_range;

  const template = `
    <section>
      <p>Frávik : ${_var}</p>
      <p>Hæsta gildi: ${_max}</p>
      <p>Minnsta gildi: ${_min}</p>
      <p>Meðaltal : ${_mean}</p>
      <p>Miðgildi : ${_med}</p>
      <p>Staðalfrávik: ${_dev}</p>
      <p>Summu: ${_sum}</p>
      <p>Svið : ${_range}</p>
    </section>
  `;

  return template;
}

export function makeIndex(entries) {
  let list = "";
  for (const entry of entries) {
    //const { slug, title } = entry;
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

export function make_HtmlTemplate(title, txt, data, showBack = false) {
  const back = showBack ? '<p><a href="/">Til baka</a></p>' : "";
  return `
  <!doctype html>
    <html lang="is">
      <head>
        <meta charset="utf-8">
        <title>${title ?? ""}</title>
        <link rel="stylesheet" href="../public/styles.css">
      </head>
      <body>
        <div class="wrapper">
          <header>
            <h2>${txt}.txt</h2>
          </header>
            ${data ?? ""}
            ${back}
      </div>
    </body>
  </html>`;
}

export function make_HtmlIndex(title, data, showBack = false) {
  //const back = showBack ? '<p><a href="/">Til baka</a></p>' : "";
  return `
  <!doctype html>
  <html lang="is">
    <head>
      <meta charset="utf-8">
      <title>${title ?? ""}</title>
      <link rel="stylesheet" href="../public/styles.css">
    </head>
    <body>
      <div class="wrapper"> 
        <header>
          <h2>${title}</h2>
        </header>
          <div class="categories">
            
            ${data ?? ""}
            
          </div>
      </div>
    </body>
  </html>`;
}
