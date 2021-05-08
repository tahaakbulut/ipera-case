<template>
  <div
    class="d-flex flex-lg-row flex-column justify-content-center align-items-center bg-white py-4"
  >
    <highcharts
      :options="setup()"
      ref="chart"
      class="me-lg-5"
      style="width:300px;height:300px"
    ></highcharts>
    <ul class="list-group">
      <li
        v-for="(item, i) in infoData"
        :key="item[0]"
        class="list-group-item border-0"
      >
        <span
          class="d-inline-block p-2 rounded-circle me-3"
          :style="{ backgroundColor: colors[i] }"
        ></span>
        <span class="text-muted">{{ item[0] }}</span>
        <b class="ms-2">{{ ((item[1] / total()) * 100).toFixed(1) }}%</b>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    colors: Array,
    infoData: Array,
    name: {
      type: String,
    },
  },
  data() {
    return {
      percent: 0,
      chartOptions: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false,
        },
        title: false,
        exporting: {
          enabled: false,
        },
        credits: {
          enabled: false,
        },
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: false,
            },
          },
        },
      },
    };
  },
  methods: {
    total() {
      return this.infoData.map((a) => a[1]).reduce((x, y) => x + y);
    },
    setup() {
      return {
        ...this.chartOptions,
        series: [
          {
            type: "pie",
            name: this.name,
            innerSize: "50%",
            data: this.infoData.map((e) => {
              return { name: e[0], y: e[1] };
            }),
          },
        ],
      };
    },
  },
};
</script>
