import { useState } from "react";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/SideBar";

const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/AlexandreFelipeBuch.png",
      name: "Alexandre Felipe",
      role: "Desenvolvedor Mobile",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz esta semana. O nome do projeto é MyFeed 🚀.",
      },
      {
        type: "link",
        content: "felipe.design/myfeed",
      },
    ],
    publishedAt: new Date("2023-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/jdxcode.png",
      name: "Jeff Dickey",
      role: "Desenvolvedor",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz esta semana. O nome do projeto é MyFeed 🚀.",
      },
      {
        type: "link",
        content: "felipe.design/myfeed",
      },
    ],
    publishedAt: new Date("2023-01-03 20:00:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/hwchase17.png",
      name: "Harrison Chase",
      role: "Desenvolvedor",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz esta semana. O nome do projeto é MyFeed 🚀.",
      },
      {
        type: "link",
        content: "felipe.design/myfeed",
      },
    ],
    publishedAt: new Date("2023-01-03 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
