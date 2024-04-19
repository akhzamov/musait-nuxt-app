<script lang="ts" setup>
import { navbarData } from './navbar.data'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const useIdFunction = () => useId()
const localePath = useLocalePath()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
	return locales.value.filter(i => i.code !== locale.value)
})

const addressLink = ref('https://yandex.ru/profile/137293321076')
const phoneNumber = ref('+998772889099')
const buttonHoverActive = ref(false)
const mobileMenuOpen = ref(false)
</script>

<template>
	<nav class="navbar flex flex-col w-full">
		<div class="navbar-top">
			<div class="container flex justify-between items-center">
				<a :href="addressLink" class="navbar-top__text" target="_blank">
					<span class="navbar-top__text-icon">
						<ICO_map-pin fill="#979797" size="21" />
					</span>
					{{ $t('nav.top.address') }}
				</a>
				<a :href="'tel:' + phoneNumber" class="navbar-top__text">
					<span class="navbar-top__text-icon">
						<ICO_phone fill="#979797" size="21" />
					</span>
					{{ $t('nav.top.tel') }} +998 77 288 90 99
				</a>
			</div>
		</div>
		<div class="navbar-content">
			<div class="container flex justify-between items-center">
				<NuxtLink class="navbar-content__logo" :to="localePath('/')">
					<NuxtImg
						src="/musait-logo-no-text.svg"
						class="navbar-content__logo-img circle"
						loading="lazy"
						decoding="auto"
					/>
					<NuxtImg
						src="/musait-text.svg"
						class="navbar-content__logo-img text"
						loading="lazy"
						decoding="auto"
					/>
				</NuxtLink>
				<ul class="navbar-content__list">
					<li
						class="navbar-content__item"
						v-for="item in navbarData"
						:key="item.id"
					>
						<NuxtLink class="navbar-content__link" :to="localePath(item.path)">
							{{ $t(item.name) }}
						</NuxtLink>
					</li>
					<li>
						<ClientOnly>
							<Menu as="div" class="relative inline-block text-left">
								<div>
									<MenuButton
										:use-id="useIdFunction"
										class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm hover:bg-gray-50 navbar-content__dropdown-button"
									>
										{{
											locales!
												.find(i => (i as any).code == locale)
												?.code.toUpperCase()
										}}
										<ChevronDownIcon
											class="-mr-1 h-5 w-5 text-gray-400"
											aria-hidden="true"
										/>
									</MenuButton>
								</div>

								<transition
									enter-active-class="transition ease-out duration-100"
									enter-from-class="transform opacity-0 scale-95"
									enter-to-class="transform opacity-100 scale-100"
									leave-active-class="transition ease-in duration-75"
									leave-from-class="transform opacity-100 scale-100"
									leave-to-class="transform opacity-0 scale-95"
								>
									<MenuItems
										class="absolute right-0 z-10 mt-2 w-35 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
									>
										<div class="py-1">
											<MenuItem
												v-slot="{ active }"
												v-for="locale in availableLocales"
												:key="locale.code"
											>
												<NuxtLink
													:to="switchLocalePath(locale.code)"
													:class="[
														active
															? 'bg-gray-100 text-gray-900'
															: 'text-gray-700',
														'block px-4 py-2 text-sm',
													]"
												>
													{{ locale.code.toUpperCase() }}
												</NuxtLink>
											</MenuItem>
										</div>
									</MenuItems>
								</transition>
							</Menu>
						</ClientOnly>
					</li>
				</ul>
				<a
					href="https://t.me/musait_manager"
					target="_blank"
					class="navbar-content__button"
				>
					<span>{{ $t('nav.content.button') }}</span>
					<span>
						<ICO_arrow-circle size="25" fill="#006569" />
					</span>
				</a>
				<button class="navbar-content__menu" @click="mobileMenuOpen = true">
					<ICO_dashboard size="25" fill="##" />
				</button>
			</div>
		</div>
	</nav>
	<nav
		class="navbar mobile lg:hidden"
		@click="mobileMenuOpen = false"
		:class="{ active: mobileMenuOpen }"
	>
		<div class="navbar-content" @click.stop>
			<div class="navbar-content__top flex justify-between w-full">
				<NuxtLink class="navbar-content__logo" :to="localePath('/')">
					<NuxtImg
						src="/musait-logo-no-text.svg"
						class="navbar-content__logo-img circle"
						loading="lazy"
						decoding="auto"
					/>
				</NuxtLink>
				<button @click="mobileMenuOpen = false">
					<ICO_close size="30" fill="#1E1E1E" />
				</button>
			</div>
			<ul class="navbar-content__list">
				<li
					class="navbar-content__item"
					v-for="item in navbarData"
					:key="item.id"
				>
					<NuxtLink class="navbar-content__link" :to="localePath(item.path)">
						{{ $t(item.name) }}
					</NuxtLink>
				</li>
				<li class="w-full">
					<ClientOnly>
						<Menu as="div" class="relative inline-block text-left w-full">
							<div>
								<MenuButton
									class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-2 text-sm hover:bg-gray-50 navbar-content__dropdown-button"
								>
									{{
										locales
											.find((i: any) => i.code == locale)
											?.code.toUpperCase()
									}}
									<ChevronDownIcon
										class="-mr-1 h-5 w-5 text-gray-400"
										aria-hidden="true"
									/>
								</MenuButton>
							</div>

							<transition
								enter-active-class="transition ease-out duration-100"
								enter-from-class="transform opacity-0 scale-95"
								enter-to-class="transform opacity-100 scale-100"
								leave-active-class="transition ease-in duration-75"
								leave-from-class="transform opacity-100 scale-100"
								leave-to-class="transform opacity-0 scale-95"
							>
								<MenuItems
									class="absolute left-0 z-10 mt-2 w-35 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
								>
									<div class="py-1">
										<MenuItem
											v-slot="{ active }"
											v-for="locale in availableLocales"
											:key="locale.code"
										>
											<NuxtLink
												:to="switchLocalePath(locale.code)"
												:class="[
													active
														? 'bg-gray-100 text-gray-900'
														: 'text-gray-700',
													'block px-4 py-2 text-sm',
												]"
											>
												{{ locale.code.toUpperCase() }}
											</NuxtLink>
										</MenuItem>
									</div>
								</MenuItems>
							</transition>
						</Menu>
					</ClientOnly>
				</li>
			</ul>
			<a
				href="https://t.me/musait_manager"
				target="_blank"
				class="navbar-content__button mobile"
			>
				<span>{{ $t('nav.content.button') }}</span>
				<span>
					<ICO_arrow-circle size="25" fill="#006569" />
				</span>
			</a>
		</div>
	</nav>
</template>
