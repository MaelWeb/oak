(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"./packages/SearchBar/README.md":function(n,e,a){"use strict";a.r(e),e.default='# Search Bar 搜索框\n\n## 使用\n\n在页面 `json` 中引入组件：\n\n```json\n// import in `page.json`:\n"usingComponents": {\n  "oak-search-bar": "path/to/your/oakui/SearchBar/search-bar"\n}\n```\n\n在页面使用\n```html\n\x3c!-- use in `page.wxml` --\x3e\n<oak-search-bar\n    placeholder="搜索"\n    bind:change="onChange"\n></oak-search-bar>\n```\n\n## 代码演示\n### 默认样式\n```html\n<oak-search-bar\n    placeholder="搜索"\n    bind:change="onChange"\n></oak-search-bar>\n```\n\n### 显示取消按钮\n```html\n<oak-search-bar\n    placeholder="搜索"\n    showCancel="{{ true }}"\n    bind:change="onChange"\n></oak-search-bar>\n```\n\n### 自动聚焦\n```html\n<oak-search-bar\n    placeholder="搜索"\n    bind:change="onChange"\n    inputFocus="{{ true }}"\n></oak-search-bar>\n```\n\n## APIS\n\n| 属性 | 说明 | 类型 | 默认值 |\n|-----------|-----------|-----------|-------------|\n| placeholder | placeholder | `String` | - |\n| disabled | 禁用输入 | `Boolean` | `false` |\n| placeholder-style | placeholder 的样式 | `String` | - |\n| placeholder-class | placeholder 的样式类 | `String` | - |\n| inputFocus | 是否焦点 | `Boolean` | `false` |\n| confirmType | 右下角按钮文字，仅在 type=\'text\' 时生效 | `String` | - |\n| confirmHold | 点击键盘右下角按钮时是否保持键盘不收起 | `Boolean` | `false` |\n| cursor | 指定focus时的光标位置 | `Number` | - |\n| selectionStart | 光标起始位置，自动聚集时有效，需与 selectionEnd 搭配使用 | `Number` | `-1` |\n| selectionEnd | 光标结束位置，自动聚集时有效，需与 selectionStart 搭配使用 | `Number` | `-1` |\n| adjustPosition | 键盘弹起时，是否自动上推页面 | `Boolean` | `true` |\n| holdKeyboard | focus时，点击页面的时候不收起键盘 | `Boolean` | `false` |\n| maxlength | 最大输入长度，设置为 -1 的时候不限制最大长度 | `Number` | `140` |\n| cursorSpacing | 指定光标与键盘的距离，取 input 距离底部的距离和 cursorSpacing 指定的距离的最小值作为光标与键盘的距离 | `Number` | `0` |\n| bindchange | 键盘输入时触发  | `Event` | - |\n| bindfocus | 获取焦点  | `Event` | - |\n| bindblur | 失去焦点  | `Event` | - |\n| bindcancel | 点击取消  | `Event` | - |\n| bindclear | 清空内容  | `Event` | - |\n| bindconfirm | 点击完成按钮时触发，event.detail = {value: value}  | `Event` | - |\n| bindkeyboardheightchange | 键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration} | `Event` | - |\n\n## 外部样式类\n\n| 类名 | 说明 |\n|-----------|-----------|\n| wrap-class | 作用于根节点 |\n| input-class | 作用于输入框 |\n| cancel-class | 作用于取消按钮 |\n'}}]);