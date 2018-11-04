export default {
    namespaced: true,

    state: {
        person: {
            name: '',
            age: '',
            children: [],
            status: false,
        }
    },
    mutations: {
        SET_NAME: (state, name) => {
            state.person.name = name;
        },

        SET_AGE: (state, age) => {
            state.person.age = age;
        },

        SET_STATUS: (state, status) => {
            state.person.status = status;
        },

        ADD_CHILD: (state, child) => {
            state.person.children.push(child);
        },

        RESET_CHILDREN: (state) => {
            state.children = [];
        }
    },
    getters: {
        numberOfChildren: state => state.person.children.length,
        name: state => state.person.name,
        age: state => state.person.age,
        children: state => state.person.children,
        status: state => state.person.status,
        isMarried: state => state.person.status,
    },
    actions: {
        setPerson: (context, person) => {
            context.commit('SET_NAME', person.name);
            context.commit('SET_AGE', person.age);
            context.commit('SET_STATUS', person.status);
        },

        addChild: (context, child) => {
            context.commit('ADD_CHILD', child);
        },

        setStatus: (context, status) => {
            context.commit('SET_STATUS', status);
        },
    },
}
