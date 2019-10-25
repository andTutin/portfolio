import Flickity from 'vue-flickity';
import Vue from 'vue';

var groupCells;
var wWidth = document.body.clientWidth;

if (wWidth < 481) {
  groupCells = 1;
} else {
  groupCells = 2;
}
 
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
        groupCells: groupCells,
        draggable: false,
        cellAlign: 'left'
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