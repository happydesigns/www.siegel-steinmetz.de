<script setup lang="ts">
useHead({
  title: 'Bernd Siegel Steingestaltung',
  titleTemplate: '%s | Bernd Siegel Steingestaltung',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'google-site-verification', content: 'i5hJWTD7u44mb8sXv4PjgwP5EoPz0sWVuHd4rhbV6vk' },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
  ],
  htmlAttrs: {
    lang: 'de',
  },
})

useSeoMeta({
  description: 'Steingestaltung in Neudenau: Grabmale, Restaurierungen und mehr.',
})

const { page } = useContent()
</script>

<template>
  <AppHeader :ui="page?.ui?.header" />
  <NuxtPage />
  <AppFooter :ui="page?.ui?.footer" />
</template>

<style>
:root {
  --color-primary-DEFAULT: var(--color-primary-800);
  --tw-prose-links: var(--color-primary-DEFAULT);
}

.dark {
  --color-primary-DEFAULT: var(--color-primary-400);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-serif;
}

img.default {
  @apply rounded-md border border-gray-200 dark:border-gray-800;
}

p .iconify {
  @apply inline-block align-middle mb-0.5 mr-1;
}

footer p .iconify {
  @apply text-base;
}
</style>
