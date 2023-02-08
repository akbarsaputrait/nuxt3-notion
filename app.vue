<script setup lang="ts">
const config = useAppConfig();
</script>

<template>
  <div class="w-full h-full">

    <Head>
      <Title>{{ config.meta.subtitle + " - " + config.meta.title }}</Title>
    </Head>
    <NuxtPage />
  </div>
</template>
