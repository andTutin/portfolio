import Flickity from 'vue-flickity';
import Vue from 'vue';
 
new Vue({
    el: '.reviews__slider',
  components: {
    Flickity
  },
  
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: false,
        groupCells: 2,
        draggable: false,
        cellAlign: 'left',
        autoplay: 1500
      }
    }
  },
  
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  }
});