<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { useStore } from 'vuex';

export default {
  setup(){
    const store = useStore();
    const id = store.state.userId;
    console.log(id);
  }
}
</script>