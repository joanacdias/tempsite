<template lang="pug">
    .sticky-note(:style="cssVars")
        p {{ note }}
</template>
<script>

export default {
    name: 'sticky-note',
    components: {
    },
    props: {
        note: String,
        bgColor: String,
    },
    data() {
        return {
        }
    },
    computed: {
        cssVars() {
            return {
                '--bg-color': this.bgColor || '#68D083',
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../styles/variables';
    @import '../styles/_mixins/index';

    .sticky-note {
        background-color: var(--bg-color);
        padding: 6px 12px;
        border-radius: 2px;
        position: absolute;
        z-index: 1;
        max-width: 200px;

        p {
            color: black;
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
        }
    }
</style>