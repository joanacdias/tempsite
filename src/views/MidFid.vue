<template lang="pug">
	#mod-fid-prototypes(ref="container-ref")
		.main: .grid
			.page-header.grid__item.desk--two-thirds.push--desk--one-tenth.lap--one-whole
				h3 UX Approach
				h1 Mid &amp; high fidelity prototypes
			.content.grid__item.desk--five-twelfths.push--desk--one-tenth.lap--one-whole
				p Once all parties involved are in agreement of the low fidelity screens and user journeys, the aesthetics of the product is then prioritised. Despite this UX/UI approach being described sequentially, the process is usually iterative and this stage may also include periods of reverting back to the low fidelity wireframes and updating flows.
				br
				p This stage also involves reading up on UI trends, published UI/UX articles, accessibilty guidelines memory refresh, and on-going feedback requests and testing.
				h4 Activities, Skills and Tools
				Tag(v-for="item in tags" :key="item.tag" :label="item.tag")
			.grid__item.desk--five-twelfths.push--desk--two-twelfths.desk--two-thirds.lap--one-whole
				img#example-img(src="../assets/work-examples/high-fid-example.jpg")
</template>
<script>
import Tag from '../components/Tag.vue'

export default {
	name: 'mid-fid',
	components: {
		Tag,
	},
	data() {
		return {
			tags: [
				{tag: 'Design research'},
				{tag: 'UI Design'},
				{tag: 'Clickable prototypes'},
				{tag: 'Presentation of work'},
				{tag: 'A/B testing'},
				{tag: 'Usability testing'},
				{tag: 'maze.design'},
				{tag: 'Figma'},
				{tag: 'Adobe Creative Suite'},
			]
		}
	},
	watch:{
		'$route'()  {
			this.$refs['container-ref'].scrollTop = 0;
			window.scrollTo(0,0);
		}
	},
}
</script>

<style lang="scss" scoped>
	@import '../styles/fonts';
	@import '../styles/variables';
	@import '../styles/_mixins/index';

	#mod-fid-prototypes {
		height: 100vh;
		min-height: 100vh;
		min-width: 100vw;
		padding: 44px 44px 0 44px;
		overflow-x: hidden;
		overflow-y: scroll;
		position: absolute;
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
			margin-top: 60px;
		}
	}

	.content {
		margin-top: 38px;

		& h4 {
			margin-top: 38px;
		}
	}

	#example-img {
		width: 120%;
		max-width: 800px;
		position: relative;
		top: 38px;
		left: -46px;
		padding-bottom: 54px;

		@media (max-width: $break-palm) {
			margin-top: 0;
			left: unset;
			right: 34px;
			padding: 0 0 54px;
		}

		@media (min-width: $break-palm + 1) and (max-width: $break-lap) {
			top: unset;
			left: unset;
			right: -48px;
			max-width: 100%;
			margin-top: 40px;
		}
	}

</style>