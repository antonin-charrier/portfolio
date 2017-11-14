import Vue from 'vue';
import { Component } from 'vue-property-decorator';

interface TestForecast {
    name: string;
    age: number;
    adress: string;
}

@Component
export default class TestComponent extends Vue {
    forecasts: TestForecast[] = [];

    mounted() {
        fetch('api/SampleData/TestForecasts')
            .then(response => response.json() as Promise<TestForecast[]>)
            .then(data => {
                this.forecasts = data;
            });
    }
}
