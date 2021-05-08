<template>
  <div class="container-fluid col align-self-start py-3">
    <form class="row" v-if="info">
      <!-- Filter -->
      <div class="d-flex">
        <h4>Guest</h4>
        <button
          type="button"
          class="btn btn-outline-dark ms-auto"
          @click="advance = !advance"
        >
          Advanced Search
        </button>
      </div>
      <div class="col-12">
        <FormElement :infoData="info" :advance="advance" :formData="formData" />
      </div>
      <div class="d-flex">
        <button
          type="reset"
          class="btn btn-outline-dark me-2 ms-auto"
          @click="formData = {}"
        >
          Clear
        </button>
        <button
          type="submit"
          class="btn btn-outline-dark"
          @click.prevent="submit()"
        >
          Search
        </button>
      </div>
      <!-- Result -->
      <div v-if="result">
        {{ formData }}
      </div>
    </form>
    <div v-else>
      Loading..
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FormElement from "../filter/FormElement";

export default {
  data() {
    return {
      info: null,
      advance: false,
      formData: {},
      result: false,
    };
  },
  components: {
    FormElement,
  },
  mounted() {
    axios
      .get("http://challenge.iperasolutions.com/filters")
      .then((response) => (this.info = response.data));
  },
  methods: {
    submit() {
      console.log("submit");
      this.result = true;
    },
  },
};
</script>

<style></style>
