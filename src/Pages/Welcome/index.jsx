import React from "react";
import WelcomeMenu from "../../Components/welcomeMenu/WelcomeMenu";
import styles from "./Welcome.module.css";

const WelcomePage = () => {
  return (
    <div className={styles.container}>
      <WelcomeMenu />
    </div>
  );
};

export default WelcomePage;
