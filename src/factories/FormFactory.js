import { ref, reactive, onMounted, onBeforeMount, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { VuePlotly } from "vue3-plotly";
import Plotly from "plotly.js-dist";

export default function FormFactory() {
  const router = useRouter();
  const route = useRoute();

  // STATES
  const randomKey = ref(0);
  const xAxis = ref(0);
  const yAxis = ref(0);
  const Addition = ref(0);
  const Multiplication = ref(0);
  const isChartVisible = ref(false);

  const MAX_DATA_POINTS = ref(5);

  const myChartData = ref({
    data: [
      {
        x: [1, 2, 3],
        y: [1, 2, 3],
        type: "scatter",
        mode: "lines+markers",
        marker: { color: "blue" },
        name: "Data",
      },
    ],
    layout: {
      title: "Chart Title",
      xaxis: { title: "X Axis" },
      yaxis: { title: "Y Axis" },
    },
  });

  const formData = ref({
    inputs: {
      ID0: {
        type: "textfield",
        disabled: false,
        label: "Inputs",
        bgColor: "orange",
      },
      ID1: {
        type: "textfield",
        disabled: false,
        label: "X",
        bgColor: "white",
      },
      ID2: {
        type: "textfield",
        disabled: false,
        label: "Y",
        bgColor: "white",
      },
    },
    outputs: {
      ID0: {
        type: "textfield",
        disabled: false,
        label: "Results",
        bgColor: "green",
      },
      ID1: {
        type: "textfield",
        disabled: false,
        label: "Addition",
        bgColor: "white",
      },
      ID2: {
        type: "textfield",
        disabled: false,
        label: "Multiplication",
        bgColor: "white",
      },
      ID3: {
        type: "button",
        disabled: false,
        label: "Show Chart",
        label2: "Hide Chart",
        bgColor: "green",
        bgColor2: "grey",
      },
    },
  });

  // METHODS

  const execute = () => {
    let sum = Number(xAxis.value) + Number(yAxis.value);
    let multiply = Number(xAxis.value) * Number(yAxis.value);

    // x ve y axisleri 20den fazla olamaz!
    if (sum > 20 || sum < 0 || multiply > 20 || multiply < 0) {
      alert("Addition ve Multiplication değerleri 20den fazla olamaz!");
      return;
    }

    Addition.value = sum;
    Multiplication.value = multiply;

    // X axise ekle
    myChartData.value.data[0].x = [
      ...myChartData.value.data[0].x,
      Addition.value,
    ];
    // Y axise ekle
    myChartData.value.data[0].y = [
      ...myChartData.value.data[0].y,
      Multiplication.value,
    ];

    // Grafik data elemanları 5'ten fazla ise
    if (myChartData.value.data[0].x.length > MAX_DATA_POINTS.value) {
      // İlk elemanı çıkarın
      myChartData.value.data[0].x.shift();
      myChartData.value.data[0].y.shift();
    }

    Plotly.react(
      "graph",
      [
        {
          x: myChartData.value.data[0].x,
          y: myChartData.value.data[0].y,
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "blue" },
          name: "Data",
        },
      ],
      myChartData.value.layout
    );

    // clear inputs
    xAxis.value = 0;
    yAxis.value = 0;

    // Re-Render chart
    randomKey.value++;
  };

  // Grafik gösterme işlemi
  const toggleChart = () => {
    isChartVisible.value = !isChartVisible.value;
    console.log("showcart value", isChartVisible.value);
  };

  // LIFECYCLE METHODS

  // COMPUTED

  const showChartButtonLabel = computed(() => {
    return isChartVisible.value
      ? formData.value.outputs.ID3.label2
      : formData.value.outputs.ID3.label;
  });

  const showChartButtonColor = computed(() => {
    return isChartVisible.value
      ? formData.value.outputs.ID3.bgColor2
      : formData.value.outputs.ID3.bgColor;
  });

  return {
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
  };
}
