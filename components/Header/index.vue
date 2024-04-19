<script lang="ts" setup>
const { t } = useI18n()

let typeArray: string[] = reactive([
	t('header.title-changes.1'),
	t('header.title-changes.2'),
	t('header.title-changes.3'),
	t('header.title-changes.4'),
	t('header.title-changes.5'),
	t('header.title-changes.6'),
	t('header.title-changes.7'),
	t('header.title-changes.8'),
	t('header.title-changes.9'),
])

let typeValue: any = ref('')
let typeStatus: boolean = false
let typingSpeed: number = 70
let erasingSpeed: number = 60
let newTextDelay: number = 300
let typeArrayIndex: number = 0
let charIndex: number = 0

const typeText = (): void => {
	if (charIndex < typeArray[typeArrayIndex].length) {
		if (!typeStatus) typeStatus = true

		typeValue.value += typeArray[typeArrayIndex].charAt(charIndex)
		charIndex += 1
		setTimeout(typeText, typingSpeed)
	} else {
		typeStatus = false
		setTimeout(eraseText, newTextDelay + 2000)
	}
}
const eraseText = (): void => {
	if (charIndex > 0) {
		if (!typeStatus) typeStatus = true

		typeValue.value = typeArray[typeArrayIndex].substring(0, charIndex - 1)
		charIndex -= 1
		setTimeout(eraseText, erasingSpeed)
	} else {
		typeStatus = false
		typeArrayIndex += 1
		if (typeArrayIndex >= typeArray.length) typeArrayIndex = 0
		setTimeout(typeText, typingSpeed + 200)
	}
}

onMounted(() => {
	setTimeout(typeText, newTextDelay + 0)
})
</script>

<template>
	<div class="container">
		<div class="header-content">
			<h1 class="header-content__title">
				{{ $t('header.title-one') }} <span>{{ typeValue }}</span> <br />
				{{ $t('header.title-two') }}
			</h1>
			<p class="header-content__text">
				{{ $t('header.subtitle') }}
			</p>
			<button class="header-content__button">
				{{ $t('header.button') }}
				<span>
					<ICO_arrow-circle size="25px" fill="#006569" />
				</span>
			</button>
		</div>
		<div class="header-image">
			<img
				src="~/assets/img/header-bg-left.png"
				class="header-images header-images__bg-left"
			/>
			<img
				src="~/assets/img/header-bg-right.png"
				class="header-images header-images__bg-right"
			/>
			<div class="header-images__team">
				<img
					src="~/assets/img/header-team-1.png"
					class="header-images__team-1"
				/>
				<img
					src="~/assets/img/header-team-2.png"
					class="header-images__team-2"
				/>
				<img
					src="~/assets/img/header-team-3.png"
					class="header-images__team-3"
				/>
				<img
					src="~/assets/img/header-team-4.png"
					class="header-images__team-4"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
