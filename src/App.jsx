import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import initialState from '../src/contact'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import ContactForm from './components/ContactForm/ContactForm'
function App() {

const [contacts,setContacts]=useState(()=>{
  const savedContacts=window.localStorage.getItem('contacts');
  if(savedContacts!==null){
   return JSON.parse(savedContacts)
  }
  return initialState;
}
)
const [filter,setFilter]=useState('');

useEffect(()=>{
  window.localStorage.setItem('contacts',JSON.stringify(contacts))
},[contacts])
const addContact=(newContact)=>{
  setContacts((prevContact)=>{
return [...prevContact,newContact]
  })
}
const deleteContact=(contactId)=>{
  setContacts((prevContact)=>{
    return prevContact.filter((contact)=>{
return contact.id !== contactId}
    )
  })
}
const visibleContacts=contacts.filter((contact)=>{
  return contact.name.toLowerCase().includes(filter.toLowerCase())
}
)
  return (
    <>

    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact}/>
      <SearchBox filter={filter} onFilter={setFilter}/>
      <ContactList contacts={visibleContacts} onDelete={deleteContact}/>
    </div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
  
    </>
  )
}

export default App
