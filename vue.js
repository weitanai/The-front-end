npm install --global vue-cli
vue
Vue init webpack web-vue
 cd  web-vue
Npm install

包括数据的双向绑定、计算属性、基本指令、自定义指令及组件等
解辑视图与数据。
可复用的组件
前端路由
状态管理
虚拟 DOM( Virtual DOM) 


1.2.2 Vue 的开发模式
渐进式的 JavaScript 框架，根据项目需求，你可以选择从不同的维度来使用它

2,1 Vue 实例与数据绑定
vue 提供了很多常用的实例属性与方法，都以$开头，比如$el.

除了显式地声明数据外，也可以指向一个己有的变量，并且它们之间默认建立了双向绑定，当修改其中任意一个时，另一个也会一起变化
var myData = { 
a: 1 }
var app =new Vue({ 
el :’#app ’, 
data: myData 
}) 
console . log (app. a) ;  1 

2.1.2 生命周期
每个 ue 实例创建时，都会经历 系列的初始化过程，同时也会调用相应的生命周期钩子，我们可以利用这些钩子，在合适的时机执行我们的业务逻辑。
Vue 的生命周期钩子与之类似，比较常用的有：
• created 实例创建完成后调用，此阶段完成了数据的观测等，但尚未挂载， $el 还不可用。需要初始化处理一些数据时会比较有用，后面章节将有介绍．

• mounted el 挂载到实例上后调用，一般我们的第一个业务逻辑会在这里开始

• beforeDestroy 实例销毁之前调用。主要解绑一些使用 addEventListener 监听的事件等。

在｛｛｝｝中，除了简单的绑定属性值外，还可 使用 JavaScript 表达式进行简单的运算 三元运算
Vue js 只支持单个表达式，不支持语句和流控制。另外， 在表达式中，不能使用用户自定义
的全局变量 只能使用 Vue 白名单内的全局变量， 例如 Math Date

