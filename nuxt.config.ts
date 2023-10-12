// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: true,
          "Space+Mono": true,
        },
      },
    ],
  ],
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
});
