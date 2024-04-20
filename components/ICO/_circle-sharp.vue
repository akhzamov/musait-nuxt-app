<script lang="ts" setup>
defineProps({
	fill: {
		type: String,
		default: '#1E1E1E',
	},
	size: {
		type: String,
		default: '22px',
	},
})
</script>

<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="size"
		:height="size"
		viewBox="0 0 24 24"
	>
		<path
			:fill="fill"
			d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2"
		/>
	</svg>
</template>
