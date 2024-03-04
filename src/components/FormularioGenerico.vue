<template>
  <div>
    <label>{{ etiqueta }}</label>
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="updateModelValue"
    />
  </div>
</template>

<script>
export default {
  name: "FormularioGenerico",
  props: {
    etiqueta: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number,Date, null],
      required: true,
    },
  },
  methods: {
    updateModelValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style>
</style>