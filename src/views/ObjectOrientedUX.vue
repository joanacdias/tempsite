<template lang="pug">
	#object-oriented-ux
		.main
			.grid
				.page-header.grid__item.one-whole.push--desk--one-tenth.lap--one-whole
					h3 UX Approach
					h1 Object oriented UX
				.content.grid__item.desk--one-half.push--desk--one-tenth.lap--one-whole
					p When starting a new project, following the workshops and requirements gathering phase, I like to start out the design process by mapping out the objects involved to undestand the pieces of the puzzle that need to come together. I then delve into conversations regarding the information involved with each object before figuring out the flows and user journeys of the product.
					h4 Activities, Skills and Tools
			.grid
				.grid__item.push--desk--one-tenth.desk--one-third.lap--four-fifths.palm--one-whole
					Tag(v-for="item in tags" :key="item.tag" :label="item.tag")
				.grid__item.push--desk--one-tenth.desk--two-thirds
					img#ooux-example-img(src="../assets/work-examples/ooux.jpg")
</template>
<script>
import Tag from '../components/Tag.vue'

export default {
	name: '',
	components: {
		Tag,
	},
	data() {
		return {
			tags: [
				{tag: 'Field & competitor research'},
				{tag: 'User research'},
				{tag: 'Information architecture'},
				{tag: 'User personas'},
				{tag: 'Figma'},
			]
		}
	},
}
</script>

<style lang="scss" scoped>
	@import '../styles/fonts';
	@import '../styles/variables';
	@import '../styles/_mixins/index';

	#object-oriented-ux {
		min-height: 100vh;
		padding: 44px 44px 0 44px;
		overflow: hidden;
	}

	.main {
		height: 100%;
		display: flex;
		flex-direction: column;

		& h1{
			margin-top: 14px;
		}
	}

	.page-header {
	text-align: left;

		@media (max-width: $break-palm) {
			margin-top: 40px;
		}

		@media (min-width: $break-palm + 1) and (max-width: $break-lap) {
			margin-top: 60px;
		}

		@media (min-width: $break-lap + 1) {
			margin-top: 80px;
		}
	}

	.content {
		margin-top: 38px;

		& h4 {
			margin-top: 38px;
		}
	}

	#ooux-example-img {
		width: 100%;
		max-width: 700px;
		position: relative;
		// top: -48px;

		@media (max-width: $break-lap) {
			margin-top: 40px;
		}
	}

</style>