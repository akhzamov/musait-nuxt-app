<script lang="ts" setup>
import { workStepsList } from './workSteps.data'
</script>

<template>
	<section class="work-steps">
		<div class="container">
			<h2 class="work-steps__title title-glob_w">
				{{ $t('work_steps.title') }}
			</h2>
			<div class="work-steps__items">
				<div
					class="work-steps__item"
					v-for="item in workStepsList"
					:key="item.id"
				>
					<img class="work-steps__item-img" :src="item.img" alt="" />
					<div class="work-steps__item-content">
						<p class="work-steps__item-number">{{ item.number }}</p>
						<h3 class="work-steps__item-title">{{ $t(item.title) }}</h3>
						<div class="work-steps__item-tasks">
							<p
								class="work-steps__item-task"
								v-for="task in item.tasks"
								:key="task.id"
							>
								<ICO_circle-sharp size="8px" fill="#FFF" />{{ $t(task.text) }}
							</p>
						</div>
						<div class="work-steps__item-bg-blue-elem"></div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
