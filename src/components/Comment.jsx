import styles from "./Comment.module.css";
import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/AlexandreFelipeBuch.png"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Felipe Buch</strong>
              <time
                title="11 de Fevereiro de 2023 ás 08:13:39"
                dateTime="2023-02-11 08 08:13:39"
              >
                Publicado há 1h
              </time>
            </div>
            <button title="deletar comentario">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bem Parabens</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
