import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const App = () => {
  return (
    <div className="bg-slate-700 h-screen p-10">
      <div className='bg-slate-700 text-white flex flex-col items-center justify-center '>
        <div className="bg-gray-950 p-4 w-2/5">
          <h1 className="text-3xl font-bold text-center block my-2">
            Task App
          </h1>
          <TaskForm />
        </div>
        <TaskList />
      </div>
    </div>

  )
}

export default App