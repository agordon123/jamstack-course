// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: "2UrcbuUkhgCKN8mnUyYwKQtt",
        apiOptions: {
          region: "us",
        },
      },
    ],
  ],
});
