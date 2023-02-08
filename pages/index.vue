<script setup>
const state = reactive({
  posts: [],
});

const { data: posts, pending } = await useLazyFetch('/api/gallery');
state.posts = posts;
console.log(posts);

watch(posts, (newPosts) => {
  state.posts = newPosts;
});
</script>

<template>
  <div class="h-full bg-white dark:bg-gray-900 flex">
    <div class="m-auto max-w-7xl sm:px-6 lg:px-8 w-full">
      <div
        class="relative isolate overflow-hidden dark:bg-gray-700 bg-gray-100 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"
          class="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
          aria-hidden="true">
          <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
              gradientTransform="translate(512 512) rotate(90) scale(512)">
              <stop stop-color="green" />
              <stop offset="1" stop-color="green" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>

        <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 class="text-3xl font-bold tracking-tight text-default sm:text-4xl">
            <span class="text-green-500">Nuxt3</span> & <span>Notion</span> <br /> Starter Template
          </h2>

          <div class="flex flex-row justify-center sm:justify-start gap-6 my-4">
            <Icon name="typescript" />
            <Icon name="nuxt" />
            <Icon name="tailwind" />
            <Icon name="notion" />
          </div>

          <div>
            <p class="font-medium text-default">by <a href="https://github.com/akbarsaputrait"
                class="hover:underline">@akbarsaputrait</a></p>
          </div>

          <div class="my-8">
            <label for="countries" class="block mb-2 text-sm font-medium text-default">
              Color Scheme
            </label>
            <select id="countries" v-model="$colorMode.preference"
              class="mx-auto sm:m-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[10rem]">
              <option selected>Choose</option>
              <option value="system">System</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          <div class="flex items-center justify-center gap-x-6 lg:justify-start">
            <a class="inline-flex items-center gap-3 rounded border border-black bg-black px-4 py-2 text-white hover:bg-white hover:text-black focus:outline-none focus:ring active:text-black transition duration-200 dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
              target="_blank" href="https://github.com/akbarsaputrait/nuxt3-starter">
              <Icon name="github" />
              <span class="text-sm font-medium">Clone</span>
            </a>
          </div>
        </div>
        <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <!-- <img class="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="App screenshot"
            width="1824" height="1080" /> -->

          <div v-if="pending" class="text-black dark:text-white">Loading...</div>

          <div v-else class="grid grid-cols-1 gap-8">
            <div v-for="data in state.posts" class="card-image flex"
              :style="{ 'background-image': `url('${data.properties.image ? data.properties.image : ''}')` }">

              <div class="mt-auto z-50">
                <p class="font-semibold text-xl text-gray-200">{{ data.properties.title }}</p>
                <p class="text-xs text-gray-300">
                  <Icon name="calendar" size="14" /> {{ $dayjs(data.created_at).fromNow() }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
div {
  transition: all 0.2s ease-out;
}
</style>
