import frontMatter from 'front-matter';
import markdownIt from 'markdown-it';
import hljs from 'highlight.js';
import objectAssign from 'object-assign';

const highlight = (str, lang) => {
  if (lang !== null && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str).value;
    } catch (error) {
      console.error(error);
    }
  }
  try {
    return hljs.highlightAuto(str).value;
  } catch (error) {
    console.error(error);
  }
  return '';
};

const md = markdownIt({
  html: true,
  linkify: false,
  typographer: true,
  highlight,
});

md.renderer.rules.table_open = () => '<table class="table">\n';

module.exports = function (content) {
  this.cacheable();
  const meta = frontMatter(content);
  const body = md.render(meta.body);
  const result = objectAssign({}, meta.attributes, {
    body,
  });
  this.value = result;
  return `module.exports = ${JSON.stringify(result)}`;
};
