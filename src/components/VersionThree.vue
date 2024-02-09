<template>
  <q-page class="column row q-pa-sm" :key="randomKey">
    <h6 class="row">#Version3</h6>
    <div v-if="!isLoaded">Loading</div>

    <div v-if="isLoaded" class="row">
      <!-- Inputs form -->

      <q-form class="col-2 q-px-xs">
        <q-input
          filled
          v-model="formData.inputs.ID0.label"
          :bg-color="formData.inputs.ID0.bgColor"
          readonly
        />

        <q-input filled v-model="xAxis" :label="formData.inputs.ID1.label" />
        <q-input filled v-model="yAxis" :label="formData.inputs.ID2.label" />
      </q-form>

      <!-- Outputs form -->

      <q-form class="col-2 q-px-xs">
        <q-input
          filled
          v-model="formData.outputs.ID0.label"
          :bg-color="formData.outputs.ID0.bgColor"
          readonly
        />

        <q-input
          filled
          v-model="Addition"
          :label="formData.outputs.ID1.label"
          readonly
        />
        <q-input
          filled
          v-model="Multiplication"
          :label="formData.outputs.ID2.label"
          readonly
        />

        <q-btn
          v-if="false"
          @click="toggleChart"
          :label="showChartButtonLabel"
          :color="showChartButtonColor"
        ></q-btn>
      </q-form>

      <q-btn class="" @click="execute" label="EXECUTE" color="primary"></q-btn>

      <div v-show="isChartVisible" class="col-5 chartContainer" id="graph">
        <VuePlotly
          :data="myChartData.data"
          :layout="myChartData.data"
          :config="myChartData.config"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeMount, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { VuePlotly } from "vue3-plotly";
import Plotly from "plotly.js-dist";
import FormFactory from "../factories/FormFactory";

const router = useRouter();
const route = useRoute();

const {
  randomKey,
  xAxis,
  yAxis,
  Addition,
  Multiplication,
  isChartVisible,
  MAX_DATA_POINTS,
  myChartData,
  formData,
  execute,
  toggleChart,
  showChartButtonLabel,
  showChartButtonColor,
  isLoaded,
} = FormFactory();
</script>

<style scoped></style>
