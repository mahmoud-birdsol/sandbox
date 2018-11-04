<template>
    <form-wizard title="Set Person" color="#2e6ae2" error-color="#2254bc" ref="wizard">
        <tab-content title="Person information">
            <person-information></person-information>
        </tab-content>

        <tab-content title="Add Children" v-if="isMarried">
            <h1>Tab Is married</h1>
        </tab-content>

        <tab-content title="Not Married" v-if="!isMarried">
            <h1>Tab is not married</h1>
        </tab-content>


        <div slot="prev"></div>
        <div slot="next"></div>
        <div slot="finish"></div>
    </form-wizard>
</template>

<script>
    import WizardMixin from '../mixins/wizard';
    import PersonInformation from './PersonInformation.vue';

    export default {
        name: 'wizard-store',

        mixins: [
            WizardMixin
        ],

        components: {
            PersonInformation
        },

        mounted() {
            let vm = this;
            Event.listen('next-tab',  () => {
                vm.$refs.wizard.nextTab();
            });
        }
    }
</script>
