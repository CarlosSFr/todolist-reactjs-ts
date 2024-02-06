import { Clipboard } from '@phosphor-icons/react';
import styles from './Tasks.module.css';

function Tasks() {
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
            <div className={styles.newTasks}>
                <Clipboard size={56}/>
                <p><strong>Você ainda não tem tarefas cadastradas</strong>
                Crie tarefas e organize seus itens a fazer</p>
            </div>
            
        </div>
    </div>
  );
}

export default Tasks;