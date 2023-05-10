<script setup lang="ts">
import { ref, reactive } from 'vue'

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
      <div>
        <h2>Phonebook Application</h2>
        <p>
          A simple application that functions a phonebook list, to you may remember your phone
          number
        </p>
        <p>Node.js, React, MongoDB</p>
      </div>
      <div>
        <h2>Country Information Application</h2>
        <p>
          A application to find information about your a country + including the weather of the
          capital city
        </p>
        <!-- TODO:use chatgpt to summarize the history of the country -->
        <p>Restful API, React, Node</p>
      </div>
      <div>
        <h2>Bloglist Application</h2>
        <p>
          A application to store you favorite blogs posts where other users can like and comment on
          the blog post
        </p>
        <p>React, Node.js, Redux</p>
      </div>
      <div>
        <h2>Patient Diagnosis Application</h2>
        <p>Store your patient records in this application including the type of Diagnosis</p>
        <p>React, Typescript, Material UI</p>
      </div>
    </div>

    <div>
      <h1>VALUES</h1>
      <div>
        <h2>WALKING UPWARDS</h2>
        <p>Since perfection does not exist, I do my best to continously improve.</p>
      </div>
      <div>
        <h2>ADAPTATION</h2>
        <p>Better ways of doing things should be adpated to ensure progession</p>
      </div>
      <div>
        <h2>CRAWL FALL, WALK</h2>
        <p>
          As Kids we crawl, stand up, fall, and at some point walk. That's the approach I take when
          I'm learning something new.
        </p>
      </div>
      <div>
        <h2>ACE</h2>
        <p>No matter what the project is - we should always try to get it right.</p>
      </div>
    </div>
  </div>
</template>
<!-- TODO: need to add about about -->

<!-- TODO: need to add projects  -->

<!-- TODO: need to fix particles js  -->
<style scoped></style>
