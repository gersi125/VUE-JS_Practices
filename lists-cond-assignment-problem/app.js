const app = Vue.createApp({

    data() {
        return {
            enteredTask: '',
            tasks: [],
            visible: true
        };
    },
    methods: {
        enterTask()
        {
            this.tasks.push(this.enteredTask);
        },
        visibility()
        {
            this.visible = !this.visible;
        }
    }
});

app.mount('#assignment');