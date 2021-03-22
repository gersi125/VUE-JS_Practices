const app = Vue.createApp(
{
    data()
    {
        return{
            txt: '',
            inputTxt: ''
        };

    },
    methods:
    {
        
        alertFunc(event)
        {
            event.preventDefault();
            alert("Hello Sir!");
        },
        inputFunc()
        {
            this.inputTxt = this.txt;
        },
        setText(event)
        {
            this.txt = event.target.value;
        }

    }
});

app.mount("#assignment");