<template>
<div>
  <Header ></Header>
  <router-view></router-view>
</div>
</template>

<script lang="ts">
 import { defineComponent } from 'vue'
  export default  defineComponent({
    name:'App'
  })
</script>
<script lang="ts" setup>
  import Header from '@/components/header.vue'
</script>

<style lang="less" scoped>
  
</style>