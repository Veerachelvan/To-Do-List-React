import React from 'react'
import { TbTrashXFilled } from "react-icons/tb";

const LineItems = ({item, handleCheck, handleDelete}) => {
    return (
        <>
        <li className="items" key={item.id}>
            <div className="item">
                <input
                    type="checkbox"
                    onChange={() => handleCheck(item.id)}
                    checked={item.checked}
                    />
                <label onDoubleClick={() => handleCheck(item.id)} style={(item.checked) ? { textDecoration: "line-through" } : null}>{item.task}</label>
            </div>
            <TbTrashXFilled className='on'
            role="button"
            onClick={() => handleDelete(item.id)}
            tabIndex="0"
            />
        </li>
        <hr />
        </>
    )
}

export default LineItems