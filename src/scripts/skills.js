import Vue from 'vue';

new Vue ({
    el: "#skills",
    data: {
        skills: [
            {
                "category": "frontend",
                "tech": [
                    {
                        "title": 'HTML',
                        "percent": 25
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
})