import styles from './Header.module.css';
import logoHeader from '../assets/logoHeader.svg';
import { PlusCircle } from "@phosphor-icons/react";

function Header() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img src={logoHeader} alt="Logo" />
        <div className={styles.logoWrapper}>
          <h1 className={styles.logoOne}>to</h1>
          <h1 className={styles.logoTwo}>do</h1>
        </div>
      </header>
      <div className={styles.addTask}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button> Criar <PlusCircle size={20} /> </button>
      </div>
    </div>
  );
}

export default Header;