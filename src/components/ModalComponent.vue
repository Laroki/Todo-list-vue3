<template>
    <div id="app">
        <transition name="fade">
            <div v-if="modal.isOpen">
                <div @click="modal.toggle()" class="absolute bg-black opacity-70 inset-0 z-0"></div>
                <div class="modal-card w-full max-w-lg p-3 relative mx-auto rounded-xl shadow-lg bg-white">
                    <div>
                        <div class="text-center p-3 flex-auto justify-center leading-6">
                            <h2 class="text-2xl font-bold py-4 text-indigo-600">Add todo</h2>
                            <div class="px-8 flex flex-col">
                                <div class="flex flex-col">
                                    <label class="text-left mb-2 font-bold text-indigo-600" for="title">Title</label>
                                    <input type="text" class="border" name="title" id="title" placeholder="title"
                                        v-model="title">
                                </div>
                                <div class="flex flex-col mt-4">
                                    <label class="text-left mb-2 font-bold text-indigo-600" for="content">Content</label>
                                    <textarea class="border" v-model="content" placeholder="lorem ipsum" name="content"
                                        id="content"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="p-3 mt-2 text-center space-x-4 md:block">
                            <button @click="store.addTodo(title, content) & modal.toggle()"
                                @mouseover="checkFormIsValid(title, content)"
                                :disabled="!formIsValid"
                                :class="{ 'cursor-not-allowed': !formIsValid }"
                                class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100">
                                Save
                            </button>
                            <button @click="modal.toggle()"
                                class="mb-2 md:mb-0 bg-indigo-500 border border-indigo-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-indigo-600">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
  
<script>
export default {
    name: 'ModalComponent'
};
let formIsValid = ref(false)
function checkFormIsValid(title, content) {
    this.formIsValid = !(content === undefined || title === undefined || content === '' || title === '')
}
</script>

<script setup>
import { ref } from 'vue'
import { modal } from '../store/modal.js'
import { store } from '../store/todo.js'
</script>

<style scoped>
.modal-card {
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    position: absolute;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 500ms ease-out;
}
</style>