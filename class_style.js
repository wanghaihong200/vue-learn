/*
var bindA = new Vue({
    el: '#bindA',
    data: {
        isActive: true,
        hasError: null
    },
    computed: {
        classObject: function () {
            return {
                'active': this.isActive && !this.hasError,
                'text-danger': this.hasError && this.hasError.type === 'fatal'
            }
        }
    }
})*/

var bindA = new Vue({
    el: '#bindA',
    data: {
        activeClass : 'active',
        errorClass: 'text-danger'
    }
});

var bindB = new Vue({
    el: '#bindB',
    data: {
        activeColor: 'red',
        fontSize: 30
    }
});

var example_1 = new Vue({
    el: '#example-1',
    data: {
        items: [
            {message:'Foo'},
            {message:'Bar'},
            {message:'Foo Bar'},
        ]
    }
});

var v_for_object = new Vue({
    el: '#v-for-object',
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: '30'
        }
    }
})
