<template lang="pug">
    .splide(ref="splide")
        .splide__arrows 
            .splide__arrow.splide__arrow--prev(
                @mouseenter="updateHoverElement('back-button')"
                @mouseleave="updateHoverElement('')"
            ): v-icon(name="chevron-right")
            .splide__arrow.splide__arrow--next(
                @mouseenter="updateHoverElement('next-button')"
                @mouseleave="updateHoverElement('')"
            ): v-icon(name="chevron-right")
        .splide__track: .splide__list
            //- TO DO: add a v-for to render list items and url hash dynamically from props.
            li(data-splide-hash="home").splide__slide: slot(name="slide1")
            li(data-splide-hash="ooux").splide__slide: slot(name="slide2")
            li(data-splide-hash="low-fid").splide__slide: slot(name="slide3")
            li(data-splide-hash="mid-fid").splide__slide: slot(name="slide4")
            li(data-splide-hash="mid-fid-more").splide__slide: slot(name="slide5")
            li(data-splide-hash="front-end").splide__slide: slot(name="slide6")
            li(data-splide-hash="end").splide__slide: slot(name="slide7")
</template>
<script>
import Splide from '@splidejs/splide';
import URLHash from '@splidejs/splide-extension-url-hash';
import Icon from 'vue-awesome/components/Icon'

export default {
    name: 'horizontal-slider',
    components: {
        Splide,
        'v-icon': Icon,
    },
    data() {
        return {
        }   
    },
    mounted() {
        new Splide(this.$refs.splide, {
            pagination: false,
            drag: true,
            keyboard: true,
            slideFocus: true,
            type: 'loop',
            updateOnMove: true,
        }).mount({ URLHash });
    },
    updated() {
    },
    methods: {
        moved( splide, newIndex ) {
            console.log( 'moved', newIndex );
        },
        // Sends the name of the element that the mouse is hovering over to store and in turn, adds dynamic hover state to that particular element. To be included in individual components where this feature is used.
        // TO DO: Design particular hover states. Take inspiration from game design. Floating labels/icons etc.
        updateHoverElement(element) {
			this.$myStore.commit('applyMouseHoverElement', element);
        },
    }
}
</script>

<style lang="scss" scoped>
    @import '../styles/fonts';
    @import '../styles/variables';
    @import '../styles/_mixins/index';

    @import '../styles/_libs/splide/splide-core.scss';

    .splide__list {
        max-height: 100vh;
    }

    .splide__arrow {
        background: transparent;
        color: $c-accent--purple;

        &:hover {
            cursor: none;
        }
    }
</style>