<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const modules = reactive([Pagination, Navigation])
</script>

<template>
	<section class="reviews">
		<div class="container">
			<div class="reviews__title title-glob">Отзывы наших клиентов</div>
			<swiper
				:slidesPerView="'auto'"
				:spaceBetween="20"
				:pagination="{
					clickable: true,
				}"
				:navigation="true"
				:modules="modules"
				class="reviews__swiper"
			>
				<swiper-slide class="reviews__slide">
					<div class="reviews__slide-top">
						<img
							class="reviews__slide-avatar"
							src="~/assets/img/reviews/avatar.png"
							alt=""
						/>
						<div class="reviews__slide-top-text">
							<h3 class="reviews__slide-top-name">Amelia Joseph</h3>
							<p class="reviews__slide-top-job">Chief Manager</p>
						</div>
					</div>
					<p class="reviews__slide-text">
						My vision came alive effortlessly. Their blend of casual and
						professional approach made the process a breeze. Creativity flowed,
						and the results were beyond my expectations.
					</p>
				</swiper-slide>
				<swiper-slide class="reviews__slide">
					<div class="reviews__slide-top">
						<img
							class="reviews__slide-avatar"
							src="~/assets/img/reviews/avatar.png"
							alt=""
						/>
						<div class="reviews__slide-top-text">
							<h3 class="reviews__slide-top-name">Amelia Joseph</h3>
							<p class="reviews__slide-top-job">Chief Manager</p>
						</div>
					</div>
					<p class="reviews__slide-text">
						My vision came alive effortlessly. Their blend of casual and
						professional approach made the process a breeze. Creativity flowed,
						and the results were beyond my expectations.
					</p>
				</swiper-slide>
				<swiper-slide class="reviews__slide">
					<div class="reviews__slide-top">
						<img
							class="reviews__slide-avatar"
							src="~/assets/img/reviews/avatar.png"
							alt=""
						/>
						<div class="reviews__slide-top-text">
							<h3 class="reviews__slide-top-name">Amelia Joseph</h3>
							<p class="reviews__slide-top-job">Chief Manager</p>
						</div>
					</div>
					<p class="reviews__slide-text">
						My vision came alive effortlessly. Their blend of casual and
						professional approach made the process a breeze. Creativity flowed,
						and the results were beyond my expectations.
					</p>
				</swiper-slide>
				<swiper-slide class="reviews__slide">
					<div class="reviews__slide-top">
						<img
							class="reviews__slide-avatar"
							src="~/assets/img/reviews/avatar.png"
							alt=""
						/>
						<div class="reviews__slide-top-text">
							<h3 class="reviews__slide-top-name">Amelia Joseph</h3>
							<p class="reviews__slide-top-job">Chief Manager</p>
						</div>
					</div>
					<p class="reviews__slide-text">
						My vision came alive effortlessly. Their blend of casual and
						professional approach made the process a breeze. Creativity flowed,
						and the results were beyond my expectations.
					</p>
				</swiper-slide>
				<swiper-slide class="reviews__slide">
					<div class="reviews__slide-top">
						<img
							class="reviews__slide-avatar"
							src="~/assets/img/reviews/avatar.png"
							alt=""
						/>
						<div class="reviews__slide-top-text">
							<h3 class="reviews__slide-top-name">Amelia Joseph</h3>
							<p class="reviews__slide-top-job">Chief Manager</p>
						</div>
					</div>
					<p class="reviews__slide-text">
						My vision came alive effortlessly. Their blend of casual and
						professional approach made the process a breeze. Creativity flowed,
						and the results were beyond my expectations.
					</p>
				</swiper-slide>
				<swiper-slide class="reviews__slide">
					<div class="reviews__slide-top">
						<img
							class="reviews__slide-avatar"
							src="~/assets/img/reviews/avatar.png"
							alt=""
						/>
						<div class="reviews__slide-top-text">
							<h3 class="reviews__slide-top-name">Amelia Joseph</h3>
							<p class="reviews__slide-top-job">Chief Manager</p>
						</div>
					</div>
					<p class="reviews__slide-text">
						My vision came alive effortlessly. Their blend of casual and
						professional approach made the process a breeze. Creativity flowed,
						and the results were beyond my expectations.
					</p>
				</swiper-slide>
				<swiper-slide class="reviews__slide">
					<div class="reviews__slide-top">
						<img
							class="reviews__slide-avatar"
							src="~/assets/img/reviews/avatar.png"
							alt=""
						/>
						<div class="reviews__slide-top-text">
							<h3 class="reviews__slide-top-name">Amelia Joseph</h3>
							<p class="reviews__slide-top-job">Chief Manager</p>
						</div>
					</div>
					<p class="reviews__slide-text">
						My vision came alive effortlessly. Their blend of casual and
						professional approach made the process a breeze. Creativity flowed,
						and the results were beyond my expectations.
					</p>
				</swiper-slide>
			</swiper>
		</div>
	</section>
</template>

<style scoped lang="scss"></style>
