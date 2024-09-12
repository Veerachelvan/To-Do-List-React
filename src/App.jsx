import { useState } from 'react'
import './App.css'
import Header from './Header';
import AddItems from './AddItems';
import SearchItems from './SearchItems';
import Content from './Content'
import Footer from './Footer';

  //Hai this is Tamilselvan here

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('to-do list'))||[]);

  const [addItems, setAddItems] = useState('')

  const [search, setSearch] = useState('')

  const newItems = (task) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const addItems ={ id, checked: false, task } 
    const newList = [...items, addItems]
    setItems(newList)
    handleStore(newList)
  }

  const handleCheck = (id) => {
    const newList = items.map(
      (item) => item.id == id ? { ...item, checked: !item.checked } : item
    )
    setItems(newList)
    handleStore(newList)
  }

  const handleDelete = (id) => {
    const newList = items.filter((item) => item.id !== id)
    setItems(newList)
    handleStore(newList)

  }

  const handleAddItems = (e) => {
    e.preventDefault()
    if (!addItems) return;
    newItems(addItems)
    console.log(addItems)
    setAddItems('')
  }

  const handleStore = (newList) => {
    localStorage.setItem('to-do list',JSON.stringify(newList))
  }

  return (
    <>
      <Header />
      <AddItems
        addItems={addItems}
        setAddItems={setAddItems}
        handleAddItems={handleAddItems}
      />
      <SearchItems 
      search={search}
      setSearch={setSearch}
      />
      <Content
        items={items.filter((task)=> ((task.task).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </>
  )
}

export default App
