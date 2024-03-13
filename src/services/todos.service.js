import axios from 'axios'

export default class TaskService {
    //permite sem precisar criar um objeto
    static async getAll() {
        return axios.get('/todos')
    } 
}