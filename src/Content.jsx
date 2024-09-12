import React from "react";
import ListItems from "./ListItems";
const Content = ({items, handleCheck, handleDelete}) => {

    

    return (
        <main className="main">
            {(items.length) ? (
                    <ListItems 
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete} />
                ) : (<p>Your List Is Empty</p>)}
        </main>
    )
}

export default Content;