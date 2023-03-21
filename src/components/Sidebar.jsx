import styles from "./Sidebar.module.css";
import myCover from "../assets/capa.jpg";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={myCover} />
      <div className={styles.profile}>
        <Avatar src="https://github.com/AlexandreFelipeBuch.png" />
        <strong>Felipe Buch</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="www.google.com">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
