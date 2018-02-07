Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>这是一个 {{todo.text}} 项</li>'
});

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: '蔬菜'},
            { id: 1, text: '奶酪'},
            { id: 2, text: '其他人类食物'},
        ]
    }
});

var data = {
    a: 1
};

var vm = new Vue({
    el: '#example',
    data: data
});

