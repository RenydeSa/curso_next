//import Head from "next/head";
//import Image from "next/image";
//import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/Navbar";

export default function Home(){
  return (
      <>
        <div>
          <Navbar />
        </div>

        <h1> Página Inicial </h1>
      </>
      
  );
}

