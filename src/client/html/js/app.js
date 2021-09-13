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
                        id: 1,
                        name: 'Test1',
                        ping: 12
                    },
                    {
                        id: 2,
                        name: 'Test2',
                        ping: 354
                    },
                    {
                        id: 5,
                        name: 'Test3',
                        ping: 32
                    },
                    {
                        id: 5,
                        name: 'Test4',
                        ping: 11
                    },
                    {
                        id: 3,
                        name: 'Test5',
                        ping: 7
                    },
                    {
                        id: 6,
                        name: 'Test6',
                        ping: 54
                    },
                    {
                        id: 46,
                        name: 'Test7',
                        ping: 34
                    },
                    {
                        id: 23,
                        name: 'Test8',
                        ping: 23
                    },
                    {
                        id: 97,
                        name: 'Test9',
                        ping: 87
                    },
                    {
                        id: 105,
                        name: 'Test10',
                        ping: 12
                    },
                ],
                currentSort: 'id',
                currentSortDir: 'asc',
                page: ''
            }
        }
    },
    mounted() {
        this.show = true;
    },
    methods: {
        switchPage(page) {
            if (this.page !== page) this.page = page;
        },
        switchPlayerPage(name) {
            if (this.players.page !== name) this.players.page = name;
            console.log(this.players.page)
        },
        sort(id) {
            this.players.currentSortDir = this.players.currentSortDir === 'asc' ? 'desc' : 'asc';
            this.players.currentSort = id;
        }
    },
    computed: {
        sortedPlayersList() {
            const list = this.players.list.slice();
            if (!!this.players.currentSort) {
                list.sort((a, b) => {
                    a = a[this.players.currentSort]
                    b = b[this.players.currentSort]

                    return (a === b ? 0 : a > b ? 1 : -1) * (this.players.currentSortDir === 'asc' ? 1 : -1)
                });
            }

            return list;
        }
    }
}).mount('#app')