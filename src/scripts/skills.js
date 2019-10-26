import Vue from 'vue';

Vue.component('skillCircle', {
    template: "#skill-circle-template",
    props: ['skill']
})

Vue.component('categoryRow', {
    template: "#category-row-template",
    props: ['cat']
})

new Vue({
    el: "#skills-list",
    template: "#skills-list-template",
    data() {
        return {
            skills: [
                {
                    "category": "Front-end",
                    "tech": [
                        {
                            "title": 'HTML5',
                            "percent": 90
                        },
                        {
                            "title": 'CSS3',
                            "percent": 13
                        },
                        {
                            "title": 'Javascript',
                            "percent": 13
                        },
                        {
                            "title": 'JQuery & Vue.js',
                            "percent": 13
                        }
                    ]
                },
                {
                    "category": "Workflow",
                    "tech": [
                        {
                            "title": 'GIT',
                            "percent": 13
                        },
                        {
                            "title": 'Terminal',
                            "percent": 25
                        },
                        {
                            "title": 'Gulp',
                            "percent": 50
                        },
                        {
                            "title": 'Webpack',
                            "percent": 35
                        }
                    ]
                }
            ]
        }
    },
})