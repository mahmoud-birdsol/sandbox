<template>
    <div>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" name="name" class="form-control" v-model="form.name">
        </div>
        <div class="form-group">
            <label for="age">Age</label>
            <input type="number" name="age" class="form-control" v-model="form.age">
        </div>
        <h3>Are you married</h3>
        <div class="btn-group text-center">
            <button class="btn btn-danger" @click="finish()">No</button>
            <button class="btn btn-primary" @click="goToChildrenTab()">Yes</button>
        </div>
    </div>
</template>

<script>
    import WizardMixin from '../mixins/wizard';

    export default {
        name: 'person-information',

        mixins: [
            WizardMixin
        ],

        data() {
            return {
                form: {
                    name: '',
                    age: '',
                },
            }
        },

        methods: {
            finish() {
                this.setStatus(false);
                Event.fire('next-tab');
            },

            goToChildrenTab() {
                this.setPerson({
                    name: this.form.name,
                    age: this.form.age,
                });

                this.setStatus(true);

                Event.fire('next-tab');
            },

        }
    }
</script>
