let app = Vue.createApp({
    data() {
        return {
            show: false,
            page: 'players',
            dashboard: {

            },
            server: {

            },
            vehicle: {

            },
            players: {
                list: [
                    {
                        id: 0,
                        name: 'Marlon'
                    },
                    {
                        id: 1,
                        name: 'Justin'
                    },
                    {
                        id: 3,
                        name: 'Lisa'
                    },
                ]
            }
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