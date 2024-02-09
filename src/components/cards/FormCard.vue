<template>
  <div class="col-3">
    <q-card class="my-card text-white cardWidth" :class="color">
      <q-card-section>
        <div class="text-h6">
          {{ title }} {{ isPremium ? " - Premium" : "" }}
        </div>
      </q-card-section>

      <q-card-section>
        {{ description }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn outline @click="goToFormPage(link)">Go to form </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeMount, computed } from "vue";
import { useProjectStore } from "src/stores/store";
import { useRoute, useRouter } from "vue-router";

const props = defineProps([
  "title",
  "description",
  "isPremium",
  "link",
  "color",
]);

const router = useRouter();
// const route = useRoute();
const projectStore = useProjectStore();

const isUserPremium = ref(projectStore.isUserPremium);

function goToFormPage(version) {
  if (isUserPremium.value == false && props.link == "version_four") {
    alert("Please Get Premium Membership.");
  } else {
    router.push(`/${version}`);
  }
}

const premium = computed(() => {
  return props.isPremium;
});
</script>

<style scoped>
.cardWidth {
  width: 250px;
}
</style>
