import styles from './Tasks.module.css'
import { useState, FormEvent, ChangeEvent} from 'react';
import NewTask from "./NewTask"
import { PlusCircle } from "@phosphor-icons/react"
import EmptyTask from "./EmptyTask"

function Tasks() {

    const [tasks, setTasks] = useState([
        "",
    ]);

    const [inputValue, setInputValue] = useState("");
    const [completedTasksCount, setCompletedTasksCount] = useState(0);

    function handleInputValue(event: ChangeEvent<HTMLInputElement>){
        
        setInputValue(event.target.value);
        
    }

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault();

        if(inputValue !== ""){
            setTasks([...tasks, inputValue]);
        }

        setInputValue("");
    }

    function handleDeleteTask(taskToDelete:string){

        const tasksWithoutDeleted = tasks.filter(task => {
            return task !== taskToDelete;
        })

        setTasks(tasksWithoutDeleted);

    }

    function handleTaskChecked(isChecked: boolean) {
        // Atualizar o contador de tarefas concluídas
        if (isChecked) {
          setCompletedTasksCount(prevCount => prevCount + 1);
        } else {
          setCompletedTasksCount(prevCount => prevCount - 1);
        }
    }

    return (
        <div className={styles.tasksWrapper}>

            <div className={styles.tasksList}>

                <header className={styles.tasksHeader}>
                    <div className={styles.tasksCountersDiv}>
                        <p>Tarefas criadas</p>
                        <span className={styles.tasksCountOne}>{tasks.length - 1}</span>
                    </div>
                    <div className={styles.tasksCountersDiv}>
                        <p>Concluídas</p>
                        <span 
                            className={tasks.length - 1 === 0? styles.tasksCount : styles.tasksCountNew}>
                            {tasks.length - 1 === 0? `0` : `${completedTasksCount} de ${tasks.length - 1}`}
                        </span>
                    </div>
                </header>

                <form onSubmit={handleCreateNewTask} className={styles.addTask}>
                    <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa"
                    onChange={handleInputValue}
                    value={inputValue}
                    />
                    <button type="submit"> Criar <PlusCircle size={20} /> </button>
                </form>

                    {tasks.map(task => {
                        if(tasks.length !== 1){
                            if(task !== ""){
                                return <NewTask 
                                            content = {task}
                                            onDelete = {handleDeleteTask}
                                            onTaskChecked = {handleTaskChecked}
                                        />
                            }
                        }else{
                            return <EmptyTask />
                        }
                    })}
                
            </div>

        </div>
    );
}

export default Tasks;