<template lang="pug">
	#low-fid-prototypes(ref="container-ref")
		.main
			.grid
				.page-header.grid__item.one-whole.push--desk--one-tenth.lap--one-whole
					h3 UX Approach
					h1 Low fidelity prototypes 
				.content.grid__item.desk--five-twelfths.push--desk--one-tenth.lap--one-whole
					p The next step involves finalising the user flows and creating low fidelity prototypes to visually communicate them to the team and stakeholders. Static mock-ups as well as clickable prototypes are created in Figma and showcased to the team.
					br
					p Refinements are continuosuly made to these prototypes from the feedback provided, and from test outcomes. Remote usability tests are done using maze.design and reports are shared with stakeholders.
					h4 Activities, Skills and Tools
					Tag(v-for="item in tags" :key="item.tag" :label="item.tag")
				.grid__item.desk--five-twelfths.push--desk--two-twelfths.desk--two-thirds.lap--one-whole
					img#example-img(src="../assets/work-examples/low-fid-example.jpg")
</template>
<script>
import Tag from '../components/Tag.vue'

export default {
	name: 'low-fid',
	components: {
		Tag,
	},
	data() {
		return {
			tags: [
				{tag: 'Wireframes'},
				{tag: 'Clickable prototypes'},
				{tag: 'Presenting work to stakeholders'},
				{tag: 'Usability testing'},
				{tag: 'A/B testing'},
				{tag: 'Figma'},
				{tag: 'Invision'},
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

	#low-fid-prototypes {
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
		top: 80px;
		left: -46px;

		@media (max-width: $break-palm) {
			margin-top: 0;
			padding: 0 10%;
		}

		@media (min-width: $break-palm + 1) and (max-width: $break-lap) {
			top: unset;
			left: unset;
			max-width: 100%;
			margin-top: 40px;
		}
	}

</style>