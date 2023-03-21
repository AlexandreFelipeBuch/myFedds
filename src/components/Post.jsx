import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/AlexandreFelipeBuch.png" />
          <div className={styles.authorInfo}>
            <strong>Felipe Buch</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time
          title="11 de Fevereiro de 2023 ás 08:13:39"
          dateTime="2023-02-11 08 08:13:39"
        >
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifolio. É um projeto que
          fiz esta semana. O nome do projeto é MyFeed 🚀.
        </p>
        <p>
          <a> felipe.design/myfeed</a>
        </p>
        <p>
          <a> #novoprojeto</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
