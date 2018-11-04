import {mapGetters, mapActions} from 'vuex';

export default {
    computed: {
        ...mapGetters({
            numberOfChildren: 'wizard/numberOfChildren',
            name: 'wizard/name',
            age: 'wizard/age',
            children: 'wizard/children',
            status: 'wizard/status',
            isMarried: 'wizard/isMarried',
        }),
    },

    methods: {
        ...mapActions({
            setPerson: 'wizard/setPerson',
            addChild: 'wizard/addChild',
            setStatus: 'wizard/setStatus',
        }),
    },
}
