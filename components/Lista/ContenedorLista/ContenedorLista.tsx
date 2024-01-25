"use client"
import React, { useEffect, useState } from "react";
import ItemLista from "../Item/ItemLista";
import style from "@/styles/lista.module.css";
import Formulario from "../Formulario/Formulario";

export interface item {
  id: number;
  titulo: string;
  descripcion: string;
  color: string;
  hecho: boolean;
}

const listaArray: item[] = [
  {
    id: 1,
    titulo: "Titulo",
    descripcion: "Descripcion",
    color: "green",
    hecho: true,
  },

];

export default function () {

  const [lista, setLista] = useState<item[]>(listaArray);
  const [newItem, setNewItem] = useState<item>({
    color: "#000000",
    descripcion: "",
    hecho: false,
    id: -1,
    titulo: "",
  });

  const [isShowForm, setIsShowForm] = useState<boolean>(false);

  const handleShowForm = (): void => {
    setIsShowForm(!isShowForm);
    setNewItem({
      color: "#000000",
      descripcion: "",
      hecho: false,
      id: -1,
      titulo: "",
    });
  };

  const handleAddNewItem = (item: item) => {
    setLista([...lista, item]);
  };

  const handleDeleteItem = (id: number) => {
    console.log(id);
    setLista(lista.filter((item) => item.id !== id));
  };

  const handleOnChecked = (id: number) => {
    console.log(id);
  };

  return (
    <>
      <div className="shadow-sm  bg-white rounded p-3">
        {isShowForm ? (
      <Formulario
            lista={lista}
            newItem={newItem}
            setNewItem={setNewItem}
            handleShowForm={handleShowForm}
            handleAddNewItem={handleAddNewItem}
      />
        ):(
      <ul className={`list-unstyled m-0 d-flex flex-column ${style.lista}`}>
          {lista ? (
              lista.length > 0 ? (
                lista.map((item, index) => (
                  <ItemLista
                    item={item}
                    key={index}
                    onDeleteItem={handleDeleteItem}
                    onChecked={handleOnChecked}
                  />
          ))
          ):(
            <>La lista está vacia</>
              )
            ) : (
              <>Lista is undefined</>
          )}
        </ul>
      )}
      </div>
      {isShowForm ? (
        <></>
      ) : (
        <button
          type="button"
          className="shadow-sm bg-white rounded mt-3 p-3  border-0 mb-5"
          onClick={handleShowForm}
        >
          Crear item
        </button>
      )}
      <button
        type="button"
        className="shadow-sm bg-white rounded mt-3 p-3  border-0 mb-5"
        onClick={() => console.log(lista)}
      >
        Imprimir lista
      </button>
    </>
  );
}