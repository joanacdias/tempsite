<template lang="pug">
	#home
		.main
			.grid: .page-header.grid__item.desk--three-fifths.push--desk--one-tenth.lap--one-whole
				h1 Work Examples
				h2 Temporary showcase whilst new site is under construction
			.grid.grid--right: .img-container.grid__item.two-thirds.palm--one-whole
				img#evl-analytics-img(src='../assets/work-examples/evl_analytics_mockup.svg')
		//- enter and leave listeners used to later on create dynamic,animated hover states for custom cursor (experimenting with gamification ideas). Element type stored in global state so custom cursor in App.vue can listen out and render desired actions depending on the element it is hovering over.
		.author(
			@mouseenter="updateHoverElement('author')"
			@mouseleave="updateHoverElement('')"
		): p Joana Dias
		.role(
			@mouseenter="updateHoverElement('role')"
			@mouseleave="updateHoverElement('')"
		): p UI/UX Designer &amp; Front-end Developer
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
	name: 'home',
	components: {
	},
	data() {
		return {
			squareIsActive: false,
		}
	},
	methods: {
		updateHoverElement(element) {
			this.$myStore.commit('applyMouseHoverElement', element);
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../styles/fonts';
@import '../styles/variables';
@import '../styles/_mixins/index';

// Global styles
*,
*::before,
*::after {
	box-sizing: border-box;
}

#home {
	height: calc(100vh - 44px);
	min-height: 100vh;
	padding: $m-page-padding;
	overflow: hidden;
}

.main {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	& h1 {
		margin-bottom: 24px;
	}
}

.page-header {
	text-align: left;
	max-width: 740px;

	@media (max-width: $break-palm) {
		margin-top: 40px;
	}

	@media (min-width: $break-palm + 1) and (max-width: $break-mobile) {
		margin-top: 60px;
	}

	@media (min-width: $break-mobile + 1) {
		margin-top: 80px;
	}
}

.img-container {
	text-align: right;
	position: relative;
	bottom: -$m-page-padding;
}

#evl-analytics-img {
	position: relative;
	width: 100%;
	right: -$gutter;
	bottom: -4px;

	@media (max-width: $break-palm) {
		width: 500px;
	}

	@media (min-width: $break-palm + 1) and (max-width: $break-lap) {
		max-width: unset;
		width: 700px;
		right: -$gutter - 12px;
	}

	@media (min-width: $break-lap) {
		max-width: unset;
		width: 800px;
		bottom: $gutter * 2;
		right: -$gutter - 20px;
	}
}

.author {
	position: absolute;
	top: 34px;
	left: -17px;
	transform: rotate(-90deg);

	&:hover {
		@include animation-fadeInOutHover;
	}

	@media (max-width: $break-palm) {
		top: unset;
		bottom: 30px;
		left: -16px;
	}
}

.role {
	position: absolute;
	left: 17px;
	bottom: 0;

	&:hover {
		@include animation-fadeInOutHover;
	}

	@media (max-width: $break-palm) {
		transform: rotate(-90deg);
		bottom: 126px;
		left: -94px;
	}
}

</style>