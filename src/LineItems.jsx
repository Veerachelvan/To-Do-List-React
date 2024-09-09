import React from 'react'
import { TbTrashXFilled } from "react-icons/tb";

const LineItems = ({item, handleCheck, handleDelete}) => {
    return (
        <li className="items" key={item.id}>
        <input
            type="checkbox"
            onChange={() => handleCheck(item.id)}
            checked={item.checked}
        />
        <label onDoubleClick={() => handleCheck(item.id)} style={(item.checked) ? { textDecoration: "line-through" } : null}>{item.task}</label>
        <TbTrashXFilled
            role="button"
            onClick={() => handleDelete(item.id)}
            tabIndex="0"
        />
    </li>
    )
}

export default LineItems