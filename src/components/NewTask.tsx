import styles from "./NewTask.module.css"
import { Trash, Check } from "@phosphor-icons/react"
import { useState } from "react";

interface contentProps{
    content: string;
    onDelete: (taskToDelete :string) => void;
    onTaskChecked: (isChecked: boolean) => void;
}

function NewTask({ content, onDelete, onTaskChecked }:contentProps){

    function handleDeletingTask(){
        onDelete(content);
    }

    const [checked, setChecked] = useState(false);

    function handleSelectorBtn() {
        setChecked(!checked);
        onTaskChecked(!checked);
    }

    return (
        <div className={styles.newTaskWrapper}>
            <div className={styles.divSelectorBtn}>
                <button 
                className={checked? styles.selectorButtonChecked : styles.selectorButton} 
                onClick={handleSelectorBtn}>
                    <Check size={12}/>
                </button>
            </div>
            <p className={checked? styles.checked : styles.notChecked}>{content}</p>
            <button onClick={handleDeletingTask} className={styles.trashButton}><Trash size={20}/></button>
        </div>

    );

}

export default NewTask;