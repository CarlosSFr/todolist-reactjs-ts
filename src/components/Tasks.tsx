import styles from './Tasks.module.css'
import { useState } from 'react';
import NewTask from "./NewTask"
import { PlusCircle } from "@phosphor-icons/react"
import EmptyTask from "./EmptyTask"

function Tasks() {

    const [tasks, setTasks] = useState([
        "",
    ]);

    const [inputValue, setInputValue] = useState("");

    function handleInputValue(){
        
        setInputValue(event.target.value);
        
    }

    function handleCreateNewTask(){
        event.preventDefault();

        if(inputValue !== ""){
            setTasks([...tasks, inputValue]);
        }
    }

    return (
        <div className={styles.tasksWrapper}>

            <div className={styles.tasksList}>

                <header className={styles.tasksHeader}>
                    <div className={styles.tasksCountersDiv}>
                        <p>Tarefas criadas</p>
                        <span className={styles.tasksCount}>0</span>
                    </div>
                    <div className={styles.tasksCountersDiv}>
                        <p>Concluídas</p>
                        <span className={styles.tasksCount}>0</span>
                    </div>
                </header>

                <form onSubmit={handleCreateNewTask} className={styles.addTask}>
                    <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa"
                    onChange={handleInputValue}
                    />
                    <button type="submit"> Criar <PlusCircle size={20} /> </button>
                </form>

                    {tasks.map(task => {
                        if(tasks.length !== 1){
                            if(task !== ""){
                                return <NewTask 
                                            content = {task}
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