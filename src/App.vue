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
  <div id="main-background" class="prose font-mono mx-auto min-h-full p-10 min-w-full">
    <div class="mx-auto 2xl:w-6/12 lg:w-8/12 flex flex-col items-center">

      <h1>Ebrahim's Portfolio</h1>
      <section>

        <h2 class="text-center">BACKGROUND</h2>
        <h3>HOW I STARTED</h3>
        <p>
          I started web development in May 2022 by volunteering at an organization to develop a new
          website. At first, I knew little about creating a website. I used a landing page software
          called Carrd to develop the website. It was quite a simple software and creating a web page
          was not too difficult.
        </p>

        <h3>PROGRESSION</h3>
        <p>
          I started to look deeper into web development and stumbled upon Webflow. I looked into and
          started learning it through Webflow university. After developing a basic skillset, I started
          to develop free websites for individuals in my discord community.
        </p>
        <h3>CURRENTLY,</h3>
        <p>
          I am well-versed in the MERN Stack - MongoDB, Express.js, React.js, and Node.js. I can also
          use Typescript. I aim to be a Front-End Developer with Full-Stack Awareness.
        </p>
      </section>
      <section class="mb-6">
        <h2 class="text-center">PERSONAL PROJECTS</h2>
        <div class="flex flex-row flex-wrap justify-center gap-6 mx-auto 2xl:justify-start">
          <div class="card card-normal bg-base-300 w-80 card-bordered border-slate-100">
            <div class="card-body">
              <h2 class="card-title">Phonebook Application</h2>
              <p>
                A simple application that functions a phonebook list, to you may remember your phone
                number
              </p>

              <p>Node.js, React, MongoDB</p>
              <a href="https://www.google.com/"
                class="btn btn-primary font-semibold text-slate-900 no-underline">Github</a>
              <a href="https://www.google.com/" class="btn btn-secondary"> Demo </a>

            </div>

          </div>
          <div class="card card-normal bg-base-300 w-80 card-bordered border-slate-100">
            <div class="card-body">
              <h2 class="card-title">Country Information Application</h2>
              <p>
                A application to find information about your country + including the weather of the
                capital city
              </p>
              <p>Restful API, React, Node</p>
              <a class="btn btn-primary"> Github </a>
              <a class="btn btn-secondary"> Demo </a>

              <!-- TODO:use chatgpt to summarize the history of the country -->
            </div>
          </div>
          <div class="card card-normal bg-base-300 w-80 card-bordered border-slate-100">
            <div class="card-body">
              <h2 class="card-title">Bloglist Application</h2>
              <p>
                A application to store you favorite blogs posts where other users can like and comment on
                the blog post
              </p>
              <p>React, Node.js, Redux</p>
              <a class="btn btn-primary"> Github </a>
              <a class="btn btn-secondary"> Demo </a>
            </div>
          </div>
          <div class="card card-normal bg-base-300 w-80 card-bordered border-slate-100">
            <div class="card-body">
              <h2 class="card-title">Patient Diagnosis Application</h2>
              <p>Store your patient records in this application including the type of Diagnosis</p>
              <p>React, Typescript, Material UI</p>
              <a class="btn btn-primary"> Github </a>
              <a class="btn btn-secondary"> Demo </a>

            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-center">VALUES</h2>
        <div class="grid grid-row-2 gap-6 md:grid-cols-2 ">
          <div>
            <kbd class="kbd kbd-lg text-slate-100 font-bold">WALKING UPWARDS</kbd>

            <p>Since perfection does not exist, I do my best to continously improve.</p>
          </div>
          <div>

            <kbd class="kbd kbd-lg text-slate-100 font-bold">ADAPTATION</kbd>
            <p>Better ways of doing things should be adpated to ensure progession</p>
          </div>
          <div>

            <kbd class="kbd kbd-lg text-slate-100 font-bold">CRAWL, FALL, WALK</kbd>
            <p>
              As Kids we crawl, stand up, fall, and at some point walk. That's the approach I take when
              I'm learning something new.
            </p>
          </div>
          <div>

            <kbd class="kbd kbd-lg text-slate-100 font-bold">ACE</kbd>
            <p>No matter what the project is - we should always try to get it right.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped></style>
