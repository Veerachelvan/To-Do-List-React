import React from 'react'
import { useRef } from 'react';


const AddItems = ({ addItems, setAddItems, handleAddItems }) => {

  const inputRef = useRef()

  return (
    <form className="addItems" onSubmit={handleAddItems}>
      <label htmlFor="AddItems">Add Items</label>
      <input
        type="text"
        ref={inputRef}
        placeholder='Add Items'
        required
        value={addItems}
        onChange={(e) => setAddItems(e.target.value)}
      />
      <button
        type='submit'
        onClick={() => inputRef.current.focus()}
      >+
      </button>
    </form>
  )
}

export default AddItems