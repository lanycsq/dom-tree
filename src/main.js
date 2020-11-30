// const div = dom.find('#test>.red')[0] // 获取对应的元素
// console.log(div);             
// dom.style(div, 'color', 'red') // 设置 div.style.color

// const divList = dom.find('.red') // 获取多个 div.red 元素
// dom.each(divList, (n) => console.log(n)) // 遍历 divList 里的所有元素dom

//创建一个div标签
const div = dom.create("<div>newDiv</div>")
console.log(div);

dom.after(test, div)

const div3 = dom.create("<div id='parent'></div>")
dom.wrap(test, div3)

//清空一个div
const nodes = dom.empty(window.empty)
console.log(nodes);

dom.attr(test, "title", "nihao")
const title = dom.attr(test, "title")
console.log(`title:${title}`);

dom.text(test, "你好，这是新的内容")
const textString = dom.text(test)
console.log(textString);

dom.html(test, "面向对象<p>封装</p>")
const htmlString = dom.html(test)
console.log(htmlString);


dom.style(test, {
    border: '1px solid red',
    color: 'blue'
})
const testColor = dom.style(test, 'color')
console.log(testColor);

dom.style(test, 'font-size', '28px')
dom.class.add(test, 'bgred')
dom.class.remove(test, 'bgred')
const ishas = dom.class.has(test, 'bgred')
console.log(ishas);

const fn = () => {
    console.log('点击了');
}
dom.on(test, 'click', fn)
dom.off(test, 'click', fn)

const testDiv = dom.find('#test')[0]
console.log(testDiv);
const findDiv = dom.find('#find')[0]
const find = dom.find('.red', findDiv)[0]
console.log(find);
console.log("-------------------");

const S2 = dom.find("#s2")[0]
console.log(dom.parent(S2));
console.log(dom.sublings(S2));
console.log("=============");
console.log(dom.next(S2));
console.log(dom.previous(S2));


const t = dom.find("#travel")[0]
dom.each(dom.children(t), (n) => {
    dom.style(n, 'color', 'red')
})

console.log(dom.index(dom.find("#t2")[0]));