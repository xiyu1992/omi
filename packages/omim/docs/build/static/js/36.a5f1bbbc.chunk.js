webpackJsonp([36],{50:function(n,r){n.exports="# Omim\r\n\r\nCross-Frameworks components, powered by Material Design and [Omi](https://github.com/Tencent/omi).\r\n\r\n## Features\r\n\r\n* Simple wrapper of [material-components-web](https://github.com/material-components/material-components-web)\r\n* Render by Custom Elements of Web Components\r\n* Any framework can use the components, such as Omi, React, Vue and Angular \r\n* Support both JSX and native HTML elements \r\n* Each element can be used independently\r\n\r\n## Usage\r\n\r\n### Via script\r\n\r\n```html\r\n<script src=\"https://unpkg.com/omi\"><\/script>\r\n<script src=\"https://unpkg.com/@omim/core@0.0.1/button/index.js\"><\/script>\r\n\r\n<m-button>I am button</m-button>\r\n```\r\n\r\n### Via npm\r\n\r\n``` bash\r\nnpm install @omim/core\r\n```\r\n\r\nThen:\r\n\r\n```js\r\nimport '@omim/core/button'\r\n```\r\n\r\nThen use the element in Omi, React, Vue or Angular:\r\n\r\n``` html\r\n<m-button>I am button</m-button>\r\n```\r\n\r\nIt can also be used in pure js:\r\n\r\n```js\r\nvar button = document.createElement('m-button')\r\nbutton.innerHTML = 'I am button'\r\ndocument.body.append(button)\r\nbutton.addEventListener('click', function () {\r\n  console.log('Clicked!')\r\n})\r\n\r\n//or\r\n//document.body.innerHTML = '<m-button>I am button</m-button>'\r\n```\r\n\r\n\r\n## Contribution\r\n\r\n### CMD\r\n\r\nBuild component:\r\n\r\n```bash\r\nnpm run build -- component-name\r\n```\r\n\r\nBuild demo:\r\n\r\n```bash\r\nnpm start demo-name\r\n```\r\n\r\nPublish:\r\n\r\n```bash\r\nnpm publish --access public\r\n```\r\n\r\n## Links\r\n\r\n* [material.io docs](https://material.io/develop/web/components/buttons/) \r\n* [material.io demo](https://material-components.github.io/material-components-web-catalog/#/) \r\n"}});
//# sourceMappingURL=36.a5f1bbbc.chunk.js.map