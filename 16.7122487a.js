(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./src/Dialog/README.md":function(n,o,i){"use strict";i.r(o),o.default='# Dialog 弹窗\n\n## 使用\n\n在页面 `json` 中引入组件：\n\n```json\n// import in `page.json`:\n"usingComponents": {\n  "oak-dialog": "path/to/your/oakui/Dialog/dialog"\n}\n```\n\n在页面使用\n```html\n\x3c!-- use in `page.wxml` --\x3e\n<oak-dialog />\n```\n\n## 代码演示\n### 基本用法\nDialog 支持 `属性调用` 和 `实例调用` 两种调用方式。\n\n#### 属性调用\n在组件上配置相应属性，并通过 `show` 属性来控制显示。\n```html\n<oak-dialog\n    show="{{ show }}"\n    title="Oak 弹窗"\n    content="弹窗很6，非常6，对不对？"\n/>\n```\n\n```js\n\nPage({\n    showDialog() {\n        this.setData({\n            show: true,\n        })\n    }\n})\n```\n\n#### 实例调用\n在页面（组件）获取到 `Dialog` 实例，通过实例上的 `.confirm(options)` 方法调用组件。\n\n> 同一页面中如果需要多次调用到组件，推荐使用 **实例调用** 方式。\n\n```html\n<oak-dialog id="dialog" />\n```\n\n```js\n\nPage({\n    showDialog(): void {\n        this.selectComponent(\'#dialog\').confirm({\n            title: \'实例调用\',\n            content: \'\',\n            cancleText: \'取消\',\n            confirmText: \'知道了\',\n            onConfirm(): void {\n\n            }\n        })\n    }\n})\n```\n\n### 异步关闭\n`confirmAsync` 开启异步关闭，开启后`属性调用`可以通过`show` 设置为 `false` 关闭。`实例调用` 可以通过 `onConfirm(hide: Function)` 中的 `hide()` 方法关闭。\n\n```html\n<oak-dialog\n    show="{{ show }}"\n    title="异步关闭"\n    content="异步关闭很6，非常6，对不对？"\n    confirm-async\n    bind:onConfirm="onConfirm"\n/>\n<oak-dialog id="dialog" />\n```\n\n```js\n\nPage({\n    showDialog() {\n        this.setData({\n            show: true,\n        })\n    },\n    onConfirm() {\n      setTimeout(() => {\n          this.setData!({\n              show: false,\n          })\n      }, 5* 1000)\n    },\n    _showDialog() {\n      this.selectComponent!(\'#dialog\').confirm({\n            title: \'异步关闭\',\n            content: \'实例调用异步关闭\',\n            confirmAsync: true,\n            onConfirm(hide): void {\n                setTimeout((): void => {\n                    hide()\n                }, 5* 1000)\n            }\n        })\n    }\n})\n```\n\n### 自定义内容\nDialog 内容区域可以自定义。\n\n```html\n<oak-dialog\n    show="{{ show }}"\n>\n    <view class="diy-content" wx:if="{{diy}}">\n        <image mode="width" src="https://static.yonghuivip.com/oak/images/logo.png" alt="" />\n    </view>\n</oak-dialog>\n```\n\n## API\n组件通过`属性调用` 和 `实例调用` 具有完全一直的API。\n\n| 属性 | 说明 | 类型 | 默认值 |\n|-----------|-----------|-----------|-------------|\n| title | 弹窗标题，可为空  | `string` | - |\n| content | 弹窗内容，可为空  | `string` | - |\n| cancle-text(cancleText) | 取消按钮文案，不需要显示时设置为空  | `string` | `取消` |\n| confirm-text(confirmText) | 确认按钮文案  | `string` | `确认` |\n| mask | 是否显示遮罩层  | `boolen` | `true` |\n| mask-closable(maskClosable) | 点击遮罩层是否关闭  | `boolen` | `true` |\n| show | 是否显示  | `boolen` | `false` |\n| z-index(zIndex) | z-index 层级  | `number` | `9` |\n| confirm-async(confirmAsync) | 是否异步关闭弹窗，开启后需要手动关闭弹窗  | `boolen` | `false` |\n| confirm-type(confirmType) | 确认按钮支持微信开放能力，参考小程序 `<button />` 组件的[open-type](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | `string` | - |\n| onClose | 点击遮罩层回调 | `function` | - |\n| onCancle | 点击取消按钮的回调 | `function` | - |\n| onConfirm | 点击确认按钮的回调，实例调用时参数为一个关闭弹窗 `hide()` | `function|function(hide)` | - |\n\n\n\n\n## 外部样式类\n\n| 类名 | 说明 |\n|-----------|-----------|\n| dialog-class | 作用于根结点 |\n| title-class | 作用于标题 |\n| content-class | 作用于内容 |\n\n\n'}}]);