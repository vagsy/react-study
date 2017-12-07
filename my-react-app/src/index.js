import React from 'react';
import ReactDOM from 'react-dom';
let names = ['大毛', '', '三毛'];
//{}里放的是JS表达式，表达式是由变量的运行符组合而成
// 1+1 a+b fn(1)  必须返回一个值
//Warning: Each child in an array or iterator should have a unique "key" prop
//Warning解决办法render的html中加上唯一个key
let style = {backgroundColor:'pink'};

//render中div解构和js代码可以互相嵌套，<>--html代码 {}--js表达式
ReactDOM.render(<div>
	{
		names.map(function (item,index) {
			return item.length>0?<span style={style} className="red" key={index}>{item}</span>:null;//null合法的react元素，表示什么都不显示
		})
	}
</div>, document.querySelector('#root'));