import Vue from 'vue';
import Card from './src/card.vue'

(Card as any).install = function (vue: typeof Vue): void {
    vue.component((Card as any)?.options?.name || Card.name, Card)
}

export default Card
