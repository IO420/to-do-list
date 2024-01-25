import Image from "next/image";
import styles from "./page.module.css";
import Layout from "@/components/Layout/Layout";
import ContenedorLista from "@/components/Lista/ContenedorLista/ContenedorLista";


export default function Home() {
  return (
    <Layout>
      <div className="container d-flex flex-column align-items-center">
        <h1 className="my-5">To Do List</h1>
        <ContenedorLista/>
      </div>
    </Layout>
  );
}
