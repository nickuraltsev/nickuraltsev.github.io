import pdf from 'html-pdf';
import fs from 'fs';
import path from 'path';
import MarkdownIt from 'markdown-it';
import _ from 'lodash';

const readFile = relativePath => fs.readFileSync(path.join(__dirname, relativePath), 'utf8');

console.log('Generating resume pdf');

const md = new MarkdownIt({
  html: true,
  xhtmlOut: true,
  linkify: false,
});

const css = readFile('styles.css');
const content = md.render(readFile('../pages/Resume.md'));
const template = readFile('template.html');
const html = _.template(template)({ css, content });

const config = {
  format: 'A4',
  orientation: 'portrait',
  border: '2cm',
};

pdf
  .create(html, config)
  .toFile(
    path.join(__dirname, '../public/Resume/Nick Uraltsev.pdf'),
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Done');
      }
    }
  );
