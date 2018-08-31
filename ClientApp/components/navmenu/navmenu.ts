import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class NavMenuComponent extends Vue {

    locales = [
        'en',
        'fr'
    ];

   isActive2(locale: string) {
        return locale === this.$i18n.locale;
    };

    setLocale(locale: string) {
        this.$i18n.locale = locale;
    };

}
