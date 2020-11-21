import marked from 'marked';
import hljs from 'highlight.js';

// highlight.js
marked.setOptions({
  highlight(code, lang) {
    return hljs.highlightAuto(code, [lang]).value;
  },
  breaks: true,
  gfm: true
});

// 目次生成
let index = 0;
let toc = [];

const getAnchor = i => {
  return 'anchor_' + i;
};

const renderer = {
  heading(text, level) {
    let escapedText = text.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '');
    if (level === 2) {
      index++;
      let anchor = getAnchor(index);
      toc.push({ index, anchor, escapedText });
      return '<h' + level + ' id="' + anchor + '">' + text + '</h' + level + '>';
    } else {
      return '<h' + level + '>' + text + '</h' + level + '>';
    }
  }
};

marked.use({ renderer });

export { toc, marked };
