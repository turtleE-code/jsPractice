const menu = document.querySelector('#menu');
let img;

// ただのテキスト挿入になる
// menu.textContent = content;

const menuLists = [
    'strawberry.jpg',
    'lime.jpg',
    'mango.jpg',
    'lemon.jpg',
    'fig.jpg',
    'apple.jpg',
];
console.log(menuLists)

for(let i = 0; i < menuLists.length; i++)
{
    img = menuLists[i];
    const content = `<div><img src="images/${img}" alt=""></div>`;
    menu.insertAdjacentHTML('beforeend', content);
}


