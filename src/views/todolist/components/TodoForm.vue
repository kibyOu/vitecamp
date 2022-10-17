<template>
  <el-form :inline="true" :model="form" label-width="120px" @submit.prevent="">
    <el-form-item label="待办事项">
      <el-input v-model="form.todo" placeholder="请输入" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit(form.todo)">新增</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import useTodoListStore from '@/store/todo';

const form = reactive({
  todo: '',
});
const store = useTodoListStore();
const onSubmit = (item: string) => {
  if (item.length === 0) {
    return;
  }
  store.addTodo(item);
  form.todo = '';
};
</script>

<style scoped></style>
