import type { NextPage } from "next";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [server, setserver] = useState(false);
  useEffect(() => {
    axios.get(`${process.env.API_URL}/todo`).then((r) => {
      if (r?.data?.success) {
        setserver(true);
      }
    });
  }, []);
  return (
    <div className={styles.container}>
      <h1>O servidor está {server ? "Funcionando" : "Uma merda"}</h1>
    </div>
  );
};

export default Home;
