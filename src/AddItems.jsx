import React from 'react'
import { useRef } from 'react'
import { GrAddCircle } from 'react-icons/gr'


const AddItems = ({addItems, setAddItems, handleAddItems}) => {
  const inputRef=useRef()
  return (
    <form className="addItems" onSubmit={handleAddItems}> 
        <label htmlFor="AddItems">Add Items</label>
        <input 
        type="text" 
        placeholder='Add Items'
        required
        ref={inputRef}
        value={addItems}
        onChange={(e)=>setAddItems(e.target.value)}
        />
        <button
        type='submit'
        onClick={()=>inputRef.current.focus()}
        ><GrAddCircle />
        </button>
    </form>
  )
}

export default AddItems