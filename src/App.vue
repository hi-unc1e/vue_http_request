<template>
  <br>

  <a-divider orientation="left">Postman</a-divider>
  <a-row type="flex">
    <a-col flex="100px">
      <RequestMethodButton/>
    </a-col>
    <a-col flex="300px">
      <UrlInputBox/>
    </a-col>
    <a-col flex="auto">
      <a-button type="primary" @click="goClick()">Go</a-button>
      <a-button>cancel</a-button>

    </a-col>

  </a-row>


  <hr>
</template>

<script>
import {defineComponent} from "vue";
import UrlInputBox from "./UrlInputBox.vue";
import RequestMethodButton from "./RequestMethodButton.vue";


export default defineComponent({
  components: {
    UrlInputBox,
    RequestMethodButton
  },
  methods: {
    goClick
  }
});

export function goClick() {
  alert("cyh 233")
}
</script>