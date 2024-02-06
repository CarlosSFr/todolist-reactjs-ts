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
      <form className={styles.addTask}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit"> Criar <PlusCircle size={20} /> </button>
      </form>
    </div>
  );
}

export default Header;