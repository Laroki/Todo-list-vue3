<template>
    <div class="grid mt-16">
        <div class="mx-64">
            <h1 class="font-bold text-2xl text-center text-indigo-600 mb-8">TODO</h1>
            <button @click="modal.toggle()" type="button" class="text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:ring-ingido-300 font-medium rounded text-m px-5 py-2.5 me-2 mb-2 focus:outline-none m-2">+ Add</button>
            <div class="card-shadow rounded p-2"
                :class="{ 'divide-y divide-indigo-600': (store.getDoneList().length !== 0 && store.getTodoList().length !== 0) }">
                <ul class="divide-y">
                    <TodoItemComponent v-for="(item, index) in store.getTodoList()" :key="index" v-bind:todo-item="item">
                    </TodoItemComponent>
                </ul>
                <ul class="divide-y">
                    <TodoItemComponent v-for="(item, index) in store.getDoneList()" :key="index" v-bind:todo-item="item">
                    </TodoItemComponent>
                </ul>
            </div>
        </div>
    </div>
    <ModalComponent></ModalComponent>
</template>
  
<script>
import TodoItemComponent from './TodoItemComponent.vue';
import ModalComponent from './ModalComponent.vue';
export default {
    name: 'TodoListComponent',
    components: {TodoItemComponent, ModalComponent}
}
</script>

<script setup>
import { store } from '../store/todo.js'
import { modal } from '../store/modal.js'
</script>

<style scoped>
.card-shadow {
    box-shadow: 20px 20px 25px 15px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>