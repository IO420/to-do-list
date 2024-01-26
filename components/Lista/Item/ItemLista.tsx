import React, { Dispatch, SetStateAction, useState } from "react";
import { item } from "../ContenedorLista/ContenedorLista";

interface ItemListaProps {
  item: item;
  onDeleteItem: (id: number) => void;
  onChecked: (item: item) => void;
}

export default function ItemLista({
  item,
  onDeleteItem,
  onChecked,
}: ItemListaProps) {
  const [isShowDescription, setIsShowDescription] = useState<boolean>(false);

  return (
    <li
      className="d-flex justify-content-between "
      style={{ minWidth: "300px", maxWidth: "400px", cursor: "pointer" }}
    >
      <div
        className="p-3 rounded w-100"
        style={{
          border: "1px solid #cecece",
          borderLeft: `10px solid ${item.color}`,
        }}
        onClick={() => setIsShowDescription(!isShowDescription)}
      >
        <h5 className="m-0 ">{item.titulo}</h5>
        {isShowDescription && <p className="m-0">{item.descripcion}</p>}
      </div>
      <div className="d-flex align-items-center ">
        <input
          className="ms-3 form-check-input fs-3"
          type="checkbox"
          checked={item.hecho}
          onChange={() => onChecked({ ...item, hecho: !item.hecho })}
        />
        <button
          type="button"
          className="btn btn-danger ms-3"
          onClick={() => onDeleteItem(item.id)}
        >
          Borrar
        </button>
      </div>
    </li>
  );
}