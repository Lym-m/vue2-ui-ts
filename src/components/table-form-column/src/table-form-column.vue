<template>
  <el-table-column :prop="prop"
                   :label="label"
                   :width="width"
                   :fixed="fixed"
                   :min-width="minWidth"
                   :align="align"
                   :header-align="headerAlign"
                   class-name="m-form-table-column">
    <template slot="header" slot-scope="{column}">
      {{column.label}} <i :class="icon"></i>
    </template>
    <template slot-scope="{row, $index, column}">
      <el-form-item :prop="'tableData.' + $index + '.date'"
                    :rules="rules">
        <slot :row="row"
              :$index="$index"
              :column="column">{{row[prop]}}
        </slot>
        <el-tooltip :content="error"
                    effect="light"
                    placement="top"
                    :enterable="true"
                    popper-class="m-error-tooltip"
                    slot="error" slot-scope="{error}">
          <slot :row="row"
                :$index="$index"
                :column="column">{{row[prop]}}
          </slot>
        </el-tooltip>
      </el-form-item>
    </template>
  </el-table-column>
</template>

<!-- 表单内嵌表格才使用此组件 -->
<script lang="ts" src="./table-form-column.ts"></script>
<style lang="less" src="./table-form-column.less"></style>
