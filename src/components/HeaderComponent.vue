<template>
  <header class="bg-black">
    <nav class="grid grid-cols-3 p-6">
      <div class="flex">
        <a href="#" class="-m-1.5 p-1.5">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        </a>
      </div>
      <div class="text-white text-center grid-cols-2 font-bold">
        <a class="px-2 underline underline-offset-2 hover:text-sky-400" href="#">Todo</a>
        <a class="px-2 underline underline-offset-2 hover:text-sky-400" href="#">Done</a>
        <a class="px-2 underline underline-offset-2 hover:text-sky-400" href="#">Add</a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>
