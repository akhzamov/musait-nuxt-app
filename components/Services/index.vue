<script lang="ts" setup>
import { servicesData } from './services.data'
</script>

<template>
	<section class="services">
		<div class="container">
			<h2 class="services__title title-glob_w">{{ $t('services.title') }}</h2>
			<div class="services__items">
				<div class="services__item" v-for="data in servicesData" :key="data.id">
					<img class="services__item-img" :src="data.image" alt="" />
					<div class="services__item-content">
						<div class="services__item-front">
							<h2 class="services__item-title">{{ $t(data.title) }}</h2>
							<p class="services__item-tag">{{ $t(data.tags.tag_one) }}</p>
							<p class="services__item-tag">{{ $t(data.tags.tag_two) }}</p>
							<p class="services__item-tag">{{ $t(data.tags.tag_three) }}</p>
						</div>
						<div class="services__item-back">
							<h2 class="services__item-title">{{ $t(data.title) }}</h2>
							<p class="services__item-text">{{ $t(data.text) }}</p>
							<p class="services__item-deadline">{{ $t(data.deadline) }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
