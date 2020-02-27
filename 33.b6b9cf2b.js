(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"./src/Tag/README.md":function(a,o,n){"use strict";n.r(o),o.default='# Tag 标签\n进行标记和分类的小标签。\n\n## 使用\n\n在页面 `json` 中引入组件：\n\n```json\n// import in `page.json`:\n"usingComponents": {\n  "oak-tag": "path/to/your/oakui/Tag/tag"\n}\n```\n\n在页面使用\n```html\n\x3c!-- use in `page.wxml` --\x3e\n<oak-tag >Tag</oak-tag>\n```\n\n## 代码演示\n\n### 标签类型\n`Tag` 提供了多种预设色彩的标签样式，用作不同场景使用。可以通过 `color` 指定，默认为灰白。\n```html\n<oak-tag>default</oak-tag>\n<oak-tag color="magenta">magenta</oak-tag>\n<oak-tag color="red">red</oak-tag>\n<oak-tag color="volcano">volcano</oak-tag>\n<oak-tag color="orange">orange</oak-tag>\n<oak-tag color="gold">gold</oak-tag>\n<oak-tag color="lime">lime</oak-tag>\n<oak-tag color="cyan">cyan</oak-tag>\n<oak-tag color="blue">blue</oak-tag>\n<oak-tag color="geekblue">geekblue</oak-tag>\n<oak-tag color="purple">purple</oak-tag>\n```\n\n### 透明背景\n`plain` 设置透明背景。\n```html\n<oak-tag plain>default</oak-tag>\n<oak-tag plain\n    color="magenta">magenta</oak-tag>\n<oak-tag plain\n    color="red">red</oak-tag>\n<oak-tag plain\n    color="volcano">volcano</oak-tag>\n<oak-tag plain\n    color="orange">orange</oak-tag>\n<oak-tag plain\n    color="gold">gold</oak-tag>\n<oak-tag plain\n    color="lime">lime</oak-tag>\n<oak-tag plain\n    color="cyan">cyan</oak-tag>\n<oak-tag plain\n    color="blue">blue</oak-tag>\n<oak-tag plain\n    color="geekblue">geekblue</oak-tag>\n<oak-tag plain\n    color="purple">purple</oak-tag>\n```\n\n### 标签形状\n标签支持 `round`、`square`以及 默认 3种形状。\n```html\n<oak-tag shape="round"\n    color="orange">round</oak-tag>\n<oak-tag shape="square"\n    color="orange">square</oak-tag>\n<oak-tag\n    color="orange">default</oak-tag>\n```\n\n### 自定义颜色\n标签支持自定义样式。\n```html\n<oak-tag color="rgba(253,230,235,1)"\n    text-color="#FD7622"\n    border-color="rgba(252,7,59,0.15)">#FDE6EB</oak-tag>\n<oak-tag color="#FC0738"\n    plain>#FC0738</oak-tag>\n<oak-tag color="#ffb601,#ff7c02">渐变</oak-tag>\n```\n\n## API\n\n| 属性 | 说明 | 类型 | 默认值 |\n|-----------|-----------|-----------|-------------|\n| color | 标签色， 以 `,` 分隔传入两个色值（如：`#ffb601,#ff7c02` ）可实现渐变。(目前仅支持从左到右渐变) | `string` | - |\n| plain | 背景是否透明 | `boolen` | `false` |\n| shape | 标签形状 | `string` | - |\n| text-color | 文字颜色 | `string` | - |\n| border-color | 边框颜色 | `string` | - |\n\n\n## 外部样式类\n\n| 类名 | 说明 |\n|-----------|-----------|\n| custom-class | 根结点样式 |\n\n\n'}}]);