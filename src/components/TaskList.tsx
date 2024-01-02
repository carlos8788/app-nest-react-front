import { useEffect, useState } from "react"
import { getTasks } from "../api/tasks.api"
import { Task } from "../interfaces/task.interface"
const TaskList = () => {
    const [tasks, setTasks] = useState<Task[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await getTasks();
            if (result.ok) {
                const data = await result.json();
                setTasks(data);
            } else {
                console.error('Error fetching tasks:', result);
            }
        };
        fetchData();
    }, []);


    return (
        <div className="w-2/5 mx-auto px-4 md:px-8">
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Title</th>
                            <th className="py-3 px-6">Description</th>
                            <th className="py-3 px-6">State</th>
                            <th className="py-3 px-6"></th>

                        </tr>
                    </thead>
                    <tbody className="text-white divide-y">
                        {
                            tasks.map((task: Task, idx: number) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {task.title}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{task.description}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{task.done ? 'ready' : 'pending'}</td>

                                    <td className="text-right px-6 whitespace-nowrap">
                                        <a href="#" className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Edit
                                        </a>
                                        <button className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TaskList