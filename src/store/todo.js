import { reactive } from 'vue'

export const store = reactive({
    todoList: [
        {
            id: 1,
            title: 'Rdv Médecin',
            content: 'lorem ipsum',
            isDone: true
        },
        {
            id: 2,
            title: 'Liste course',
            content: 'lorem ipsum',
            isDone: false
        },
        {
            id: 3,
            title: 'Test',
            content: 'lorem ipsum',
            isDone: false
        },
        {
            id: 4,
            title: 'Test 2',
            content: 'lorem ipsum',
            isDone: false
        },
    ],
    deleteItem(id) {
        this.todoList = this.todoList.filter(item => item.id !== id)
    },
    toggleDone(id) {
        const item = this.todoList.find(item => item.id === id)
        item.isDone = !item.isDone
    },
    getDoneList() {
        return this.todoList.filter(item => item.isDone)
    },
    getTodoList() {
        return this.todoList.filter(item => !item.isDone)
    },
    addTodo(title, content) {
        this.todoList.push({
            id: Math.random().toString(16).slice(2),
            title,
            content,
            isDone: false
        })
    }
})