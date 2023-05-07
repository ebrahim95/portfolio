<script setup lang="ts">
import { ref, reactive } from 'vue'
import { loadStarsPreset } from 'tsparticles-preset-stars'
import { FullScreen } from 'tsparticles-engine'

const particlesInit = async (engine) => {
  await loadStarsPreset(engine)
}

const particlesLoaded = async (container) => {
  console.log('Particles container loaded', container)
}
const particlesOptions = {
  preset: 'stars'
}
const message = ref('Portfolio Page')

interface other {
  name: string
}
const other_message: other = reactive({
  name: 'ebrahim'
})
</script>

<template>
  <!-- <div>
    <Particles id="tsparticles" :particlesInit="particlesInit" :options="particlesOptions" />
  </div>-->
  <div>
    <h1>Ebrahim's Portfolio</h1>
    <div>
      <h2>HOW I STARTED</h2>
      <p>
        I started web development in May 2022 by volunteering at an organization to develop a new
        website. At first, I knew little about creating a website. I used a landing page software
        called Carrd to develop the website. It was quite a simple software and creating a web page
        was not too difficult.
      </p>

      <h2>PROGRESSION</h2>
      <p>
        I started to look deeper into web development and stumbled upon Webflow. I looked into and
        started learning it through Webflow university. After developing a basic skillset, I started
        to develop free websites for individuals in my discord community.
      </p>
      <h2>CURRENTLY,</h2>
      <p>
        I am well-versed in the MERN Stack - MongoDB, Express.js, React.js, and Node.js. I can also
        use Typescript. I aim to be a Front-End Developer with Full-Stack Awareness.
      </p>
    </div>

    <div>
      <h1>BACKGROUND</h1>
    </div>

    <div>
      <h1>PERSONAL PROJECTS</h1>
    </div>

    <div>
      <h1>VALUES</h1>
    </div>
  </div>
</template>
<!-- TODO: need to add about about -->

<!-- TODO: need to add projects  -->

<!-- TODO: need to fix particles js  -->
<style scoped></style>
