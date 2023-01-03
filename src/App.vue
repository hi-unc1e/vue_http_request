<template>
  <br>
  1
  <br>
        <RequestMethodButton />
  <hr>
  <br>
  11
  <br>

        <UrlInputBox />
</template>

<script>
import { defineComponent } from "vue";
import UrlInputBox from "./UrlInputBox.vue";
import RequestMethodButton from "./RequestMethodButton.vue";


export default defineComponent({
components: {
  UrlInputBox,
  RequestMethodButton
},
});
</script>