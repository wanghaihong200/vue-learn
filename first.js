var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        }
});
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于' +new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el:'#app-3',
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos:[
            { text: "学习 javaScript"},
            { text: '学习VUE'},
            { text: '创建激动人心的代码'}
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: "Hello Vue.js!"
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app6 = new Vue({
    el: "#app-6",
    data:{
        message: '来自app6的message！'
    }
})
