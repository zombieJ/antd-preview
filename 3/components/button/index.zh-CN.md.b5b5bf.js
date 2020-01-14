(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{3099:function(t,e){t.exports={content:["section",["p","按钮用于开始一个即时操作。"],["h2","何时使用 2334555"],["p","标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。"],["p","在 Ant Design 中，我们有四种按钮。"],["ul",["li",["p","主按钮：用于主行动点，一个操作区域只能有一个主按钮。"]],["li",["p","默认按钮：用于没有主次之分的一组行动点。"]],["li",["p","虚线按钮：常用于添加操作。"]],["li",["p","链接按钮：用于次要或外链的行动点。"]]],["p","以及四种状态属性与上面配合使用。"],["ul",["li",["p","危险：删除/移动/修改权限等危险操作，一般需要二次确认。"]],["li",["p","幽灵：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。"]],["li",["p","禁用：行动点不可用的时候，一般需要文案解释。"]],["li",["p","加载中：用于异步操作等待反馈的时候，也可以避免多次提交。"]]]],meta:{category:"Components",type:"通用",title:"Button",subtitle:"按钮",filename:"components/button/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用-2334555",title:"何时使用 2334555"},"何时使用 2334555"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["p","通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：",["code","type"]," -> ",["code","shape"]," -> ",["code","size"]," -> ",["code","loading"]," -> ",["code","disabled"],"。"],["p","按钮的属性说明如下："],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","disabled"],["td","按钮失效状态"],["td","boolean"],["td",["code","false"]],["td"]],["tr",["td","ghost"],["td","幽灵属性，使按钮背景透明"],["td","boolean"],["td","false"],["td"]],["tr",["td","href"],["td","点击跳转的地址，指定此属性 button 的行为和 a 链接一致"],["td","string"],["td","-"],["td"]],["tr",["td","htmlType"],["td","设置 ",["code","button"]," 原生的 ",["code","type"]," 值，可选值请参考 ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type"},"HTML 标准"]],["td","string"],["td",["code","button"]],["td"]],["tr",["td","icon"],["td","设置按钮的图标组件"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","loading"],["td","设置按钮载入状态"],["td","boolean ","|"," { delay: number }"],["td",["code","false"]],["td"]],["tr",["td","shape"],["td","设置按钮形状，可选值为 ",["code","circle"],"、 ",["code","round"]," 或者不设"],["td","string"],["td","-"],["td"]],["tr",["td","size"],["td","设置按钮大小，可选值为 ",["code","small"]," ",["code","large"]," 或者不设"],["td","string"],["td",["code","default"]],["td"]],["tr",["td","target"],["td","相当于 a 链接的 target 属性，href 存在时生效"],["td","string"],["td","-"],["td"]],["tr",["td","type"],["td","设置按钮类型，可选值为 ",["code","primary"]," ",["code","dashed"]," ",["code","link"]," 或者不设"],["td","string"],["td","-"],["td"]],["tr",["td","onClick"],["td","点击按钮时的回调"],["td","(event) => void"],["td","-"],["td"]],["tr",["td","block"],["td","将按钮宽度调整为其父宽度的选项"],["td","boolean"],["td",["code","false"]],["td"]],["tr",["td","danger"],["td","设置危险按钮"],["td","boolean"],["td",["code","false"]],["td"]]]],["p","支持原生 button 的其他所有属性。"],["h2","FAQ"],["h3","如何移除两个汉字之间的空格？"],["p","根据 Ant Design 设计规范要求，我们会在按钮内只有两个汉字时自动添加空格，如果你不需要这个特性，可以设置 ",["a",{title:null,href:"/components/config-provider/#API"},"ConfigProvider"]," 的 ",["code","autoInsertSpaceInButton"]," 为 ",["code","false"],"。"],["p",["img",{src:"https://gw.alipayobjects.com/zos/antfincdn/MY%26THAPZrW/38f06cb9-293a-4b42-b183-9f443e79ffea.png",style:"box-shadow: none;",alt:"移除两个汉字之间的空格"}]],["style",'\n[id^="components-button-demo-"] .ant-btn {\n  margin-right: 8px;\n  margin-bottom: 12px;\n}\n[id^="components-button-demo-"] .ant-btn-group > .ant-btn {\n  margin-right: 0;\n}\n[data-theme="dark"] .site-button-ghost-wrapper {\n  background: rgba(255, 255, 255, 0.2);\n}\n']]}}}]);