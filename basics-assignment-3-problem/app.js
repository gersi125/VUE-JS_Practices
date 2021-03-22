const app = Vue.createApp({
data() {

    return{
        result: 0
    };
},
computed: {

    additionResult: function()
    {
        if(this.result < 37)
        {
            return 'Not there yet';
        } else if( this.result > 37)
        {
            return 'Too much!';
        } else {
            return this.result;
        }
    }
},
watch: {
    result() {
        const that = this;
        setTimeout(function()
        {
            that.result = 0
        }, 5000);
    }
},
methods: {
    addFunc(num)
    {
        this.result += num;
    }
}
});

app.mount('#assignment');