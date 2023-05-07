<script setup lang="ts">
import { ref, reactive } from 'vue'
import { loadStarsPreset } from "tsparticles-preset-stars";
import { FullScreen } from 'tsparticles-engine';

const particlesInit = async engine => {
  await loadStarsPreset(engine);
};

const particlesLoaded = async container => {
  console.log("Particles container loaded", container);
};
const particlesOptions = {
  preset: "stars",
}
const message = ref('Portfolio Page')

interface other {
  name: string
}
const other_message: other = reactive({
  name: "ebrahim"
})
</script>

<template>
  <!-- <div>
    <Particles id="tsparticles" :particlesInit="particlesInit" :options="particlesOptions" />
  </div>-->
  <div>
    <h1> Ebrahim's Portfolio</h1>
  </div>
</template>
<!-- TODO: need to add about about -->

<!-- TODO: need to add projects  -->


<!-- TODO: need to fix particles js  -->
<style scoped></style>
