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
  
  return savedContacts ? JSON.parse(savedContacts) : initialState
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
   
 return  (<>

    <div >
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact}/>
      <SearchBox filter={filter} onFilter={setFilter}/>
      <ContactList contacts={visibleContacts} onDelete={deleteContact}/>
    </div>
      
  
    </>)}
  
  

export default App
