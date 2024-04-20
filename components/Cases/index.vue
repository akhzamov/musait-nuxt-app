<script lang="ts" setup>
import { casesList } from './cases.data'
</script>

<template>
	<section class="cases">
		<div class="container">
			<h2 class="cases__title title-glob">{{ $t('cases.title') }}</h2>
			<div class="cases__items">
				<div class="cases__item" v-for="item in casesList" :key="item.id">
					<img class="cases__item-img" :src="item.img" alt="" />
					<div class="cases__item-top">
						<p class="cases__item-tag">{{ $t(item.tag) }}</p>
						<h3 class="cases__item-title">{{ $t(item.title) }}</h3>
						<p class="cases__item-subtitle">{{ $t(item.subtitle) }}</p>
					</div>
					<div class="cases__item-line"></div>
					<div class="cases__item-center">
						<div
							class="cases__item-text-dot"
							v-for="work in item.works"
							:key="work.id"
						>
							<ICO_circle-sharp size="7px" fill="#1e1e1e" />
							<span>{{ $t(work.text) }}</span>
						</div>
					</div>
					<div class="cases__item-line"></div>
					<div class="cases__item-bottom">
						<p class="cases__item-text-bottom">{{ $t(item.benefit) }}</p>
					</div>
					<div class="cases__item-button">
						<button>{{ $t('cases.button') }}</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
