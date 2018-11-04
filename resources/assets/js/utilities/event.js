window.Event = new class {

    /**
     * Instantiate a new Event class.
     */
    constructor() {
        this.vue = new Vue();
    }

    /**
     * Fire an event to broadcast across the application.
     *
     * @param event
     * @param data
     */
    fire(event, data = null){
        this.vue.$emit(event, data);
    }

    /**
     * Listen for a broadcaster event across the application
     *
     * @param event
     * @param callback
     */
    listen(event, callback){
        this.vue.$on(event, callback);
    }
};
