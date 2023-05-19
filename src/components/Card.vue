<script setup lang="ts">
const props = defineProps({
  url_git: String,
  url_demo: String
})
</script>
<template>
  <div class="card card-normal bg-base-300 w-80 card-bordered border-2">
    <div class="card-body">
      <h2 class="card-title">
        <slot name="heading"> </slot>
      </h2>
      <p>
        <slot name="details"> </slot>
      </p>
      <p>
        <slot name="stack"></slot>
      </p>
      <a :href="url_git" class="btn btn-primary font-semibold text-slate-900 no-underline"
        >Github</a
      >
      <a
        v-if="url_demo"
        :href="url_demo"
        class="btn btn-secondary font-semibold text-slate-900 no-underline"
      >
        Demo
      </a>
    </div>
  </div>
</template>
