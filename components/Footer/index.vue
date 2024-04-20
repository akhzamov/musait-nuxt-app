<script lang="ts" setup></script>

<template>
	<footer class="footer">
		<div class="footer-top">
			<div class="container">
				<div class="footer-top__items">
					<div class="footer-top__items-title">{{ $t('footer.contacts') }}</div>
					<ul class="footer-top__items-list">
						<li>
							<a
								class="footer-top__items-text"
								href="tel:+998772889099"
								target="_blank"
							>
								<img src="~/assets/img/footer/phone.svg" alt="" />
								+998 77 288 90 99
							</a>
						</li>
						<li>
							<a
								class="footer-top__items-text"
								href="mailto:info@musait.tech"
								target="_blank"
							>
								<img src="~/assets/img/footer/mail.svg" alt="" />
								info@musait.tech
							</a>
						</li>
					</ul>
				</div>
				<div class="footer-top__items">
					<p class="footer-top__items-title">{{ $t('footer.work_time') }}</p>
					<p class="footer-top__items-text">09:00 - 18 00</p>
					<p class="footer-top__items-text">{{ $t('footer.work_week') }}</p>
				</div>
				<img
					class="footer-top__logo"
					src="~/assets/img/logos/musait-logo.svg"
					alt=""
				/>
			</div>
		</div>
		<div class="footer-bottom">
			<div class="container">
				<ul class="footer-bottom__list">
					<li>
						<a
							href="https://www.instagram.com/musait_technologies/"
							target="_blank"
						>
							<img src="~/assets/img/footer/telegram.svg" alt="" />
						</a>
					</li>
					<li>
						<a href="https://t.me/Musait_technologies" target="_blank">
							<img src="~/assets/img/footer/instagram.svg" alt="" />
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/company/musait-technologies/"
							target="_blank"
						>
							<img src="~/assets/img/footer/linkedin.svg" alt="" />
						</a>
					</li>
				</ul>
				<div class="footer-bottom__text">© 2024 Musait Technologies</div>
				<div class="footer-bottom__text">
					{{ $t('nav.top.address') }}
				</div>
			</div>
		</div>
	</footer>
</template>

<style scoped></style>
