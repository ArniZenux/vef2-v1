import { describe, expect, it } from '@jest/globals';
import { makeTemplate, makeList } from '../src/make-html';

describe('html', () => {
  it('creates a html string', () => {
    const input = {
      content: '<strong>hi</strong>',
      metadata: {
        date: 'DATE',
      },
    };

    const parsed = makeList(input);

    const output = `
    <section>
      <strong>hi</strong>
      <p>Skrifað: DATE</p>
    </section>
  `;
    expect(parsed).toBe(output);
  });

  it.skip('creates a html template', () => {
    const parsed = makeTemplate('');

    const output = `
  <!doctype html>
  <html>
    <head>
      <title></title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
    </body>
  </html>`;
    expect(parsed).toBe(output);
  });
});