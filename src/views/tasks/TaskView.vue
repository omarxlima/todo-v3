<template>
    <h1>Lista de Tarefas</h1>

    <ul>
        <li v-for="todo in todos" :key="todo.identify">
            {{ todo.name }}
        </li>
    </ul>
    <input type="text" v-model="name">
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'TaskView',
    setup() {
        const todos = [
            {identify:1, name: 'tarefa 01', completed: true},
            {identify:2, name: 'tarefa 02', completed: true},
            {identify:3, name: 'tarefa 03', completed: true},

        ]
        const name = ref('defalt value') //reativa
        name.value = 'teste 2' //mudar valor reativo
        return {
            todos,
            name
        }
    }
}
</script>