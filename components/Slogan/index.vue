<script lang="ts" setup></script>

<template>
	<section class="slogan">
		<div class="container">
			<img
				class="slogan__img"
				src="~/assets/img/logos/musait-logo.svg"
				alt=""
			/>
			<p class="slogan__text">“{{ $t('slogan') }}”</p>
		</div>
		<img class="slogan__bg-left" src="~/assets/img/header-bg-left.png" alt="" />
		<img
			class="slogan__bg-right"
			src="~/assets/img/header-bg-right.png"
			alt=""
		/>
	</section>
</template>

<style scoped></style>
