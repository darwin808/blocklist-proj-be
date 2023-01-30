"use client";

import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import React from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

const URL = "http://localhost:3000/api/";

export default function Home() {
  const getReq = async () => {
    await axios
      .post(URL, {
        test: 123123,
      })
      .then((e) => {
        console.log(e);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  // React.useEffect(() => {
  //   getReq();
  // }, []);

  return <main className={styles.main}>darwin</main>;
}
