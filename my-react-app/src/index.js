import React from 'react';
import ReactDOM from 'react-dom';
//声明了一个React元素
let ele = <h1>hello</h1>;
console.log(ele);
//1.标签类型 属性对象 子元素
// let ele2 = React.createElement('h1', null, ['hello']);
// console.log(ele2);

// let _ele2 = React.createElement('div', null, [React.createElement('span', null, ['hello'])]);
// let _ele2 = <div><span>hello</span></div>

let _ele2 = React.createElement('div', {className: 'red'}, ['hello']);
console.log(_ele2)
//最终的React元素是这样的
// let obj = {
// 	type: 'div',
// 	props: {
// 		className: 'red',
// 		children: ['hello']
// 	}
// };
ReactDOM.render(_ele2, document.querySelector('#root'));
