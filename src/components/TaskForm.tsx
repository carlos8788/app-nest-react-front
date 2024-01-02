import { FormEvent, useState } from "react"
import { createTaskRequest } from "../api/tasks.api";

const TaskForm = () => {

    const [task, setTask] = useState({
        title: '',
        description: '',
        done: false,
    })

    const handleChange = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const formProps = Object.fromEntries(formData.entries());
        const newTask = {
            ...task,
            title: formProps.title as string,
            description: formProps.description as string
        };
        setTask(newTask);

        const result = await createTaskRequest(task)
        result.ok ? alert('Task created') : alert('Error creating task')
    };


    return (
        <form onSubmit={handleChange} className='flex flex-col gap-2 justify-center'>
            <input
                type="text"
                name='title'
                className='border-2 border-gray-600 p-2 bg-zinc-800 block w-full my-2'
                placeholder='Write a title'
            />
            <textarea
                name="description"
                rows={3}
                className='border-2 border-gray-600 p-2 bg-zinc-800 block w-full my-2'
            ></textarea>
            <label htmlFor="" className="flex gap-x-2">
                <input type="checkbox" className="h-5 w-5" onChange={() => setTask({ ...task, done: !task.done })} />
                <span>Done</span>
            </label>
            <button className='bg-red-500 rounded-md hover:bg-red-700 transition ease-in h-10'>Save</button>
        </form>
    )
}

export default TaskForm