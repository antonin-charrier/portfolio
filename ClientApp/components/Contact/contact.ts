import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class ContactComponent extends Vue {
    link() {
        return this.$i18n.locale === 'fr'
            ? 'https://www.linkedin.com/in/antonin-charrier'
            : 'https://www.linkedin.com/in/antonin-charrier/?locale=en_US';
    };
}
