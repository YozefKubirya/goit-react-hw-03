import css from '../ContactList/ContactList.module.css'
import Contact from "./Contact"
export default function ContactList ({contacts,onDelete}){
   return <>
   <div className={css.div}>
<ul  className={css.ul}>
{ contacts.map((contact)=>(<li className={css.container} key={contact.id}>
<Contact data={contact} onDelete={onDelete}/>
</li>)
)}
</ul>

   </div>
   </>
}