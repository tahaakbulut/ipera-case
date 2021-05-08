<template>
  <div class="container-fluid bg-light p-3">
    <div class="row gx-3 gy-3" v-if="info">
      <div class="col-md-12">
        <OnlineGuests :infoData="info.online_guests" />
      </div>
      <div class="col-md-3">
        <Box :infoData="info.current_online" title="Current Online" />
      </div>
      <div class="col-md-3">
        <Box :infoData="Math.max(...info.online_guests)" title="Max Online" />
      </div>
      <div class="col-md-3">
        <Box :infoData="info.unique_connections" title="Unique Connections" />
      </div>
      <div class="col-md-3">
        <Box :infoData="info.impressions" title="Impressions" />
      </div>
      <div class="col-md-6">
        <BoxWidth
          :infoData="info.device_vendors"
          :colors="colors"
          name="Device Vendors"
        />
      </div>
      <div class="col-md-6">
        <BoxWidth
          :infoData="info.login_types"
          :colors="colors"
          name="Login Types"
        />
      </div>
    </div>
    <div
      class="d-flex align-items-center justify-content-center"
      style="height:100vh"
      v-else
    >
      Loading...
    </div>
  </div>
</template>

<script>
import axios from "axios";
import OnlineGuests from "../dashboard/OnlineGuests";
import Box from "../dashboard/Box";
import BoxWidth from "../dashboard/BoxWidth";
import Highcharts from "highcharts";

export default {
  data() {
    return {
      colors: [
        "#57D6F9",
        "#FB766C",
        "#DA658A",
        "#A86298",
        "#715F91",
        "#445679",
        "#2F4858",
        "#0061A5",
        "#6AF9C4",
      ],
      info: null,
    };
  },
  components: {
    OnlineGuests,
    Box,
    BoxWidth,
  },
  mounted() {
    axios
      .get("http://challenge.iperasolutions.com/dashboard")
      .then((response) => (this.info = response.data));
    Highcharts.setOptions({
      colors: this.colors,
    });
  },
  methods: {},
};
</script>
