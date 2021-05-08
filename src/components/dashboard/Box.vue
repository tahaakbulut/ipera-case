<template>
  <div class="text-center bg-white py-4">
    {{ title }}
    <div class="fw-bold fs-2 mt-3">
      {{ infoData }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    infoData: Number,
    title: String,
  },
};
</script>

<style></style>
