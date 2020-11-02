<template lang="pug">
    #progress-bar(:style="cssVars")
        .progress-bar--back
        .progress-bar--front
</template>
<script>

export default {
    name: 'progress-bar',
    components: {
    },
    data() {
        return {
            defaultProgressBarWidth: this.progressBarWidth,
        }
    },
    props: {
        progressBarWidth: Number,
        totalAmount: Number,
        currentAmount: Number,
        reverseProgressDirection: Boolean,
    },
    computed: {
        cssVars () {
            return {
                '--flex-direction': this.reverseProgressDirection ? 'row-reverse' : 'row',
                '--default-progress-bar-width': `${this.defaultProgressBarWidth}px`,
                '--pixel-progression-amount': `${this.pixelProgressionAmount}px`,
            }
        },
        pixelProgressionAmount () {
            return this.defaultProgressBarWidth / this.totalAmount * this.currentAmount 
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../styles/fonts';
    @import '../styles/variables';
    @import '../styles/_mixins/index';

    #progress-bar {
        width: var(--default-progress-bar-width);
        flex-direction: var(--flex-direction);
        display: flex;
    }

    .progress-bar--back {
        width: 100%;
        height: 2px;
        background-color: #3D4446;
    }

    .progress-bar--front {
        width: var(--pixel-progression-amount);
        height: 2px;
        background-color: $c-accent--purple;
        position: absolute;
        transition: width 0.3s ease-in-out;
    }
</style>