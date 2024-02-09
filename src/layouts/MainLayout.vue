<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>App v0.1 </q-toolbar-title>

        <div>{{ userName }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> SIMULARGE </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, computed } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { useProjectStore } from "../stores/store";
const projectStore = useProjectStore();

const linksList = ref([
  {
    title: "HOMEPAGE",
    caption: "Choose versions",
    icon: "home",
    link: "/",
  },
]);

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const userName = computed(() => {
  return projectStore.username;
});
</script>
