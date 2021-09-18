import { useEffect, useState } from "react";
import { Api } from "../../services/api";
import styles from "./Troxa.module.scss";

export function Troxa() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    Api.GetTodo()
      .then((r) => r?.success && setSuccess(true))
      .catch((er) => console.log(er));
  }, []);

  return (
    <h1 className={styles.container}>
      O servidor está {success ? "Funcionando" : "uma bosta"}
    </h1>
  );
}
