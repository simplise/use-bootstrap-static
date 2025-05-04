// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: "2024-07-03",
  modules: ["usebootstrap"],
  usebootstrap: {
    static: true,
    scss: undefined,
    icon: undefined,
    image: undefined,
    fonts: undefined,
    sitemap: undefined,
    robots: undefined,
    shiki: undefined,
    vueuse: undefined,
    integration: {
      protocol: {
        'reqres': {
          type: 'fetch',
          prefix: 'https://reqres.in/api/',
          headers: {
            'x-api-key': 'reqres-free-v1',
           },
        },
      },
    },
  }
}
)
