<template>
  <section class="m-card">
    <div class="card-head">
      <span class="headCircle" /> {{title}}
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
    <div class="card-foot" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </section>
</template>

<style src="./card.less" scoped lang="less"/>
<script lang="ts" src="./card.ts"></script>
