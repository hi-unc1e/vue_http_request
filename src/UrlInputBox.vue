<template>
  <a-auto-complete
    v-model:value="value"
    :options="options"
    style="width: 200px"
    @search="handleSearch"
    @select="onSelect"
  >
    <a-textarea
      placeholder="input here"
      class="custom"
      style="height: 50px"
      @keypress="handleKeyPress"
    />
  </a-auto-complete>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref('');
    const options = ref([]);

    const onSelect = value => {
      console.log('onSelect', value);
    };

    const handleSearch = value => {
      options.value = !value
        ? []
        : [
            {
              value,
            },
            {
              value: "http://" + value,
            },
            {
              value: "https://" + value,
            },
          ];
    };

    const handleKeyPress = ev => {
      console.log('handleKeyPress', ev);
    };

    return {
      value,
      options,
      onSelect,
      handleSearch,
      handleKeyPress,
    };
  },
});
</script>
