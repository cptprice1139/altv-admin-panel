let app = Vue.createApp({
    data() {
        return {
            show: false,
            page: 'dashboard'
        }
    },
    mounted() {
        this.show = true;
    },
    methods: {
        switchPage(page) {
            if (this.page !== page) this.page = page;
        }
    },
    computed: {

    }
}).mount('#app')