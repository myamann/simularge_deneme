<template>
  <q-page class="flex flex-center justify-around">
    <div class="container q-gutter-lg q-pa-md">
      <div class="col-3">
        <q-card class="my-card bg-secondary text-white cardWidth">
          <q-card-section>
            <div class="text-h6">VERSION 1</div>
            <!-- <div class="text-subtitle2">by John Doe</div> -->
          </q-card-section>

          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </q-card-section>

          <q-separator dark />

          <q-card-actions>
            <q-btn outline @click="goToFormPage('version_one')">
              Forma Git</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-3">
        <q-card class="my-card bg-secondary text-white cardWidth">
          <q-card-section>
            <div class="text-h6">VERSION 2</div>
          </q-card-section>

          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </q-card-section>

          <q-separator dark />

          <q-card-actions>
            <q-btn outline @click="goToFormPage('version_two')"
              >Forma Git</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-3">
        <q-card class="my-card bg-secondary text-white cardWidth">
          <q-card-section>
            <div class="text-h6">VERSION 3</div>
          </q-card-section>

          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </q-card-section>

          <q-separator dark />

          <q-card-actions>
            <q-btn outline @click="goToFormPage('version_three')">
              Forma Git</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-3">
        <q-card class="my-card bg-primary text-white cardWidth">
          <q-card-section>
            <div class="text-h6">VERSION 4 - PREMIUM</div>
          </q-card-section>

          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </q-card-section>

          <q-separator dark />

          <q-card-actions>
            <q-btn outline @click="goToFormPage('version_four')"
              >Forma Git</q-btn
            >
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeMount, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProjectStore } from "../stores/store";

const router = useRouter();
// const route = useRoute();
const projectStore = useProjectStore();

// STATES
const isUserPremium = ref(projectStore.isUserPremium);

function goToFormPage(formType) {
  console.log("goToFormPage", formType);
  if (isUserPremium.value == false && formType == "version_four") {
    alert("Lütfem Premium Üyelik Alın.");
  } else {
    router.push(`/${formType}`);
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.cardWidth {
  width: 250px;
}
</style>
