import AddTaskForm from "./AddTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import TodoInfo from "./TodoInfo.jsx";
import TodoList from "./TodoList.jsx";

const Todo = () => {
    const tasks = [
        {id: 'task-1', title: 'Sell milk', isDone: false},
        {id: 'task-2', title: 'Buy milk', isDone: true},
    ];

    const deleteAllTasks = () => {

    }

    const deleteTask = (taskId) => {

    }

    const toggleTaskComplete = (taskId, isDone) => {

    }

    const filterTasks = (query) => {

    }

    const addTask = () => {

    }



    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm addTask={addTask}/>
            <SearchTaskForm onSearchInput={filterTasks}/>
            <TodoInfo
                total={tasks.length}
                done={tasks.filter(({isDone}) => isDone).length}
                onDeleteAllButtonClick={deleteAllTasks}
            />
            <TodoList
                tasks={tasks}
                onDeleteTaskButtonClick={deleteTask}
                onTaskCompleteChange={toggleTaskComplete}
            />
        </div>
    )
}

export default Todo