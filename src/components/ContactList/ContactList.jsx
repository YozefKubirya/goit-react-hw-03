import css from '../ContactList/ContactList.module.css'
import Contact from "./Contact"
export default function ContactList ({contacts,onDelete}){
   return <>
   <div >
<ul className={css.ul}>
{contacts.map((contact)=>(<li key={contact.id}>
<Contact data={contact} onDelete={onDelete}/>
</li>)
)}
</ul>

   </div>
   </>
}