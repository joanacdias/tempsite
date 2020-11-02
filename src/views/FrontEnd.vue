<template lang="pug">
	#front-end(ref="container-ref")
		.main: .grid
			.grid__item.desk--one-half.push--desk--one-tenth.lap--one-whole
				.page-header
					h3 Implementation Responsibilities
					h1 Front-end Development
					.content
						p As a computer science student, my involvement in a project typically extends past the UX/UI design process and into development. My main responsibilities have been working on component styling and implementing styles from the design files. 
						h4 Activities, Skills and Tools
						Tag(v-for="item in tags" :key="item.tag" :label="item.tag")
			.grid__item.desk--one-half.push--desk--one-tenth.lap--one-whole
				img#example-img(src="../assets/work-examples/front-end-example.png")
</template>
<script>
import Tag from '../components/Tag.vue'

export default {
	name: 'front-end',
	components: {
		Tag,
	},
	data() {
		return {
			tags: [
				{tag: 'Aligning design & implementation'},
				{tag: 'HTML'},
				{tag: 'CSS'},
				{tag: 'JavaScript'},
				{tag: 'SASS/SCSS'},
				{tag: 'Pug'},
				{tag: 'Vue.js'},
				{tag: 'React.js'},
				{tag: 'Version control'},
				{tag: 'Git'},
				{tag: 'Pair-programming'},
				{tag: 'Customising Material UI React components'},
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

	#front-end {
		height: calc(100vh - 44px);
		min-height: 100vh;
		min-width: 100vw;
		padding: $m-page-padding;
		overflow: hidden;

		@media (max-width: $break-lap) {
			height: 100vh;
			overflow-x: hidden;
			overflow-y: scroll;
			position: absolute;
		}
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
		width: 100%;
		position: relative;
		top: 78px;

		@media (min-width: $break-palm + 1) and  (max-width: $break-lap) {
			left: 0;
			top: 42px;
			padding-bottom: 44px;
		}

		@media (min-width: $break-lap + 1) and (max-width: 1280px) {
			left: 12vw;
		}
	}
</style>