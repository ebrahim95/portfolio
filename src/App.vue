<script setup lang="ts">
import { ref, reactive } from 'vue'
import Card from './components/Card.vue'
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
    <div class="mx-auto 2xl:w-8/12 lg:w-8/12 flex flex-col items-center">
      <header>
        <h1 class="text-center">Ebrahim's <span class="kbd"> + </span> Portfolio</h1>
        <h2 class="text-center"> A Crafty Front <span class="kbd">-</span> End Engineer </h2>

      </header>
      <section>
        <h3 class="kbd font-bold">
          HOW I STARTED
        </h3>
        <p>
          I started web development in May 2022 by volunteering at an organization to develop a new
          website. At first, I knew little about creating a website. I used a landing page software
          called Carrd to develop the website. It was quite a simple software and creating a web
          page was not too difficult.
        </p>

        <h3 class="kbd  font-bold">
          PROGESSION
        </h3>
        <p>
          I started to look deeper into web development and stumbled upon Webflow. I looked into and
          started learning it through Webflow university. After developing a basic skillset, I
          started to develop free websites for individuals in my discord community.
        </p>
        <h3 class="kbd  font-bold">
          CURRENTLY,
        </h3>

        <p>
          I am well-versed in the MERN Stack - MongoDB, Express.js, React.js, and Node.js. I can
          also use Typescript. I aim to be a Front-End Developer with Full-Stack Awareness.
        </p>
      </section>
      <section class="mb-6">
        <h2 class="kbd text-center lg:text-start">PERSONAL PROJECTS</h2>
        <div class="min-w-full flex flex-row flex-wrap justify-center gap-5 mx-auto 2xl:justify-start">
          <Card url_git="https://github.com/ebrahim95/practice-projects/tree/main/countries"
            url_demo="https://silent-dream-6984.fly.dev/">
            <template #heading> Country Information Application </template>
            <template #details>
              A application to find information about your country + including the weather of the
              capital city
            </template>
            <template #stack> Restful API, React, Node </template>
          </Card>

          <Card url_git="https://github.com/ebrahim95/practice-projects/tree/main/bloglist"
            url_demo="https://icy-shadow-3484.fly.dev/">
            <template #heading> Bloglist Application </template>
            <template #details>
              A application to store you favorite blogs posts where other users can like and comment
              on the blog post
            </template>
            <template #stack> React, Node.js, Redux </template>
          </Card>

          <Card url_git="https://github.com/ebrahim95/portfolio" url_demo="https://coding-school-list.fly.dev">
            <template #heading>Coding School List</template>
            <template #details>The website displays coding schools that are located within the Greater Houston
              Area.</template>
            <template #stack>Solid JS, Typescript, Tailwind CSS, Pocketbase Database, Tanstack Table</template>
          </Card>

          <Card url_git="https://github.com/ebrahim95/coding_school_list" url_demo="https://small-hill-6640.fly.dev/">
            <template #heading> Phonebook Application </template>
            <template #details>
              A simple application that functions a phonebook list, to you may remember your phone
              number
            </template>
            <template #stack>Node.js, React, MongoDB</template>
          </Card>


          <Card url_git="https://github.com/ebrahim95/practice-projects/tree/main/patientor">
            <template #heading> Patient Diagnosis Application </template>
            <template #details>
              Store your patient records in this application including the type of Diagnosis
            </template>
            <template #stack> React, Typescript, Material UI </template>
          </Card>

          <Card url_git="https://github.com/ebrahim95/portfolio">
            <template #heading>Portfolio</template>
            <template #details>Shows you my work :)</template>
            <template #stack>Vue, Typescript, Vite</template>
          </Card>




        </div>
      </section>

      <section>
        <h2 class="kbd text-center lg:text-start">
          VALUES
        </h2>
        <div class="grid grid-row-2 gap-6 md:grid-cols-2">
          <div>
            <kbd class="kbd kbd-lg  font-bold">WALKING UPWARDS</kbd>
            <p>Since perfection does not exist, I do my best to continously improve.</p>
          </div>
          <div>
            <kbd class="kbd kbd-lg  font-bold">ADAPTATION</kbd>
            <p>Better ways of doing things should be adpated to ensure progession</p>
          </div>
          <div>
            <kbd class="kbd kbd-lg  font-bold">CRAWL, FALL, WALK</kbd>
            <p>
              As Kids we crawl, stand up, fall, and at some point walk. That's the approach I take
              when I'm learning something new.
            </p>
          </div>
          <div>
            <kbd class="kbd kbd-lg  font-bold">ACE</kbd>
            <p>No matter what the project is - we should always try to get it right.</p>
          </div>
        </div>
      </section>
      <footer>
        <a class="link" href="https://www.linkedin.com/in/ebrahim-haji/">LinkedIn</a>
        <span> | </span>
        <a class="link" href="https://github.com/ebrahim95">Github</a>
        <span> | </span>
        <a class="link" href="https://twitter.com/ebstheace">Twitter</a>
      </footer>
    </div>
  </div>
</template>

<style scoped></style>
