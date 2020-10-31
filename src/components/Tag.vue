<template lang="pug">
	.tag(
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