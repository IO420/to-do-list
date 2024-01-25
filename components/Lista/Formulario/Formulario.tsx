import React, { ChangeEvent, Dispatch, FormEvent, useEffect } from "react";

import { item } from "../ContenedorLista/ContenedorLista";

interface FormularioProps {
  lista: item[];
  newItem: item;
  setNewItem: Dispatch<React.SetStateAction<item>>;
  handleShowForm: () => void;
  handleAddNewItem: (item: item) => void;
}

export default function Formulario({
  newItem,
  setNewItem,
  lista,
  handleShowForm,
  handleAddNewItem,
}: FormularioProps) {
  useEffect(() => {
    const handleNewID = () => {
      let lastId = 0;

      console.log("Longitud de lista: ", lista.length);

      if (lista.length > 0) {
        console.log("Ultimo item de lista: ", lista[lista.length - 1].id);
        lastId = lista[lista.length - 1].id;
      }

      console.log("Nuevo id", lastId + 1);

      setNewItem({ ...newItem, id: lastId + 1 });
    };

    handleNewID();
  }, []);

  const handleOnChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value, id } = event.target;
    setNewItem({ ...newItem, [id]: value });
  };

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleAddNewItem(newItem);
    handleShowForm();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Titulo de la tarea
        </label>
        <input
          type="text"
          className="form-control"
          id="titulo"
          placeholder= "Titulo de la tarea"
          required
          minLength={5}
          maxLength={30}
          onChange={handleOnChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Descripcion
        </label>
        <textarea
          className="form-control"
          id="descripcion"
          placeholder= "descripcion"
          required
          rows={3}
          maxLength={50}
          onChange={handleOnChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleColorInput" className="form-label">
          Color de la tarea
        </label>
        <input
          type="color"
          id="color"
          className="form-control form-control-color w-100"
          value={newItem.color}
          onChange={handleOnChange}
        ></input>
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Submit
      </button>
    </form>
  );
}