<template>
  <highcharts :options="chartOptions" ref="chart"></highcharts>
</template>

<script>
export default {
  props: {
    infoData: {},
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "areaspline",
        },
        title: false,
        xAxis: {
          tickInterval: 3600 * 1000, // one day
          type: "datetime",
          labels: {
            format: "{value:%H:%M}",
          },
        },
        yAxis: {
          gridLineWidth: 1,
          tickInterval: 100,
          title: false,
        },
        plotOptions: {
          series: {
            marker: {
              enabled: false,
            },
          },
        },
        legend: false,
        series: [
          {
            name: "Online Guests",
            lineWidth: 2,
            data: [
              5,
              9,
              11,
              10,
              13,
              24,
              36,
              49,
              53,
              68,
              80,
              96,
              123,
              137,
              146,
              159,
              148,
              134,
              138,
              144,
              141,
              128,
              101,
              36,
            ],
            pointStart: Date.UTC(2021, 1, 1),
            pointInterval: 3600 * 1000,
          },
        ],
      },
    };
  },
};
</script>

<style></style>
