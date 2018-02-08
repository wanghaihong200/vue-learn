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
    message: 'Hello'
};

var vm = new Vue({
    el: '#example',
    data: data,
    /*computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        }
    }*/
    //computed:只要message没变化，reversedMessage就作为一个被缓存的属性进行访问，
    //methods：每次读取{{ reverseMessage() }}，就要执行函数 reverseMessage()
    methods: {
        reverseMessage: function () {
            return this.message.split('').reverse().join('');
        }
    }
});

var demo = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
    },
    /*watch : {
        firstName: function (val) {
            this.fullName = val+ '' +this.lastName
        },
        lastName: function (val) {
            this.fullName = this.firstName+ '' +val
        }
    }*/
    computed: {
        fullName: {
            //getter函数
            get: function () {
                return this.firstName+ '' +this.lastName
            },
            //setter函数
            set: function (newValue) {
                var names = newValue.split(' ');
                this.firstName = names[0];
                this.lastName = names[names.length - 1]
            }
        }
    }
});

var watch_example = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: "你要先提出问题，我才能给你答案！",
    },
    watch: {
        //只要question发生改变，此函数就会执行
        question: function (newQuestion, oldQuestion) {
            this.answer = "等待输入停止...."
            this.getAnswer()
        }
    },
    methods: {
        // _.debounce 是由lodash 提供的函数
        // 在运行特别消耗性能的操作时，可以使用 _.debounce 来限制频率
        // 在下面这种场景中，我们需要限制访问 yesno.wtf/api 的频率
        // 等到用户输入完毕之后，ajax 请求才会发出
        getAnswer: _.debounce(
            function () {
                if (this.question.indexOf('?') === -1) {
                    this.answer = "问题通常需要包含一个中文问号。"
                    return
                }
                this.answer = "思考中"
                var vm = this
                axios.get("https://yesno.wtf/api").then(
                    function (response) {
                        vm.answer = _.capitalize(response.data.answer)
                    }).catch(
                        function (error) {
                            vm.answer = "错误！API 无法处理。" +error
                        })
            },
            // 这是用户停止输入操作后所等待的毫秒数，500ms内，用户继续输入，则重新计时
            500
        )
    }
})




