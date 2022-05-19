<template>
  <div ref="list" class="infinite-list-container" @scroll="scrollEvent($event)">
    <div class="infinite-list-phantom" :style="{ height: listHeight + 'px' }"></div>
    <div class="infinite-list" :style="{ transform: getTransform }">
      <div ref="items"
           class="infinite-list-item"
           v-for="item in visibleData"
           :key="item.id"
           :style="{ height: itemSize + 'px',lineHeight: itemSize + 'px' }"
      >{{ item.value }}</div>
    </div>
  </div>
</template>

<style src="./virtual-list.less" scoped lang="less"/>
<script lang="ts" src="./virtual-list.ts"></script>
