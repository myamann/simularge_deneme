<template>
  <q-page class="flex flex-center justify-around">
    <div class="container q-gutter-lg q-pa-md">
      <div v-for="(card, index) in cardList" :key="index">
        <FormCard
          :title="card.title"
          :description="card.description"
          :isPremium="card.isPremium"
          :link="card.link"
          :color="card.color"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

import FormCard from "../components/cards/FormCard.vue";

// STATES
const cardList = ref([
  {
    title: "Version 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    isPremium: false,
    link: "version_one",
    color: "bg-green",
  },
  {
    title: "Version 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    isPremium: false,
    link: "version_two",
    color: "bg-green",
  },
  {
    title: "Version 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    isPremium: false,
    link: "version_three",
    color: "bg-green",
  },
  {
    title: "Version 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    isPremium: true,
    link: "version_four",
    color: "bg-primary",
  },
]);
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
