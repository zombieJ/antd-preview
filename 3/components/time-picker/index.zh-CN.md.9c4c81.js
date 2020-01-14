(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{3236:function(t,d){t.exports={content:["section",["p","当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。"]],meta:{category:"Components",subtitle:"时间选择框",type:"数据录入",title:"TimePicker",filename:"components/time-picker/index.zh-CN.md"},description:["section",["p","输入或选择时间的控件。"],["h2","何时使用"]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#方法",title:"方法"},"方法"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["hr"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'13:30:56\'</span><span class="token punctuation">,</span> <span class="token string">\'HH:mm:ss\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>'},["code","import moment from 'moment';\n<TimePicker defaultValue={moment('13:30:56', 'HH:mm:ss')} />;"]],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","allowClear"],["td","是否展示清除按钮"],["td","boolean"],["td","true"],["td"]],["tr",["td","autoFocus"],["td","自动获取焦点"],["td","boolean"],["td","false"],["td"]],["tr",["td","className"],["td","选择器类名"],["td","string"],["td","''"],["td"]],["tr",["td","clearText"],["td","清除按钮的提示文案"],["td","string"],["td","clear"],["td"]],["tr",["td","defaultOpenValue"],["td","当 defaultValue/value 不存在时，可以设置面板打开时默认选中的值"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","moment()"],["td"]],["tr",["td","defaultValue"],["td","默认时间"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","无"],["td"]],["tr",["td","disabled"],["td","禁用全部操作"],["td","boolean"],["td","false"],["td"]],["tr",["td","disabledHours"],["td","禁止选择部分小时选项"],["td","function()"],["td","无"],["td"]],["tr",["td","disabledMinutes"],["td","禁止选择部分分钟选项"],["td","function(selectedHour)"],["td","无"],["td"]],["tr",["td","disabledSeconds"],["td","禁止选择部分秒选项"],["td","function(selectedHour, selectedMinute)"],["td","无"],["td"]],["tr",["td","format"],["td","展示的时间格式"],["td","string"],["td",'"HH:mm:ss"'],["td"]],["tr",["td","getPopupContainer"],["td","定义浮层的容器，默认为 body 上新建 div"],["td","function(trigger)"],["td","无"],["td"]],["tr",["td","hideDisabledOptions"],["td","隐藏禁止选择的选项"],["td","boolean"],["td","false"],["td"]],["tr",["td","hourStep"],["td","小时选项间隔"],["td","number"],["td","1"],["td"]],["tr",["td","inputReadOnly"],["td","设置输入框为只读（避免在移动设备上打开虚拟键盘）"],["td","boolean"],["td","false"],["td"]],["tr",["td","minuteStep"],["td","分钟选项间隔"],["td","number"],["td","1"],["td"]],["tr",["td","open"],["td","面板是否打开"],["td","boolean"],["td","false"],["td"]],["tr",["td","placeholder"],["td","没有值的时候显示的内容"],["td","string"],["td",'"请选择时间"'],["td"]],["tr",["td","popupClassName"],["td","弹出层类名"],["td","string"],["td","''"],["td"]],["tr",["td","popupStyle"],["td","弹出层样式对象"],["td","object"],["td","-"],["td"]],["tr",["td","secondStep"],["td","秒选项间隔"],["td","number"],["td","1"],["td"]],["tr",["td","suffixIcon"],["td","自定义的选择框后缀图标"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","clearIcon"],["td","自定义的清除图标"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","renderExtraFooter"],["td","选择框底部显示自定义的内容"],["td","() => ReactNode"],["td","无"],["td"]],["tr",["td","use12Hours"],["td","使用 12 小时制，为 true 时 ",["code","format"]," 默认为 ",["code","h:mm:ss a"]],["td","boolean"],["td","false"],["td"]],["tr",["td","value"],["td","当前时间"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","无"],["td"]],["tr",["td","onChange"],["td","时间发生变化的回调"],["td","function(time: moment, timeString: string): void"],["td","无"],["td"]],["tr",["td","onOpenChange"],["td","面板打开/关闭时的回调"],["td","(open: boolean): void"],["td","无"],["td"]]]],["h2","方法"],["table",["thead",["tr",["th","名称"],["th","描述"],["th","版本"]]],["tbody",["tr",["td","blur()"],["td","移除焦点"],["td"]],["tr",["td","focus()"],["td","获取焦点"],["td"]]]],["style",".code-box-demo .ant-picker { margin: 0 8px 12px 0; }"],["h2","FAQ"],["ul",["li",["p",["a",{title:null,href:"/docs/react/replace-moment#TimePicker"},"如何在 TimePicker 中使用自定义日期库（如 dayjs ）"]]]]]}}}]);