<template lang="pug">
	//- TO DO: add link element if url gets passed as a prop
	.tag.shake-slow(
		@mouseenter="updateHoverElement(`${label} tag`)"
		@mouseleave="updateHoverElement('')"
	)
		p {{ label }}
</template>
<script>

export default {
	name: 'tag',
	props: {
		label: String,
		link: String,
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
	
	@import '../styles/_libs/css-shake/csshake-slow.scss';

	.tag {
		background-color: $c-accent--purple;
		border-radius: 4px;
		padding: 6px 12px;
		display: inline-block;
		margin: 0 12px 12px 0;

		& p {
			font-weight: 500;
		}
	}
</style>