<template>
  <div class="about">
    <m-card title="测试">
      <div>
        我是一次测试
      </div>
    </m-card>
    <m-collapse title="测试" :open="true" style="margin-top: 20px;">
      <el-form ref="formTable"
               :model="formData"
               :rules="rules">
        <el-table :data="formData.tableData"
                  border>
          <m-table-form-column prop="date"
                               label="日期"
                               :rules="[{validator: checkData, message: '请输入名称', trigger: 'blur'}]"
                               width="180">
            <template slot-scope="{row}">
              <el-input v-model="row.date" placeholder="请输入名称"></el-input>
            </template>
          </m-table-form-column>
          <m-table-form-column prop="name"
                               label="姓名"
                               icon="el-icon-delete-solid"
                               width="180">
            <template slot-scope="{row}">
              <el-select v-model="row.userId" placeholder="请选择">
                <el-option
                    v-for="item in users"
                    :key="item.userId"
                    :label="item.userName"
                    :value="item.userId">
                </el-option>
              </el-select>
            </template>
          </m-table-form-column>
          <m-table-form-column prop="address"
                               label="地址">
            <template slot-scope="{row}">
              <el-input v-model="row.address"></el-input>
            </template>
          </m-table-form-column>
        </el-table>
        <el-button type="primary" @click="submitForm('formTable')">校验</el-button>
      </el-form>
    </m-collapse>

    <m-table style="margin-top: 20px;"
             :columns="columnList"
             :checked="checkList"
             :tableData="tableData"
             :defaultSort="{prop: 'date', order: 'descending'}">
      <template slot="op" slot-scope="scope">
        <el-button
            size="mini"
            @click="handleEdit(scope.row)">编辑</el-button>
        <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope)">删除</el-button>
      </template>
    </m-table>
    <div style="height: 300px;">
      <virtual-list :listData="data" :itemSize="30" ref="children"/>
    </div>
  </div>
</template>
<script lang="ts" src="./About.ts" />
