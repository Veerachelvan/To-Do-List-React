import React from 'react'


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
    
            
        </form>
    )
}

export default SearchItems