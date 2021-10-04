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
                        alt: null,
                        id: 0,
                        name: 'Mae',
                        ping: 0,
                        position: { x: '', y: '', z: '' },
                        health: '',
                        armor: '',
                        dimension: '',
                        model: '',
                        visible: '',
                        ip: '',
                        hwidhash: '',
                        hwidexhash: '',
                        socialid: ''
                    }
                ],
                currentSort: 'id',
                currentSortDir: 'asc',
                page: '',
                informationType: 'actions',
                currentSelected: {
                    alt: null,
                    id: 0,
                    name: '',
                    ping: 0,
                    position: { x: '', y: '', z: '' },
                    health: 0,
                    armor: 0,
                    dimension: 0,
                    model: '',
                    visible: true,
                    ip: '',
                    hwidhash: '',
                    hwidexhash: '',
                    socialid: ''
                },
                listInformation: {}
            }
        }
    },
    mounted() {
        this.show = true;

        this.players.currentSelected = this.players.list[0] !== undefined ? this.players.list[0] : this.currentSelected;

        if ('alt' in window) {
            alt.on('data', (data) => {
                let data1 = JSON.parse(data);

                for (let i in data1) {
                    this.addPlayerToList(data1[i].alt, data1[i].id, data1[i].name, data1[i].ping, data1[i].pos, data1[i].health, data1[i].armor, data1[i].dimension, data1[i].model, data1[i].visible, data1[i].ip, data1[i].hwidhash, data1[i].hwidexhash, data1[i].socialid);
                }
            })
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
        addPlayerToList(alt, id, name, ping, pos, health, armor, dimension, model, visible, ip, hwidhash, hwidexhash, socialid) {
            this.players.list.push({
                alt: alt,
                id: id,
                name: name,
                ping: ping,
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
        playerAction(action) {
            switch (action) {
                case 'visible':
                    this.players.currentSelected.visible = !this.players.currentSelected.visible;
                    break;
            }

            if ('alt' in window) {
                alt.emit('action', action, this.players.currentSelected, '');
            }
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