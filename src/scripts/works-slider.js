import Vue from 'vue';

const tags = {
    template: "#tags-template",
    props: ["tags"]
}

const work = {
    template: "#work-template",
    props: ["currentWork"],
    components: {
        tags
    },
    computed: {
        tagsArray() {
            return this.currentWork.skills.split(', ');
        }
    }
}

const previews = {
    template: "#previews-template",
    props: ["works","currentWork"]
}

const buttons = {
    template: "#buttons-template"
}

const slider = {
    template: "#slider-template",
    props: ['works', 'currentWork'],
    components: {
        previews,
        buttons
    }

}

new Vue({
    el: "#works-slider",
    template: "#portfolio-content-template",
    components: { 
        slider, 
        work 
    },
    data: () => ({
        works: [],
        currentIndex: 0
    }),
    computed: {
        currentWork() {
            return this.works[this.currentIndex];
        }
    },
    watch: {
        currentIndex(value) {
            if (value > this.works.length-1) this.currentIndex = this.works.length-1;
            if (value < 0) this.currentIndex = 0;
        }
    },
    methods: {
        makeArrayWithRequiredImages(data) {
            return data.map(item => {
                const requiredImage = require(`../images/content/${item.photo}`);
                item.photo = requiredImage;
                return item;
            })
        },
        handleButtonClick(direction) {
            switch(direction) {
                case "next": 
                    this.currentIndex++;
                    break;
                case "prev":
                    this.currentIndex--;
                    break;
            }
        },
        handlePreviewClick(previewId) {
            this.currentIndex = previewId - 1;
        }
    },
    created () {
        const data = require('../data/works.json');
        this.works = this.makeArrayWithRequiredImages(data);
    }
})
