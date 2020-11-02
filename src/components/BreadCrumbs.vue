<template lang="pug">
    .breadcrumbs
        .breadcrumb(v-for="crumb in breadcrumbs" :key="crumb.label")
            a(
                :href="crumb.link"
                :class="[activeRoute === crumb.link ? 'isActive' : 'isNotActive']"
                @mouseenter="updateHoverElement('linkedinLink')"
                @mouseleave="updateHoverElement('')"
            ) {{ crumb.label }}
            v-icon(name="chevron-right").chevron
</template>
<script>
import Icon from 'vue-awesome/components/Icon'

export default {
    name: '',
    components: {
        'v-icon': Icon,
    },
    data() {
        return {
            activeRoute: '',
        }
    },
    props: {
        breadcrumbs: Array,
    },
    methods: {
        updateHoverElement(element) {
			this.$myStore.commit('applyMouseHoverElement', element);
		},
    },
    mounted() {
        this.activeRoute = this.$route.hash;
    },
    watch: {
        '$route'(to)  {
            this.activeRoute = to.hash;
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../styles/fonts';
    @import '../styles/variables';
    @import '../styles/_mixins/index';

    .breadcrumbs {
        display: flex;
        flex-direction: row;
    }

    .breadcrumb {
        display: flex;
        align-items: center;
    }

    .chevron {
        width: 8px;
        margin: 0 8px;
    }

    .isActive {
        position: relative;
        transition: all ease-in-out 0.2s;
        font-weight: 600;

        &:before {
            content: '';
            position: absolute;
            background-color: $c-default-text-color;
            left: 78%;
            width: 1.6px;
            height: 16px;
            top: -18px;
            transform: rotate(38deg);
        }

        &:after {
            content: '';
            position: absolute;
            background-color: $c-default-text-color;
            left: 22%;
            width: 1.6px;
            height: 14px;
            bottom: -18px;
            transform: rotate(38deg);
        }
    }
</style>