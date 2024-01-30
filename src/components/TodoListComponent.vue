<template>
    <h1 class="font-bold text-2xl text-center mt-8">TODO</h1>
    <div class="todo-card p-2">
        <ul class="divide-y">
            <li v-for="(item, index) in todoList" :key="index" class="m-2 p-2 flex justify-between items-center">
                <div>
                    <h3 class="font-bold">{{ item.title }}</h3>
                    <div>{{ item.content }}</div>
                </div>
                <span class="cursor-pointer text-red-600 hover:text-red-400" @click="deleteItem(index)">X</span>
            </li>
            <span v-if="todoList.length === 0" class="font-bold text-center">NO TODOS</span>    
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'TodoListComponent'
}
</script>

<script setup>
import { ref } from 'vue'

function deleteItem(index) {
    this.todoList.splice(index, 1)
}

let todoList = ref([
    { title: 'Mirage', content: 'bg', id: 1},
    { title: 'Laroki', content: 'tres bg', id:2 },
    { title: 'Alexis', content: 'trop moche', id:3 },
    { title: 'Mamoufie', content: "alors lui on en parle meme pas d'ailleurs il faut que je test avec un text un peu long genre celui la ou celui ci oucelui la", id:4 },
    { title: 'Alexis', content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur unde reiciendis aperiam, maxime quaerat voluptatem ducimus ut vero! Velit labore ad, quod laboriosam sequi dolorum et minima tenetur debitis magni?", id:5 }
]);
</script>

<style scoped>
.todo-card {
    margin:auto;
    width: 50%;
    margin-top: 5vh;
    border-radius: 0.5rem;
    box-shadow: 20px 20px 25px 15px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    min-height: 200px;
}
</style>