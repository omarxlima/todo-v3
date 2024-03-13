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
// import {ref} from 'vue'
import axios from 'axios'

import { onMounted} from 'vue'
import TaskService from '@/services/todos.service'
export default {
    name: 'TaskView',
    setup() {
        onMounted(()=> {
            axios.get('/todos')
            // TaskService.getAll()
            //         .then(response => {
            //             console.log(response)
            //         })
            //         .cath(error => console.log(error))
        
    })
}
}
</script>