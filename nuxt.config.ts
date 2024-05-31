export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/musait-logo-no-text.svg" },
      ],
      bodyAttrs: {
        id: "body",
      },
      meta: [
        {
          name: "google-site-verification",
          content: "2rQHxEmF_R0oeYjJSeWTd3UEpd1GbEFpUuMjiuYbVL0",
        },
      ],
    },
  },
  css: ["~/assets/css/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    [
      "@vee-validate/nuxt",
      {
        autoImports: true,
        componentNames: {
          Form: "VeeForm",
          Field: "VeeField",
          FieldArray: "VeeFieldArray",
          ErrorMessage: "VeeErrorMessage",
        },
      },
    ],
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Inter: {
            wght: [400, 500, 600, 700, 900],
            ital: [300],
          },
          Lato: {
            wght: [400, 500, 600, 700, 900],
            ital: [300],
          },
        },
      },
    ],
  ],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  i18n: {
    lazy: true,
    langDir: "locales/",
    locales: [
      { code: "en", iso: "en-US", file: "en.json", name: "English" },
      { code: "ru", iso: "ru-RU", file: "ru.json", name: "Русский" },
      { code: "uz", iso: "uz-UZ", file: "uz.json", name: "O'zbekcha" },
    ],
    defaultLocale: "ru",
    strategy: "prefix_except_default",
    vueI18n: "./i18n.config.ts",
  },
  routeRules: {
    "/about": { redirect: "/technical" },
    "/cases": { redirect: "/technical" },
    "/contacts": { redirect: "/technical" },
    "/services": { redirect: "/technical" },
    "/vacancies": { redirect: "/technical" },
    "/en/about": { redirect: "/en/technical" },
    "/en/cases": { redirect: "/en/technical" },
    "/en/contacts": { redirect: "/en/technical" },
    "/en/services": { redirect: "/en/technical" },
    "/en/vacancies": { redirect: "/en/technical" },
    "/uz/about": { redirect: "/uz/technical" },
    "/uz/cases": { redirect: "/uz/technical" },
    "/uz/contacts": { redirect: "/uz/technical" },
    "/uz/services": { redirect: "/uz/technical" },
    "/uz/vacancies": { redirect: "/uz/technical" },
  },
  nitro: {
    prerender: {
      routes: ["/index.html"],
    },
  },
  plugins: ["~/plugins/phone-mask.ts"],
});
