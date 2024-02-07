import styles from "./NewTask.module.css"
import { Trash } from "@phosphor-icons/react"

function NewTask(){

    

    return (
        <div className={styles.newTaskWrapper}>
            <div className={styles.divSelectorBtn}>
                <button className={styles.selectorButton}></button>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dicta delectus totam itaque excepturi porro animi reiciendis quis.</p>
            <button className={styles.trashButton}><Trash size={20}/></button>
        </div>

    );

}

export default NewTask;