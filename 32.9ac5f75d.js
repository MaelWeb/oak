(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"./src/Switch/README.md":function(n,e,o){"use strict";o.r(e),e.default='# Switch 开关\n\n## 使用\n\n在页面 `json` 中引入组件：\n\n```json\n// import in `page.json`:\n"usingComponents": {\n  "oak-switch": "path/to/your/oakui/Switch/switch"\n}\n```\n\n在页面使用\n```html\n\x3c!-- use in `page.wxml` --\x3e\n<oak-switch />\n```\n\n## 代码演示\n### 基础用法\n最简单的用法。\n```html\n<oak-switch bind:onChange="onChange"/>\n```\n```js\nPage({\n    onChange(e) {\n        const { checked } = e.detail\n        console.log(checked)\n\n        wx.showToast({\n            title: checked ? \'打开\' : \'关闭\',\n            icon: \'none\'\n        })\n    },\n})\n```\n\n### 不可用/加载中\n通过 `disabled` 和 `loading` 控制开关的不可用/加载状态。\n```html\n<oak-switch bind:onChange="onChange"\n            disabled />\n<oak-switch bind:onChange="onChange"\n    loading />\n```\n\n### 文字\n通过 `checked-text`/`unchecked-text` 控制开关选中/未选中状态下文案。\n```html\n<oak-switch bind:onChange="onChange"\n    checked-text="开"\n    unchecked-text="关" />\n<oak-switch bind:onChange="onChange"\n    checked-text="1"\n    unchecked-text="0" />\n```\n\n### 自定义大小\n开关支持自定义大小。\n```html\n<oak-switch bind:onChange="onChange"\n    size="50rpx" />\n<oak-switch bind:onChange="onChange"\n    size="60rpx" />\n```\n\n### 自定义背景色\n通过`checked-color`/`unchecked-color` 自定义开关选中/未选中时的背景色。\n```html\n<oak-switch bind:onChange="change"\n    checked-color="#00a5e0"\n    unchecked-color="#FF0500" />\n```\n\n### 手动控制状态\n开关默认会自动切换状态，但是可以通过 `autoChange`改变自动切换。\n```html\n<oak-switch bind:onChange="asyncFun"\n    auto-change="{{ false }}"\n    checked="{{ checked }}"\n/>\n```\n```js\nPage({\n    data: {\n        checked: false,\n    },\n    asyncFun(): void {\n        const _this = this\n        this.selectComponent!(\'#dialog\').confirm({\n            title: \'是否切换开关\',\n            content: \'\',\n            cancleText: \'取消\',\n            confirmText: \'确认\',\n            onConfirm(): void {\n                _this.setData!({\n                    checked: !_this.data.checked,\n                })\n            },\n        })\n    }\n})\n```\n\n\n## API\nAPI说明。\n\n| 属性 | 说明 | 类型 | 默认值 |\n|-----------|-----------|-----------|-------------|\n| checked | 当前是否选中 | `boolean` | `false` |\n| size | 开关大小 | `string` | `44rpx` |\n| checked-text | 选中时的内容 | `string` | - |\n| unchecked-text | 未选中时的内容 | `string` | - |\n| loader-size | loading大小，参考 [Loading 组件](https://yh-yunchuang-fe.github.io/oak/#/components/Loading) | `string` | - |\n| loading | 加载中的开关 | `boolean` | `false` |\n| disabled | 是否禁用 | `boolean` | `false` |\n| checked-color | 选中时背景色 | `string` | `#fd7622` |\n| unchecked-color | 未选中时背景色 | `string` | `#ccc` |\n| auto-change | 是否自动切换状态 | `boolean` | `true` |\n| onChange | 变化时回调函数 | `function(checked: boolean)\t` | |\n\n\n## 外部样式类\n\n| 类名 | 说明 |\n|-----------|-----------|\n| ext-class | 作用于根结点 |\n\n\n'}}]);