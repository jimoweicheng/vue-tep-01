<template>
  <span>{{ title }}</span>
  <!-- <el-button type="primary"> 
    Primary 
  </el-button> -->
  <HelloWorld />
</template>

<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue';
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore();
const title = ref('hello world');
</script>
