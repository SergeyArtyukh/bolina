'use strict';

import Vue from 'vue';
import UIkit from 'uikit';

new Vue({
    // Указывает, на какой существующий DOM-элемент смонтировать экземпляр Vue
    el: "#root",

    created() {
        console.log(this);
    },

    // Вызывается сразу после того как экземпляр был смонтирован
    mounted() {
        //
    },

    // реактивные данные
    data() {
        return {
            // состояние приложения
            state: {}
        }
    },

    // компоненты
    components: {},

    // Методы, которые будут подмешаны к экземпляру Vue
    methods: {
        //
    },

    // вычисляемые свойства
    computed: {
        //
    }
});
