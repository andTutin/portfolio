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
                    "category": "frontend",
                    "tech": [
                        {
                            "title": 'HTML',
                            "percent": 90
                        },
                        {
                            "title": 'CSS',
                            "percent": 13
                        },
                        {
                            "title": 'Javascript',
                            "percent": 75
                        },
                        {
                            "title": 'JQuery & Vue.js',
                            "percent": 25
                        }
                    ]
                },
                {
                    "category": "workflow",
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