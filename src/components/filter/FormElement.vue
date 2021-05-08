<template>
  <div class="row">
    <div class="mb-3" v-for="(item, i) in infoData" :key="i" style="width:20%">
      <template v-if="advance || i < 5">
        <label class="form-label" for="">{{ item.title }}</label>
        <template v-if="item.type == 'text'">
          <input
            class="form-control"
            type="text"
            :name="item.name"
            v-model="formData[item.name]"
            :placeholder="item.title"
          />
        </template>
        <template v-else-if="item.type == 'select'">
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="formData[item.name]"
          >
            <option selected :value="formData[item.name]"
              >(All {{ item.title }})</option
            >
            <template v-for="option in item.options">
              <option :value="option.value" :key="option.value">{{
                option.text
              }}</option>
            </template>
          </select>
        </template>
        <template v-else-if="item.type == 'date'">
          <input
            class="form-control"
            type="date"
            :name="item.name"
            v-model="formData[item.name]"
          />
        </template>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    infoData: Array,
    advance: Boolean,
    formData: Object,
  },
};
</script>

<style></style>
