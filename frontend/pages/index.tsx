import type { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";

type HomeProps = {
  response: any;
};

export default function Home({ response }: HomeProps) {
  const [server, setserver] = useState(false);
  useEffect(() => {
    axios
      .get(`${process.env.API_URL}/todo`)
      .then((r) => {
        if (r?.data?.success) {
          setserver(true);
        }
      })
      .catch((er) => console.log(er));
  }, []);
  return (
    <div className={styles.container}>
      <h1>Acesso via cliente {server ? "Funcionando" : "Uma merda"}</h1>
      <h1>Acesso via servidor {response ? "Funcionando" : "Uma merda"}</h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async function () {
  const data = await axios.get(`${process.env.API_URL}/todo`);
  const response = data.data;
  return {
    props: {
      response,
    },
  };
};
