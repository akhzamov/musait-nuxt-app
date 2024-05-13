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
			d="M12 14.708L6.692 9.4l.708-.708l4.6 4.6l4.6-4.6l.708.708z"
		/>
	</svg>
</template>
