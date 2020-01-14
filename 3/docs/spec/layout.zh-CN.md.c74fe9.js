(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{3313:function(t,l){t.exports={content:["article",["p","空间布局是体系化视觉设计的起点，和传统的平面设计的不同之处在于，UI 界面的布局空间要基于「动态、体系化」的角度出发展开。我们受到建筑界大师柯布西耶的模度思想的启发，基于「秩序之美」的原则，探索 UI 设计中的动态空间秩序，形成了 Ant Design 的界面布局方式，为设计者构筑具备理性之美的布局空间创造了条件。"],["p","在中后台视觉体系中定义布局系统，我们建议从 5 个方面出发："],["ol",["li",["p","统一的画板尺寸"]],["li",["p","适配方案"]],["li",["p","网格单位"]],["li",["p","栅格"]],["li",["p","常用模度"]]],["h2","统一画板"],["p","为了尽可能减少沟通与理解的成本，有必要在组织内部统一设计板的尺寸。蚂蚁中台设计团队统一的画板尺寸为 1440。"],["h2","适配"],["p","在设计过程中，设计师还需要建立适配的概念，根据具体情况判断系统是否需要进行适配，以及哪些区块需要考虑动态布局。据统计，使用中台系统的用户的主流分辨率主要为 1920、1440 和 1366，个别系统还存在 1280 的显示设备。"],["p","Ant Design 两种较为典型的适配方案："],["h3","一、左右布局的适配方案"],["p","常被用于左右布局的设计方案中，常见的做法是将左边的导航栏固定，对右边的工作区域进行动态缩放。"],["p",["img",{title:null,src:"https://gw.alipayobjects.com/zos/rmsportal/vSqMhPolCtINKLvVVdLt.png",alt:"左右布局的适配方案"}]],["h3","二、上下布局的适配方案"],["p","常被用于上下布局的设计方案中，做法是对两边留白区域进行最小值的定义，当留白区域到达限定值之后再对中间的主内容区域进行动态缩放。"],["p",["img",{title:null,src:"https://gw.alipayobjects.com/zos/rmsportal/VQEiJqtZfvvdyZSKcEsE.png",alt:"上下布局的适配方案"}]],["p","这里提及的只是非常简单的两种适配的思路，实际设计中一套完美的适配方案需要设计师具备前端视角、平面构图视角以及交互视角。"],["h2","网格单位"],["p","Ant Design 通过网格体系来实现视觉体系的秩序。网格的基数为 8，不仅符合偶数的思路同时能够匹配多数主流的显示设备。通过建立网格的思考方式，还能帮助设计者快速实现布局空间的设计决策同时也能简化设计到开发的沟通损耗。"],["h2","关于栅格"],["p","Ant Design 采用 24 栅格体系。以上下布局的结构为例，对内容区域进行 24 栅格的划分设置，如下图所示。我们为页面中栅格的 Gutter 设定了定值，即浏览器在一定范围扩大或缩小，栅格的 Column 宽度会随之扩大或缩小，但 Gutter 的宽度值固定不变。"],["p",["img",{title:null,src:"https://gw.alipayobjects.com/zos/rmsportal/YPUZpPCzFgQHVxXCIAzq.png",alt:"栅格 layout"}]],["p","对开发者而言栅格是实现动态布局的手段，而设计师对于栅格的理解源自平面设计中的栅格。在具体落地中视角的不同就容易造成偏差，最终影响还原度，继而增加沟通成本。"],["p","Ant Design 的设计师通过 4 点来实现设计过程中和工程师的沟通："],["ol",["li",["p","清晰的定义动态布局范围"]],["li",["p","尽量保持偶数思维"]],["li",["p","关键数据的交付（Gutter、Column）"]],["li",["p","区块的定义要从 column 开始到 column 结束"]]],["h2","常用模度"],["p","蚂蚁中后台涵盖了大量的不同类型和量级的产品，为了帮助不同设计能力的设计者们在界面布局上的一致性和韵律感，统一设计到开发的布局语言，减少还原损耗，Ant Design 提出了 UI 模度的概念。在大量的实践中，我们提取了一组可以用于 UI 布局空间决策的数组，他们都保持了 8 倍数的原则、具备动态的韵律感。经过验证，可以在一定程度上帮助我们更快更好的实现布局空间上的设计决策。"],["p",["img",{title:null,src:"https://gw.alipayobjects.com/zos/rmsportal/ZBeDQMLMHLRfmUlUaaII.png",alt:"双数组"}]],["p",["img",{title:null,src:"https://gw.alipayobjects.com/zos/rmsportal/QWsZUeuqYGQJqJxIPHOx.png",alt:"常用"}]],["h2","是启发，而非限制"],["p","Ant Design 在布局空间上的成果并非要限制设计产出，更多的在于引导设计者如何做到「更好」。8 倍数的双数组通过排列组合的方式可以形成千变万化种可能性，但在无限的可能性之中依然存在着「只是简单的套用数据组合」同「看起来很精妙」的差别。实现合理优雅的界面布局，在对美感的追求之上，还应当结合可用性来看待，对于企业级应用界面布局的探索，我们依然在路上。"]],meta:{category:"全局样式",order:2,title:"布局",filename:"docs/spec/layout.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#统一画板",title:"统一画板"},"统一画板"]],["li",["a",{className:"bisheng-toc-h2",href:"#适配",title:"适配"},"适配"]],["li",["a",{className:"bisheng-toc-h2",href:"#网格单位",title:"网格单位"},"网格单位"]],["li",["a",{className:"bisheng-toc-h2",href:"#关于栅格",title:"关于栅格"},"关于栅格"]],["li",["a",{className:"bisheng-toc-h2",href:"#常用模度",title:"常用模度"},"常用模度"]],["li",["a",{className:"bisheng-toc-h2",href:"#是启发，而非限制",title:"是启发，而非限制"},"是启发，而非限制"]]]}}}]);