2.1.4 过滤器
Vue. 支持在｛｛｝｝插值的尾部添 一小管道符对数据过滤，经常用于格式，比如字母全部大写、货币千位使用逗号分隔等
过滤器应当用于处理简单的文本转换，如果要实现更为复杂的数据变换，应该使用计算属性，下一章中会详细介绍它的用法，
{ { message | filterA | filterB } } 
{{ message | filterA (‘argl ’， ‘ arg2 ’）｝｝




2.2 指令与事件
指令（ Directives ）是 vue 模板中最常用的功能.，比如 v-if  v-html  v-pre 等。指令的主要职责就是当其表达式的值改变时，相应地将某些行为应用到 DOM 上。

v-bind 的基本用途是动态更新 HTML 元素上的属性，比如 id class 

数据驱动 DOM Vue.js的核心理念，所以不到万不得已时不要主动操作 DOM，你只需要维护好数据， DOM的事 Vue会帮你优雅的处理。
表达式除了方法名， 也可以直接是内联语旬，上例也可以改写为：
<button v-on:click="show = false ”〉点击隐藏＜／ button>
Vue. methods 里的方法也代理了，所以也可以像访问 Vue 数据那样来调用方法：



2.3 语法糖
语法糖是指在不影响功能的情况下 添加某种方法实现同样的效果 从而方便程序开发。
Vue -bind v-on 指令都提供了语法糖 也可以说是缩写 比如 v-bind 可以省略 -bind,直接写一个冒号 ：”


模板内的表达式常用于简单的运算，当其过长或逻辑复杂时，会难以维护，本章的计算属性就是用于解决该问题的。

3.1 什么是计算属性
计算属性里可以完成各种复杂的逻辑，包括运算、函数调用等只要最终返回 个结果就可以。除了上例简单的用法，计算属性还可以依赖多个 Vue 实例的数据，
只要其中任 数据变化，计算属性就会重新执行，视图也会更新。
计算属性都包含getter  setter，计算属性的默认用只是利用了 getter 来读取。在你需要时，也可以提供 setter 函数 
当手动修改计算属性的值就像修改 普通数据那样时，就会触发setter函数，执行一些自定义
计算属性除了上述简单的文本插值外，还经常用于动态地设置元素的样式名称 class 和内联样style，在下章会介绍这方面的内容。
当使用组件时，计算属性也经常用来动态传递 props。
一是计算属性可以依赖其他计算属性：计算属性不仅可以依赖当前 Vue 实例的数据，还可以依赖其他实例的数据，



绑定 class 的几种方式
v-bind:class 设置一个对象，可以动态地切换 class 
<div :class=”{’active ’: isActive }”></div>
：class 表达式过长或逻辑复杂时，还可以绑定计算属性，这是一种很友好和常见的用法
数组语法
<div : class=” [isActive ? activeCls :”, errorCls] ”></div>

绑定内联样式
<div :style ＝{’color ’: color, ｝”〉文本＜／ div>




5.1 .1 v-cloak 
不需要表达式，它会在 Vue 实例结束编译时从绑定的 HTML 元素上移除


5.1.2 v-once 
v-once 也是 个不需要表达式的指令，作用是定义它的元素或组件只渲染 次，包括元素或组件的所有子节点。
首次渲染后，不再随数据的变化重新渲染，将被视为静态内容，

5.2.2 v-show 
v-show 的用法与 v-if 基本 致，只不过 -show 是改变元素的 css 属性 display 。
当 v-show表达式的值为 false 时，元素会隐藏，查看 DOM 结构会看到元素上加载了内联样式 display：none不能在template上使用。

5.2.3 v-if v-show 的选择
v-if v-show 具有类似的功能，不过 v-if 才是真正的条件渲染，它会根据表达式适当地销毁或重建元素及绑定的事件或子组件。
若表达式初始值为 false ，则 开始元素／组件并不会渲染，只有当条件第 次变为真时才开始编译。
v-show 只是简单的 css 属性切换，无论条件真与否，都会被编译。
相比之下，v-if 更适合条件不经常改变的场景，因为它切换开销相对较大，而 v-show 适用于频繁切换条件。

5.3.2 数组更新
Vue 的核心是数据与视图的双向绑定，当我们修改数组时， Vue 会检测到数据变化，所以用v-for 渲染的视图也会立即更新。 
Vue 包含了 组观察数组变异的方法，使用它们改变数组也会触发视图更新：
• push() 
• pop() 
• shift() 
• unshift（）
• splice() 
• sort（）
• reverse()

以上方法会改变被这些方法调用的原始数组，有些方法不会改变原数组，例如：
• filter() 
• concat() 
• slice()


5.4 方法与事件
我们已经引入了 Vue 事件处理的概念 v-on ，在事件绑定上，类似原生 JavaScript的onclick 等写法，也是在 HTML 上进行监听
这种在 HTML 元素上监昕事件的设计看似将 DOM JavaScript 紧藕合，违背分离的原理，实则刚好相反。
因为通过 HTML 就可以知道调用的是哪个方法，将逻辑与 DOM 解耦，便于维护。最重要的是 ViewModel 销毁时，所有的事件处理器都会自动删除，无须自己清理。

阻止单击事件冒泡<a @click.stop=”handle " ></a> 
〈！一提交事件不再重载页面 一〉
<form @submit.prevent="handle ” ></ form> 
！一修饰符可以串联一
<a @click.stop.prevent=” handle ” ></ a> 
！一只有修饰符一〉
<form @submit . prevent></form> 
！一添加事件侦听器时使用事件捕获模式一〉
<div @click . capture=” handle ” > ... </div> 
！一只当事件在该元素本身（而不是子元素） 触发时触发回调一
<div @click.self=” handle ” > ... </div> 
！一只触发 次，组件同样适用一〉
<div @click.once=” handle ” > ... </div> 

6.2 绑定值
上节介绍的单选按钮、复选框和选择列表在单独使用或单选模式下 v-model 绑定的值是个静态字符串或布尔值。 
但在业务中，有时需要绑定动态数据这时可以用 v-bind 来实现。
单选框，复选框，选择列表

与事件的修饰符类似， v-model 也有修饰符，用于控制数据同步的时机。
.lazy: 
在输入框中， v-model 默认是在 input 事件中同步输入框的数据（除了提示中介绍的中文输入
法情况外），使用修饰符 .lazy 会转变为在 change 事件中同步。这时， message 并不是实时改变的，而是在失焦或按回车时才更新。
.number: 
使用修饰符.number 可以将输入转换为 Number 类型，否则虽然你输入的是数字，但它的类型
其实是 String ，比如在数字输入框时会比较有用
.trim: 
修饰符 .trim 可以自动过滤输入的首尾空格，



Vue的组件就是提高重用性的，让代码可复用

<table> 
<tbody is=”my-component” ></tbody>

JavaScript 对象是引用关系 data 使用函数return值

如果你要直接传递数字、布尔值、数组、对象，而且不使用 v-bind ，传递的仅
仅是字符串，


当你的组件需要提供给别人使用时，推荐都进行数据验证，比如某个数据必须是数字类型，如果传入字符串，就会在控制台弹出警告
props : { 
／／必须是数字类型
propA : Number, 
／／必须是字符串或数字类型
propB : [String, Number] , 
／／布尔值，如果没有定义，默认值就是 true
propC: { 
type : Boolean , 
default : true 
}}
• String • Number • Boolean • Object • Array • Function
使用 instanceof 检测。



父子组件通信、兄弟组件通信、跨级组件通信
7.3.3 非父子组件通信:兄弟组件和跨多级组件。
2.x 推荐使用 个空的 Vue 实例作为中央 件总线（ bus ），也就是 个中介
div id="app">
{{message}}
<component-a></component-a>
</div>
<script>

var bus=new Vue();

Vue.component('component-a',{
template:'<button @click="handle">deliver event</button>',
methods: {
handle: function(){
bus.$emit('on-message', 'from a content');
}
}
});

var app=new Vue({
el:'#app',
data: {
message:''
},
mounted: function(){
var _this=this;
bus.$on('on-message', function(msg){
_this.message=msg;
});
}
})
</script>

首先创建了 个名为 bus 的空 Vue 实例，里面没有任何内容；然后全局定义了组件component-a ；
最后创建 Vue 实例 app ，在 app 初始化时，也就是在生命周期 mounted 钩子函数里监听了来自 bus 的事件 on-message ，
而在组件 component-a 中，点击按钮会通过 bus 把事件 on-message发出去，此时 app 就会接收到来自 bus 的事件，进而在回调里完成自己的业务逻辑。
如果深入使用，可以扩展 bus 实例，给它添加 data methods computed 等选工页，这些都是可以公用的，
在业务中，尤其是协同开发时非常有用，因为经常需要共享 些通用的信息，比如用户登录的昵称、性别、邮箱等，还有用户的授权 token 等。
只需在初始化时让 bus 获取 次，任何时间、任何组件就可以从中直接使用了，在单页面富应用（ SPA ）中会很实用，我们会在进阶篇里逐步介绍这些内容。

 Vue 提供了子组件索引的方法，用特殊的属性 ref来为子组件指定一个索引名称

7.4.3 slot 用法
父组件模板的内容是在父组件作用域内编译，子组件模板的内容是在子组件作用域内编译。
props 传递数据、 events 触发事件和 slot 容分发就构成了 vue 组件的 API 来源，再复杂的组件也是由这3部分构成的。

给<slot>元素指定一个 name 后可以分发多个内容，具名 slot 可以与单个 slot共存.
作用域插槽更具代表性的用例是列表组件，允许组件自定义应该如何渲染列表每1项

7.4.5 访问 slot
Vue 2.x 提供了用来访问被 slot分发的内容的方法 $slots


7.5.1 递归组件
组件在它的模板内可以递归地调用自己 只要给组件设置 name 选项就可以了

7.5.2 内联模板
vue 提供内联模板的功能，在使用组件时，给组件标签使用 inline-template 特性，组件就会把它的内容当作模板，而不是把它当内容分发，这让模板更灵活

7.5.3 动态组件
Vue.js 提供了 个特殊的元素＜component> 用来动态地挂载不同的组件 使用is 特性来选择要挂载的组件
<component :is ＝” currentV ew ”＞＜／ component>

7.5.4 异步组件
当你的工程足够大 使用的组件足够多时 是时候考虑下性能问题了 因为一开始把所有的组件都加载是没必要的 笔开销。
好在 Vue.js 许将组件定义为 个工厂函数，动态地解析组件。只在组件需要渲染时触发工厂函数 并且把结果缓存起来，用于后面的再次渲染
7.6.1 $nextTick 
异步更新队列。
Vue 在观察到数据变化时并不是直接更新 DOM，而是开启 一个队列，并缓冲在同一事件循环中发生的所有数据改变。
在缓冲时会去除重复数据，从而避免不必要的计算和 DOM 操作。然后，在下一个事件循环tick 中，Vue 刷新队列井执行实际（己去重的）工作.

需要动态地去创建 Vue 实例， Vue 提供了 Vue.extend $mount 两个方法来手动挂载一个实例。
new MyComponrnT().$mount (’#mount-div ’); 



9.3.1 基本参数
createElement 构成了 Vue Virtual Dom 模板，它有 个参数：
第一个参数必选，可以是 HTML 标签，也可以是 个组件或函数；第2个是可选参数，数据对象，在 template 中使用。第三个是子节点，也是可选参数，用法 致。
{
‘class ’:{ 
foo : true , 
bar: false 
}
stxle : { 
color :’red ’
fontSize :’14px ’ 
}
props: { 
my Prop : ’ bar ’ 
}

domProps: { 
innerHTML: baz
},
on : { 
click : this .clickHandler 
}
}


9.3.3 使用 JavaScript 代替模板功能
修饰符	对于句柄
.stop 	event.stopPropagation()
.prevent 	Event.preventDefault()
.self 	 If(event.terget!==eventcurrentTarget)return
.enter、 .13	If(event.keyupCode!==13)return 替换需要13位的keycode
.capture	!
.once	~
.capture	~!


我们已经介绍过可以用 this.$slots 来访问

9.4 函数化组件
Vue提供了functional 的布尔值选项，设置为 true 可以使组件无状态和无实例，也就是没有data, this 上下文。
这样用 render 函数返回虚拟节点可以更容易渲染，因为函数化组件只是一个函数，渲染开销要小很多。
Render 函数提供了第 个参数 context 来提供临时上下文 组件需要的data props lots children parent 都是通过这个上下文来传递的,
比如 this .level 要改context. props.level, this.$slots.default 改写为 context.children


9.5 JSX 
<Anchor :level="1">
<span>一级</span>标题
</Anchor>

return createElement('Anchor', {
props:{
level:1
}
},[
createElement('span', '一级'),
'标题'
])

new Vue({
el:'#app',
render(h){
return(
<Anchor :level="1">
<span>一级</span>标题
</Anchor>
)}
})






10.1 前端工程化与 webpack 
而本章要介绍的前端工程化工具 webpack ，打包后的代码已经不只是你写的代码，其中夹杂了很多 webpack 自身的模块处理代码。
因此，学习 webpack 最难的是理解“编译”的这个概念，否则会一直存在一个疑问：为什么要这样做？

任何时候，一个文件依赖于另一个文件，webpack 就把此视为文件之间有依赖关系。这使得 webpack 可以接收非代码资源(non-code asset)（例如图像或 web 字体），
并且可以把它们作为_依赖_提供给你的应用程序。
webpack 从命令行或配置文件中定义的一个模块列表开始，处理你的应用程序。
 从这些入口起点开始，webpack 递归地构建一个依赖图，这个依赖图包含着应用程序所需的每个模块，
 然后将所有这些模块打包为少量的 bundle- 通常只有一个 - 可由浏览器加载

runtime，以及伴随的 manifest 数据，主要是指：在浏览器运行时，webpack 用来连接模块化的应用程序的所有代码。runtime 包含：
在模块交互时，连接模块所需的加载和解析逻辑。包括浏览器中的已加载模块的连接，以及懒加载模块的执行逻辑。
那么，一旦你的应用程序中，形如 index.html 文件、一些 bundle 和各种资源加载到浏览器中，会发生什么？你精心安排的 /src 目录的文件结构现在已经不存在，
所以 webpack 如何管理所有模块之间的交互呢？这就是 manifest 数据用途的由来……
当编译器(compiler)开始执行、解析和映射应用程序时，它会保留所有模块的详细要点。这个数据集合称为 "Manifest"，
当完成打包并发送到浏览器时，会在运行时通过 Manifest 来解析和加载模块。无论你选择哪种模块语法，
那些 import 或 require 语句现在都已经转换为 __webpack_require__ 方法，此方法指向模块标识符(module identifier)。
通过使用 manifest 中的数据，runtime 将能够查询模块标识符，检索出背后对应的模块。

10.3 单文件组件与 vue-loader





注册插件需要 个公开的方法 install ，它的第1 个参数是 Vue 构造器，第2 参数是一个可选的选项对象。
MyPlugin .install = function (Vue, options) { }
Vue . use(MyPlugin) 
Vue . use (MyPlugin , { }) 


前端路由与 vue-router
webpack 时提到它的主要使用场景是单页面富应用（ SPA ，而 SPA 的核心就是前端路由.就是网址，比如www.github.com. 
再专业就是每次 GET. POST 等请求在服务端有 个专门的正则配置列表，然后匹配到具体的 1条路径后，分发到不同的 Controller 进行各种操作，
最终将 html或数据返回给前端，这就完成 IO.
然后就有了前后端分离的开发模式，后端只提供 API 来返回数据，前端通过 Ajax 获取数据后，再用一定的方式渲染到页面里，
这么做的优点就是前后端做的事情分得很清楚，后端专注在数据上，前端专注在交互和可视化上，如果今后再开发移动 App ，那就正好能使用一套 API 。
当然 ，缺点也很明显，就是首屏渲染需要时间来加载 css js 这种开发模式被很多公司认同，也出现了很多前端技术拢，
比如以 jQuery + artTemplate +Seajs(requirejs)+gulp 为主的开发模式可谓是万金油了。

怎样算是 SPA ,其实就是在前后端分离的基础上，加一层前端路由。

前端路由，即由前端来维护一个路由规则。实现有两种，一种是利用 url和 hash 就是常说的锚点
（刑， JavaScrip／通过 hashChange 事件来监听 url 的改变， IE7 及以下需要用轮询：
另一种就HTML5 History 模式，它使 url 看起来像普通网站那样，以“／”分剖，没有＃，但页面并没有跳转，
不过使用这种模式需要服务端支持，服务端在接收到所有的请求后，在fl 指向同一个 html件，不然会出现 404 。
因此， SPA 只有 html时，整个网站所有的内容都在这 html 里，通过JavaScript 来处理。
要独立开发一个前端路由，需要考虑到页面的可插拔、页面的生命周期、内存管理等问题

Vue-router基本用法
每个页面对应一个组件，也就是对应一个.vue 文件。在 router 目录下创建 views 目录，用于存放所有的页面。


加一个路由视图＜router-view＞来挂载所有的路由组件：

11.1.3 跳转
vue-router 有两种跳转页面的方法，第1种是使用内置的<router-link>组件，它会被渲染为<a>标签.
<router-link to=”/about” >跳转到 about </router-link>

tag 可以指定渲染成什么标签，比如＜router-link to=
”/about ““tag=li” 〉渲染的结果就是<li>而不是<a>

使用 replace 不会留下 History 记录，所以导航后不能用后退键返回上一个页面，如<router-link to＝”／about” replace＞。
跳转页面可能需要在 JavaScript 里进行,类似window. location.href。这时可以用第2种跳转方法.

11.1.4 高级用法
在 SPA 项目中，如何修改网页的标题？
那么问题就来了，在 Vue 工程里，在哪里、在什么时候修改标题呢？比较容易想到的 个办法是，在每个页面的 vue 文件里 通过 mounted 钩子修改。
这种办法没有问题，但是页面多了维护起来会很麻烦，而且这些逻辑部是重复的。
比较理想的一个思路就是，在页面发生路由改变时，统 设置 vue-router 提供了导航钩子beforeEach afterEach  会在路由即将改变前和改变后触发，
所以设置标题可以在 beforeEach钩子完成。
const router = new lueRouter (RouterConfig) ; 
router.beforeEach( (to, from , next) => { 
window.document . title = to .meta.title ; 
next(); }）；
导航钩子有 个参数：
• to 即将要进入的目标的路由对象
• from 当前导航即将要离开的路由对象
• next 调用该方法后，才能进入下一个钩子。
路由列表的 meta 宇段可以自定义 些信息，比如我们将每个页面的 title 写入了 meta 来统维护， beforeEach 钩子可以从路由对象 to里获取 meta 信息，
从而改变标题。

11.2 状态管理与 Vuex :统一管理组件状态的，它定义了一系列规范来使用和操作数据，使组件应用更加高效。
11.2.1 状态管理与使用场景：Vuex解决的问题与 bus 类似，它作为 vue的 1个插件来使用，可以更好地管理和维护整个项目的组件状态。
大型单页应用，更适合多人协同开发，如果你的项目不是很复杂，或者希望短期内见效，你需要认真考虑是否真的有必要使用 Vuex,
也许像 7.3.3 小节介绍的 bus 方法就能很简单地解决你的需求。当然，并不是所有大型多人协同开发的 SPA 项目都必须使用 Vuex 事实上，
我们在 些生产环境中只是使用 bus 也能实现得很好，用与否主要取决于你的团队和技术储备。
一个组件可以分为数据（ model) 和视图（ view ），数据更新时，视图也会自动更新。在视图中又可以绑定一些事件，它们触发 methods 里指定的方法
，从而可以改变数据、更新视图，这是个组件基本的运行模式。



Vuex 基本用法

import Vuex from ’ vuex ’; 
import App from ’. / app .vue ’; 
Vue.use(VueRouter) ; 
Vue .use(Vuex) ; 

／／路由配置
const store = new Vuex . Store({ 
II vuex 的配置
}); 
new Vue({ 
el :’#app ’, 
router : router, 
／／使用 vu ex 
store: store , 
render: h => { 
return h (App) }
})
仓库 store 包含了应用的数据（状态）和操作过程。 Vuex 里的数据都是响应式的，任何组件使用同一store 的数据时，
只要 store 的数据变化，对应的组件也会 即更新。

const store= new Vuex.Store({ 
state: { 
count: 0 
., } ) 

在任何组件内，可以直接通过$store.state.count 读取：

在组件内，来自 store 的数据只能读取，不能手动改变，改变 store 中数据的唯 途径就是显式地提交 mutations
mutations: { 
increment (state) { 
state . count ++ ; 
} , 
decrease (state) { 
state.count --;
}

mutations 还可以接受第二个参数，可以是数字、字符串或对象等类型。比如每次增加的不是1，而是指定的数量，函数的参数可以设定默认值，
当没有传入该参数时，使用设直的值．（es6） 
mutations : { 
increment (state, n = 1) { 
state.count += n ; 
}}


11.2.3 高级用法
Vuex 还有其他 个选项可以使用： getters  actions  modules

这种用法与组件的计算属性非常像。 getter 可以依赖其他的 getter ，把 getter作为第二个参数。比如再写一个 getter
main.js
const store=new Vuex.Store({ 
state : { 
list : [1 , 5 , 8 , 10, 30 , 50]
},
getters : { 
filteredList : state => { 
return state . list. filter(item => item < 10); 
} , 
listCount (state , getters) => { 
return getters.filteredList.length;}
}   
}) 

<div>{{ list }}<ldiv> 
<div>{{ listCount }}<ldiv> 
export default { 
computed: { 
list () { 
return this.$store.getter .filteredList ; 
listCount () { 
return this .$store .getters .listCount ;} 
}}

上一节提到， mutation 里不应该异步操作数据，所以有了 actions 选项 action 与mutation相像
，不同的是 action 里面提交的是 mutation并且可以异步操作业务逻辑。


11.3 实战：中央事件总线插件 vue-bus
了中央事件总线 bus 的用法，它作为一 个简单的组件传递事件，用于解决跨级和兄弟组伊通信的问题。
vue-bus 插件像 vue-router vuex一样，Vue 添加一个属性$bus ，并代理 $emit $on $off 3个方法
const install=function(vue){
const Bus=new Vue({
methods:{
emit(event, ...args){
this.$emit(event, callback);
},
on(event, callback){
this.$on(event, callback);
},
offscreenBuffering(event, callback){
this.$off(event, callback);
},
}
});
Vue.prototype.$bus=Bus;
}
export default install;


使用 vue-bus 有两点需要注意 第一是$bus on 应该在 created 钩子内使用，如果在 mounted使用，它可能接收不到其他组件来自 created 钩子内发出的事件：
第二点是使用了$bus. on ，在befordestroy 钩子里应该再使用 $bus.off 解除，因为组件销毁后，就没必要把监听的句柄储存在vue-bus里了.


颜色格式
为了尽可能简单地使用颜色，我建议颜色格式要按照以下顺序排列：
1.HSL 值;
2.RGB 值;
3.十六进制（使用小写并尽可能简写）
.foo {
  color: hsl(0, 100%, 50%);
}
.foo {
  color: rgb(255, 0, 0);
}

.foo {
  color: #f00;
}
.foo {
  color: #FF0000;
}
.foo {
  color: red;
}

变亮和变暗颜色
lighten 和 darken 函数都是通过增加或者减小HSL中颜色的亮度来实现调节的。基本上，它们就是 adjust-color 函数添加了 $lightness 参数的别名。
问题是，这些函数经常并不能实现预期的结果。另一方面，通过混合白色 或 黑色实现变量或变暗的 mix 函数，是一个不错的方法。

和上述两个函数相比，使用 mix 的好处是，当你降低颜色的比例时，它会渐进的接近黑色（或者白色），而 darken 和 lighten 立即变换颜色到黑色或白色。

Maps
在 Sass 中，样式开发者可以使用 map 这种数据结构 —— Sass 团队使 map 可以映射关联数组、哈希表甚至是 Javascript 对象。
map 是一种映射任何类型的键值对，包括内嵌类型的 map，但是我不建议使用 map 存储复杂数据类型。
map 的使用应该遵循下述规范：
冒号(:)之后添加空格；
左开括号(()要和冒号 (:)写在同一行；
如果键是字符串（99% 都是字符串），则使用括号包裹起来。
每一个键值对单独一行；
每一个键值对以逗号(,)结尾；
为最后一个键值对添加尾部逗号 (,)，方便添加新键值对、删除和重排已有键值对；
单独一行书写右闭括号 ())；
右闭括号 ())和分号(;)之间不使用空格和换行。
$breakpoints: (
  'small': 767px,
  'medium': 992px,
  'large': 1200px,
)
CSS规则集
在这里，极有可能颠覆每个人对书写 CSS 规则集的认知（根据众多规范整理而成，包括CSS Guidelines）：
相关联的选择器写在同一行；不相关联选择器分行书写；
最后一个选择器和左开大括号({)中间书写一个空格；
每个声明单独一行；
冒号(:)后添加空格；
所有声明的尾部都添加一个分号 (;)；
右闭大括号(})单独一行；
右闭大括号(})添加空行。
.foo, .foo-bar,
.baz {
  display: block;
  overflow: hidden;
  margin: 0 auto;
}
.foo,
.foo-bar, .baz {
    display: block;
    overflow: hidden;
    margin: 0 auto }
