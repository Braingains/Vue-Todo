import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        data: {
            todo: ['Wake up', 'Brush Teeth', 'Go to class', 'Do Homework', 'Work Out'],

        },
    });
});