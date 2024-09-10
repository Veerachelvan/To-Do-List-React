import React from 'react'
import { FaSearch } from 'react-icons/fa'


const SearchItems = ({ search, setSearch }) => {

    return (
        <form className='searchItems' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="searchBoc">Search Items</label>
            <input
            type="text"
            placeholder='Search items'
            role='serachbox'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <button
            type='submit'
            ><FaSearch />
            </button>
            
        </form>
    )
}

export default SearchItems