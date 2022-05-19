<template>
  <section class="m-table">
    <header>
      <el-dropdown trigger="click">
        <el-button type="primary" size="mini" icon="el-icon-setting" />
        <el-dropdown-menu slot="dropdown">
          <el-checkbox-group v-model="checkList" class="m-checkbox-group" :min="1">
            <el-checkbox v-for="item in columnList" :label="item.label" :key="item.prop" @change="changeSelect()"/>
          </el-checkbox-group>
        </el-dropdown-menu>
      </el-dropdown>
    </header>
    <el-table
        border
        :data="tableData"
        :default-sort = "defaultSort"
        style="width: 100%">
      <el-table-column v-for="(item, index) in tableColumn" :key="item.prop + item.label"
                       :prop="item.prop"
                       :sortable="item.sortable"
                       :label="item.label"
                       :width="item.width">
        <slot :name="item.prop" :index="index" :row="tableData[index]"></slot>
      </el-table-column>
    </el-table>
  </section>
</template>

<script src="./table.ts" lang="ts" />
<style lang="less" src="./table.less" scoped/>
