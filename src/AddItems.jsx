import React from 'react'

const AddItems = ({addItems, setAddItems, handleAddItems}) => {
  return (
    <form onSubmit={handleAddItems}> 
        <label htmlFor="AddItems">Add Items</label>
        <input 
        type="text" 
        placeholder='Add Items'
        required
        value={addItems}
        onChange={(e)=>setAddItems(e.target.value)}
        />
        <button
        type='submit'
        >+
        </button>
    </form>
  )
}

export default AddItems