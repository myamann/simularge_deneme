import { ref, reactive, onMounted, onBeforeMount, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { VuePlotly } from "vue3-plotly";
import Plotly from "plotly.js-dist";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { db } from "../firebase/index";

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
  const isLoaded = ref(false);

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
    inputs: {},
    outputs: {},
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

  onMounted(async () => {
    let inputs = {};
    console.log("MOUNTED!!! 1");

    // INPUTS
    const querySnapshot = await getDocs(collection(db, "inputs"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      let data = doc.data();
      let id = doc.id;

      inputs = {
        ...inputs,
        [id]: data,
      };
    });
    formData.value.inputs = { ...inputs };

    console.log("myObject inputs", inputs);
    console.log("formData.value.inputs", formData.value.inputs);

    // OUTPUTS
    let outputs = {};
    const oquerySnapshot = await getDocs(collection(db, "outputs"));
    oquerySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      let data = doc.data();
      let id = doc.id;

      outputs = {
        ...outputs,
        [id]: data,
      };
    });
    formData.value.outputs = { ...outputs };

    console.log("myObject outputs", outputs);
    console.log("formData.value.outputs", formData.value.outputs);
    isLoaded.value = true;
  });

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
    isLoaded,
  };
}
