<template lang="pug">
	#end
		.main
			.grid: .page-header.grid__item.one-whole
				h1 New site coming soon
				h2 In the meantime, feel free to get in touch with any questions.
				.contact-details
					a(
						href="mailto:jocatarinadias@gmail.com"
						@mouseenter="updateHoverElement('email')"
						@mouseleave="updateHoverElement('')"
					) jocatarinadias@gmail.com
					p(
						@mouseenter="updateHoverElement('number')"
						@mouseleave="updateHoverElement('')"
					) +44 74506 78525
				a.btn--primary#cv-download-btn.shake-slow(
					download="CV Joana Dias UX UI Designer and Front End Developer.pdf"
					href="/files/cv.pdf"
					target="_blank"
					@mouseenter="updateHoverElement('cdDownloadBtn')"
					@mouseleave="updateHoverElement('')"
				) Download CV
		.author(
			@mouseenter="updateHoverElement('author')"
			@mouseleave="updateHoverElement('')"
		): p Joana Dias
		.social-links
			a(href="https://www.linkedin.com/in/joanacdias/" target="_blank" @mouseenter="updateHoverElement('linkedinLink')" @mouseleave="updateHoverElement('')")
				font-awesome-icon(:icon="['fab', 'linkedin-in']")
			a(href="https://www.instagram.com/joanacatdias/" target="_blank" @mouseenter="updateHoverElement('igLink')" @mouseleave="updateHoverElement('')")
				font-awesome-icon(:icon="['fab', 'instagram']")
			a(href="mailto:jocatarinadias@gmail.com" @mouseenter="updateHoverElement('emailLink')" @mouseleave="updateHoverElement('')") 
				font-awesome-icon(:icon="['far', 'envelope']")
		.role(
			@mouseenter="updateHoverElement('role')"
			@mouseleave="updateHoverElement('')"
		): p UI/UX Designer &amp; Front-end Developer
</template>

<script>
export default {
	name: 'end',
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

@import '../styles/_libs/css-shake/csshake-slow.scss';

// Global styles
*,
*::before,
*::after {
	box-sizing: border-box;
}

#end {
	height: calc(100vh - 44px);
	min-height: 100vh;
	min-width: 100vw;
	padding: $m-page-padding;
	overflow: hidden;
}

.main {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
}

.btn--primary {
	@include btn--primary;
	text-decoration: none;

	&#cv-download-btn {
		margin-top: 54px;

		&:hover {
			cursor: none;
		}
	}
}

.page-header {
	text-align: center;
	
	& h1 {
		margin-bottom: 24px;
		font-size: 58px;
		line-height: 58px;
	}

	& h2 {
		margin: auto;
		font-size: 24px;
		line-height: 30px;
		max-width: 500px;
	}
}

.img-container {
	text-align: right;
	position: relative;
	bottom: -10px;
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

	@media (min-width: $break-lap + 1) {
		max-width: unset;
		width: 800px;
		bottom: $gutter * 2;
		right: -136px;
	}
}

.author {
	position: absolute;
	top: 84px;
	left: -17px;
	transform: rotate(-90deg);

	&:hover {
		@include animation-fadeInOutHover;
	}

	@media (max-width: $break-lap) {
		top: unset;
		bottom: 44px;
		left: -16px;
	}
}

.role {
	position: absolute;
	left: 17px;
	bottom: 12px;

	&:hover {
		@include animation-fadeInOutHover;
	}

	@media (max-width: $break-lap) {
		transform: rotate(-90deg);
		bottom: 140px;
		left: -94px;
	}
}

.social-links {
	position: absolute;
    left: 18px;
	bottom: 34px;
	
	a {
		color: $c-default-text-color;
		margin-right: 8px;
		transition: all ease-in-out 0.2s;
		font-size: 18px;

		&:hover {
			@include animation-fadeInOutHover;
			color: $c-accent--purple;
			cursor: none;
		}
	}

	@media (max-width: $break-lap) {
		transform: rotate(-90deg);
		font-size: 16px;
		bottom: 40px;
		left: 40px;
	}
}

.contact-details {
	margin-top: 24px;

	p {
		font-weight: 500;
	}

	a {
		color: $c-white;
		text-decoration: none;

		&:hover {
			cursor: none;
		}
	}
}

</style>