<script lang="ts" setup>
const { t } = useI18n()
const localePath = useLocalePath()
useHead(() => ({
	status: 404,
	title: t('404.text'),
}))
</script>

<template>
	<section class="404">
		<div class="h-screen w-screen bg-gray-50 flex items-center">
			<div
				class="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700"
			>
				<div class="w-full lg:w-1/2 mx-8">
					<div
						style="color: #006569"
						class="text-7xl font-dark font-extrabold mb-8"
					>
						404
					</div>
					<p class="text-2xl md:text-3xl font-light leading-normal mb-8">
						{{ $t('404.text') }}
					</p>

					<nuxtLink
						:to="localePath('/')"
						class="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none active:bg-red-600 hover:bg-red-700"
						style="background: #006569"
						>{{ $t('404.button') }}</nuxtLink
					>
				</div>
				<div class="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
					<img src="~/assets/img/error.svg" class="" alt="Page not found" />
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
