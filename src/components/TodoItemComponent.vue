<template>
    <li class="m-2 p-2 flex justify-between items-center" :class="{ 'bg-red-100 rounded-lg': todoItem.isDone }">
        <div>
            <h3 class="font-bold text-indigo-600">{{ todoItem.title }}</h3>
            <div>{{ todoItem.content }}</div>
        </div>
        <div>
            <span class="cursor-pointer hover:text-ingido-400 mr-4" @click="store.toggleDone(todoItem.id)">{{
                todoItem.isDone ? 'Todo' : 'Done' }}</span>
            <span class="cursor-pointer hover:text-indigo-400" @click="store.deleteItem(todoItem.id)">X</span>
        </div>
    </li>
</template>
    
<script>
export default {
    name: 'TodoItemComponent',
    props: ["todoItem"]
}
</script>

<script setup>
import { store } from '../store/todo.js'
</script>
