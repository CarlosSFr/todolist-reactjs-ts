import styles from "./NewTask.module.css"
import { Trash } from "@phosphor-icons/react"

interface contentProps{
    content: string;
}

function NewTask({ content }:contentProps){

    function handleDeleteTask(){

        
    }

    return (
        <div className={styles.newTaskWrapper}>
            <div className={styles.divSelectorBtn}>
                <button className={styles.selectorButton}></button>
            </div>
            <p>{content}</p>
            <button onClick={handleDeleteTask} className={styles.trashButton}><Trash size={20}/></button>
        </div>

    );

}

export default NewTask;