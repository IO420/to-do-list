import React from "react";
import { item } from "../ContenedorLista/ContenedorLista";

interface ItemListaProps {
  item: item;
  onDeleteItem: (id: number) => void;
  onChecked: (id: number) => void;
}

export default function ItemLista({ item, onDeleteItem,
    onChecked }: ItemListaProps) {
  return (

        <li className="d-flex justify-content-between " 
            style={{ 
            minWidth: "300px", 
            maxWidth: "400px", 
            cursor: "pointer" 
        }}
        >
            <div
                className="p-3 rounded w-100"
                style={{
                border: "1px solid #cecece",
                borderLeft: `10px solid ${item.color}`
            }}
            >
                <h5 className="m-0 ">{item.titulo}</h5>
            </div>
            <div className="d-flex align-items-center ">
                <input
                    className="ms-3 form-check-input fs-3"
                    type="checkbox"
                    checked={item.hecho}
                    onChange={() => onChecked(item.id)}
                />
                <button type="button" className="btn btn-danger ms-3" onClick={() => onDeleteItem(item.id)}>
                    Borrar
                </button>
            </div>
        </li>

  );
}