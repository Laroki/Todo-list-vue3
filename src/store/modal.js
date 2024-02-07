import { reactive } from 'vue'

export const modal = reactive({
    isOpen: false,
    toggle() {
        this.isOpen = !this.isOpen
    }
})