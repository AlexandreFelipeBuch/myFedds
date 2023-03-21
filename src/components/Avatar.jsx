import styles from "./Avatar.module.css";
import myLogo from "../assets/logo.png";

export function Avatar({ hasBorder = true, src }) {
  return (
    <img
      className={hasBorder ? styles.avatarWhithBorder : styles.avatar}
      src={src}
    />
  );
}
