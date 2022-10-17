<template>
  <div v-for="todo in todoList" :key="todo.id">
    <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
    <span class="action" @click.stop="toogleCompleted(todo.id)">&nbsp;&nbsp;&#10004;</span>
    <span class="action" @click="deleteTodo(todo.id)">&nbsp;&nbsp;&#10060;</span>
  </div>
</template>

<script setup lang="ts">
import useTodoListStore from '@/store/todo';

const store = useTodoListStore();
const { todoList } = storeToRefs(store);
const { toogleCompleted, deleteTodo } = store;
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
.action {
  cursor: pointer;
}
</style>
