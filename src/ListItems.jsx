import React from 'react'
import LineItems from './LineItems'

const ListItems = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul className='unlist'>
            {items.map(
                item => (
                    <LineItems
                        item={item}
                        key={item.id}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                    />
                )
            )}
        </ul>
    )
}

export default ListItems