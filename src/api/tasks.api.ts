import { CreateTask } from "../interfaces/task.interface";

const API: string = 'http://localhost:3000/api';

export const createTaskRequest = async (task: CreateTask) =>
    await fetch(`${API}/tasks`, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: { 'Content-Type': 'application/json' }
    })

export const getTasks = async () => await fetch(`${API}/tasks`)