<template lang="pug">
  #app
    .container(@mousemove='onMouseMove($event)')
      .progress-bar-container
        ProgressBar(
          :progressBarWidth="260"
          :totalAmount="70"
          :currentAmount="this.progressBarCurrentAmount"
          :reverseProgressDirection="true"
        )
      router-view
      .custom-cursor(ref='inner-cursor')
        .cursor-outer(v-bind:class="{'on-element': mouseHoverElement.length > 0}")
        .cursor-inner(v-bind:class="{'on-element': mouseHoverElement.length > 0}")
        //- .cursor-label(v-bind:class="{'cursor-label-visible': mouseHoverElement.length > 0}")
        //-   p.cursor-label-text(v-bind:class="{'cursor-label-visible': mouseHoverElement.length > 0}") Go to LinkedIn profile
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
  computed: {
    mouseHoverElement() {
      return this.$myStore.state.mouseHoverElement;
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
h3 { @include heading }
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
  // border: 1px solid #ffffff3a;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  transition: all 0.4s ease-in-out;

  &.on-element {
    opacity: 0;
  }
}

.cursor-inner {
  width: 5px;
  height: 5px;
  left: -2.5px;
  top: -2.5px;
  border-radius: 50%;
  z-index: 11000;
  background: #ffffff;  
  // background: $c-white;
  transition: all 0.4s ease-in-out;
  box-shadow:
    0 0 15px 8px rgba(255, 255, 255, 0.865),  /* inner white */
    0 0 25px 16px rgba(255, 0, 255, 0.646), /* middle magenta */
    0 0 35px 20px rgb(0, 255, 255); /* outer cyan */

  &.on-element {
		@include animation-fadeInOutHover;
    width: 4px;
    height: 4px;
    // background: $c-white;
    box-shadow:
        0 0 20px 5px transparent,  /* inner white */
        0 0 40px 20px transparent, /* middle magenta */
        0 0 16px 8px $c-white; /* outer cyan */
  }
}

// .cursor-label {
//   width: 0;
//   height: 32px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   background-color: $c-cursor-color;
//   transition: all 0.4s ease-in-out;
//   left: 15px;
//   top: -12px;

//   &.cursor-label-visible {
//     width: 180px;
//   }
// }

// .cursor-label-text {
//   margin: 2px 6px;
//   opacity: 0;
//   white-space: nowrap;
//   text-align: center;
//   transition: opacity 0.2s ease-in-out 0.4s;
//   font-weight: 500;

//   &.cursor-label-visible {
//     opacity: 1;
//   }
// }

</style>
