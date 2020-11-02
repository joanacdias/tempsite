<template lang="pug">
	#mid-fid-more-examples(ref="container-ref")
		.main
			.grid: .page-header.grid__item.desk--two-thirds.push--desk--one-tenth.lap--one-whole
				h3 UX Approach - Mid &amp; high fidelity prototypes
				p More examples of work.
			//- TO DO: Create a better masonry/pinterest-like grid. CSS wizardry grids does not handle uneven rows, hacky positioning has been temporarily added to deal with this. Update images with high-res versions.
			.grid.grid--full.work-examples-grid
				.grid__item.desk--four-twelfths
					.stickyNote1: StickyNote(:note="this.stickyNote1.note" :bgColor="this.stickyNote1.color").shake-slow
					img#example-img(src="../assets/work-examples/more-1.svg")
				.grid__item.desk--three-twelfths
					.stickyNote2: StickyNote(:note="this.stickyNote2.note" :bgColor="this.stickyNote2.color").shake-slow
					img#example-img(src="../assets/work-examples/more-3.png")
				.grid__item.desk--five-twelfths
					.stickyNote3: StickyNote(:note="this.stickyNote3.note" :bgColor="this.stickyNote3.color").shake-slow
					img#example-img(src="../assets/work-examples/more-6.png")
				.grid__item.desk--four-twelfths#example-4
					.stickyNote4: StickyNote(:note="this.stickyNote4.note" :bgColor="this.stickyNote4.color").shake-slow
					img#example-img(src="../assets/work-examples/more-2.jpg")
				.grid__item.desk--three-twelfths#example-5
					.stickyNote5: StickyNote(:note="this.stickyNote5.note" :bgColor="this.stickyNote5.color").shake-slow
					img#example-img(src="../assets/work-examples/more-4.png")
				.grid__item.desk--five-twelfths#example-6: .grid.grid--full
					.grid__item.desk--eight-twelfths.portable--three-fifths
						.stickyNote6: StickyNote(:note="this.stickyNote6.note" :bgColor="this.stickyNote6.color").shake-slow
						img#example-img(src="../assets/work-examples/more-7.png")
					.grid__item.desk--four-twelfths.portable--two-fifths#example-7
						img#example-img(src="../assets/work-examples/more-8.png")
				.grid__item.push--desk--four-twelfths.desk--three-twelfths.portable--eight-twelfths#example-8
					img#example-img(src="../assets/work-examples/more-5.png")
</template>
<script>
import StickyNote from '../components/StickyNote.vue'

export default {
	name: 'mid-fid-more-examples',
	components: {
		StickyNote,
	},
	data() {
		return {
			stickyNote1: {
				note: 'Usability test plans',
				color: '#2ED47A',
			},
			stickyNote2: {
				note: 'Brand and manufacturer interface for a blockchain product for the wine industry.',
				color: '#2ED47A',
			},
			stickyNote3: {
				note: 'Analytics B2B product for users to track the activity of their stock.',
				color: '#2ED47A',
			},
			stickyNote4: {
				note: 'Blockchain application demo to track the lifecycle of garments from manufacturing to retail and post-sales. Used as a base for the Alexander McQueen Project currently in the works.',
				color: '#2ED47A',
			},
			stickyNote5: {
				note: 'Mid-fid protype',
				color: '#2ED47A',
			},
			stickyNote6: {
				note: 'Badge system concept for supplier compliance with sustainability standards/certifications. To be used in later development of the product.',
				color: '#2ED47A',
			},
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

	@import '../styles/_libs/css-shake/csshake-slow.scss';

	#mid-fid-more-examples {
		height: 100vh;
		min-height: 100vh;
		min-width: 100vw;
		padding: 44px 0;
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
		padding-left: 44px;

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
	
	.work-examples-grid {
		margin: 38px 8px 0;

		@media (max-width: $break-lap) {
			padding: 0;
		}
	}

	#example-img {
		width: 100%;
		position: relative;
		padding: 0 8px;

		@media (max-width: $break-palm) {
			padding: 8px 12px;
		}

		@media (min-width: $break-palm + 1) and (max-width: $break-lap) {
			padding: 8px 12px;
		}
	}

	#example-4 {
		position: relative;
		top: -5.4vw;

		@media (max-width: $break-lap) {
			top: unset;
		}
	}

	#example-5 {
		position: relative;
		top: -3.6vw;

		@media (max-width: $break-lap) {
			top: unset;
		}
	}

	#example-6 {
		position: relative;
		top: 1.4vw;

		@media (max-width: $break-lap) {
			top: unset;
		}
	}

	#example-7 {
		position: relative;
		left: 0.2vw;
	}

	#example-8 {
		position: relative;
		top: -24.4vw;

		@media (max-width: $break-lap) {
			padding-right: 6.6vw;
			top: calc(-45vw + 14px);
		}
	}	

	//- TO DO: Refactor the way sticky notes are positioned. Use consistent measurements.

	.stickyNote1 {
		position: relative;
		top: -12px;
		left: 68px;
	}

	.stickyNote2 {
		position: relative;
		top: 144px;
		left: -48px;

		@media (max-width: $break-palm) {
			left: 0;
			top: 200px;
		}

		@media (min-width: $break-palm + 1) and (max-width: $break-lap) {
			left: 0;
			top: 300px;
		}
	}

	.stickyNote3 {
		position: relative;
		top: -18px;
		left: 260px;
	}

	.stickyNote4 {
		position: relative;
		top: -12px;
		left: 68px;
	}

	.stickyNote5 {
		position: relative;
		top: 11.8vw;
		left: 12vw;

		@media (max-width: $break-lap) {
			left: 68vw;
			top: 0;
		}
	}

	.stickyNote6 {
		position: relative;
		top: 54px;
		left: 230px;

		@media (max-width: $break-palm) {
			top: -20px;
			left: 180px;
		}

		@media (min-width: $break-palm + 1) and (max-width: $break-lap) {
			left: 42vw;
			top: 50px;
		}
	}
</style>