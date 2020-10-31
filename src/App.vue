<template lang="pug">
  #app
    .container(@mousemove='onMouseMove($event)')
      .progress-bar-container
        ProgressBar(
          :progressBarWidth="240"
          :totalAmount="70"
          :currentAmount="this.progressBarCurrentAmount"
          :reverseProgressDirection="true"
        )
      router-view
      .custom-cursor(ref='inner-cursor')
        .cursor-outer
        .cursor-inner
</template>

<script>
import ProgressBar from './components/ProgressBar.vue'

export default {
  name: 'App',
  components: {
    ProgressBar,
  },
  data() {
		return {
      clientX: 0,
      clientY: 0,
      progressBarCurrentAmount: 7,
    }
  },
  methods: {
    progress() {
    },
    renderCursor() {
      this.$refs['inner-cursor'].style.transform = `translate(${this.clientX}px, ${this.clientY}px)`;
    },
    onMouseMove(event) {
      this.clientX = event.clientX;
      this.clientY = event.clientY;
      // requestAnimationFrame() used for smooth performance
      requestAnimationFrame(this.renderCursor);
    },
  }
}
</script>

<style lang="scss">
@import './styles/fonts';
@import './styles/variables';
@import './styles/_mixins/index';

// Libraries
@import './styles/_libs/modularized-normalize-scss/_normalize.scss';
@import './styles/_libs/csswizardry-grids/csswizardry-grids.scss';

// Global styles
*,
*::before,
*::after {
	box-sizing: border-box;
}

html, body {
  background-color: $c-black;
  height: 100%;
  cursor: url('./assets/logo.png'), auto;	
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $c-default-text-color;
  margin-top: 0px;
}

.container {
  min-height: 100vh;
  min-width: 100vw;
  background-color: $c-background-color;
  cursor: none;
}

h1 { @include title }
h2 { @include subtitle }
p  { @include body }

button {
  cursor: none;
  :hover {
    cursor: none;
  }
}

.progress-bar-container {
  position: absolute;
  top: $m-page-padding;
  right: 0;
}

.custom-cursor {
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
}

.cursor-outer {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid $c-cursor-color;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}

.cursor-inner {
  width: 5px;
  height: 5px;
  left: -2.5px;
  top: -2.5px;
  border-radius: 50%;
  z-index: 11000;
  background: $c-cursor-color;
}

</style>
