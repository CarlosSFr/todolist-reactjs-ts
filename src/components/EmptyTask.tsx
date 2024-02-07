import { Clipboard } from '@phosphor-icons/react'
import styles from "./EmptyTask.module.css"

export default function EmptyTask(){
    return(
        <div className={styles.newTasks}>
            <Clipboard size={56}/>
            <p><strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer</p> 
        </div>
    );
}
