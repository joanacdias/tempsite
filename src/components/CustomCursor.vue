<template lang="pug">
    .custom-cursor(ref='inner-cursor')
      .cursor-outer(v-bind:class="{'on-element': mouseHoverElement.length > 0}")
      .cursor-inner(v-bind:class="{'on-element': mouseHoverElement.length > 0}")
</template>
<script>

export default {
    name: 'custom-cursor',
    components: {
    },
    props: {
        clientX: Number,
        clientY: Number,
    },
    watch:{
        'clientX'() {
            this.renderCursor()
        }, 
        'clientY'() {
            this.renderCursor()
        }
    },
    computed: {
        mouseHoverElement() {
            return this.$myStore.state.mouseHoverElement;
        }
    },
    methods: {
        // Sends the name of the element that the mouse is hovering over to store and in turn, adds dynamic hover state to that particular element.
        // TO DO: Design particular hover states. Take inspiration from game design. Floating labels etc.
        
        // updateHoverElement(element) {
		// 	this.$myStore.commit('applyMouseHoverElement', element);
        // },
        renderCursor() {
            this.$refs['inner-cursor'].style.transform = `translate(${this.clientX}px, ${this.clientY}px)`;
        },
    }
}
</script>

<style lang="scss" scoped>
    @import '../styles/fonts';
    @import '../styles/variables';
    @import '../styles/_mixins/index';

    .custom-cursor {
        position: fixed;
        left: 0;
        top: 0;
        pointer-events: none;
        z-index: 1;
    }

    .cursor-outer {
        width: 30px;
        height: 30px;
        border-radius: 50%;
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
        transition: all 0.4s ease-in-out;
        box-shadow:
            0 0 15px 8px rgba(255, 255, 255, 0.865),  /* inner white */
            0 0 25px 16px rgba(255, 0, 255, 0.646), /* middle magenta */
            0 0 35px 20px rgb(0, 255, 255); /* outer cyan */

        &.on-element {
            @include animation-fadeInOutHover;
            width: 4px;
            height: 4px;
            box-shadow:
                0 0 20px 5px transparent,  /* inner white */
                0 0 40px 20px transparent, /* middle magenta */
                0 0 12px 6px $c-white; /* outer cyan */
        }
    }
</style>