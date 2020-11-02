<template lang="pug">
  #app
    .container(@mousemove='onMouseMove($event)')
      .progress-bar-container
        ProgressBar(
          :progressBarWidth="this.progressBarWidth"
          :totalAmount="this.progressBarTotalAmount"
          :currentAmount="this.progressBarCurrentAmount"
          :reverseProgressDirection="true"
        )
      HorizontalSlider
        Home(slot="slide1")
        ObjectOrientedUX(slot="slide2")
        LowFid(slot="slide3")
        MidFid(slot="slide4")
        MidFidMoreExamples(slot="slide5")
        FrontEnd(slot="slide6")
    CustomCursor(:clientX="this.clientX" :clientY="this.clientY")
</template>

<script>
import Splide from '@splidejs/splide';
import Home from './views/Home.vue'
import ObjectOrientedUX from './views/ObjectOrientedUX.vue'
import LowFid from './views/LowFid.vue'
import MidFid from './views/MidFid.vue'
import MidFidMoreExamples from './views/MidFidMoreExamples.vue'
import FrontEnd from './views/FrontEnd.vue'
import ProgressBar from './components/ProgressBar.vue'
import CustomCursor from './components/CustomCursor.vue'
import HorizontalSlider from './components/HorizontalSlider.vue'
import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'App',
  components: {
    Splide,
    CustomCursor,
    Home,
    ObjectOrientedUX,
    LowFid,
    MidFid,
    MidFidMoreExamples,
    FrontEnd,
    ProgressBar,
    HorizontalSlider,
    'v-icon': Icon,
  },
  data() {
		return {
      clientX: 0,
      clientY: 0,
      progressBarWidth: 260,
      progressBarTotalAmount: 7,
      progressBarCurrentAmount: 1,
    }
  },
  methods: {
    progress() {
    },
    onMouseMove(event) {
      this.clientX = event.clientX;
      this.clientY = event.clientY;
    },
    updateProgressBar(hash) {
      if (hash === '#home') { this.progressBarCurrentAmount = 1 }
      if (hash === '#ooux') { this.progressBarCurrentAmount = 2 } 
      if (hash === '#low-fid') { this.progressBarCurrentAmount = 3 }
      if (hash === '#mid-fid') { this.progressBarCurrentAmount = 4 }
      if (hash === '#mid-fid-more') { this.progressBarCurrentAmount = 5 }
      if (hash === '#front-end') { this.progressBarCurrentAmount = 6 }
    }
  },
  mounted() {
    this.updateProgressBar(this.$route.hash)
  },
  watch:{
    '$route'(to)  {
      this.updateProgressBar(to.hash)
    }
  },
}
</script>

<style lang="scss">
@import './styles/fonts';
@import './styles/variables';
@import './styles/_mixins/index';

// Libraries
@import './styles/_libs/modularized-normalize-scss/_normalize.scss';
@import './styles/_libs/csswizardry-grids/csswizardry-grids.scss';
@import './styles/_libs/splide/splide-core.scss';

// Global styles
*,
*::before,
*::after {
	box-sizing: border-box;
}

html, body {
  background-color: $c-black;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $c-default-text-color;
  margin-top: 0px;
}

h1 { @include title }
h2 { @include subtitle }
h3 { @include heading }
p  { @include body }

button {
  cursor: none;

  :hover {
    cursor: none;
  }
}

.container {
  height: 100vh;
  width: 100vw;
  position: relative;
  background-color: $c-background-color;
  cursor: none;
}

.progress-bar-container {
  position: fixed;
  top: $m-page-padding;
  right: 0;
  z-index: 1;
}
</style>
