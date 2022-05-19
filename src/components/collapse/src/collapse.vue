<template>
  <div class="collapse-content">
    <div class="collapse-head" @click="isFold = !isFold" :class="!isFold ? 'border-radius' : 'border'">
      <span>{{title}}</span>
      <span :class="isFold ? 'triangle-up' : 'triangle-down'"></span>
    </div>
    <div v-show="isFold">
      <slot></slot>
    </div>
  </div>
</template>

<style src="./collapse.less" scoped lang="less"/>
<script lang="ts" src="./collapse.ts"></script>
