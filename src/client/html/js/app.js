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
                list: [],
                currentSort: 'id',
                currentSortDir: 'asc',
                page: '',
                informationType: 'information',
                currentSelected: {},
                listInformation: {}
            }
        }
    },
    mounted() {
        this.show = true;

        this.players.currentSelected = this.players.list[0] !== undefined ? this.players.list[0] : new this.currentSelected;

        if ('alt' in window) {
            alt.on('')
        }
    },
    methods: {
        switchPage(page) {
            if (this.page !== page) this.page = page;
        },
        switchPlayerPage(player) {
            if (this.players.page !== player.name) this.players.page = player.name;
            this.players.currentSelected = player;
        },
        switchPlayerInformationType(name) {
            if (this.players.informationType !== name) this.players.informationType = name;
        },
        addPlayerToList(name, pos, health, armor, dimension, model, visible, ip, hwidhash, hwidexhash, socialid) {
            this.players.list.push({
                _id: 0,
                name: name,
                pos: pos,
                health: health,
                armor: armor,
                dimension: dimension,
                model: model,
                visible: visible,
                ip: ip,
                hwidhash: hwidhash,
                hwidexhash: hwidexhash,
                socialid: socialid
            })
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