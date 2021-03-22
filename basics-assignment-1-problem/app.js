const app = Vue.createApp({
    data: function(){
        return{
            name: 'Gersi',
            age: 28,
            imageLink: 'https://www.welt.de/img/motor/mobile160263513/7751620007-ci23x11-w1280/Ferrari-Testarossa-1984-us-version-2.jpg'
        }
    },

    methods:{
        outputName()
        {
            return this.name;
        },
        outputAge()
        {
            return  this.age;
        },
        outputRandomNum()
        {
            return Math.random()
        }
    }
});

app.mount('#assignment');