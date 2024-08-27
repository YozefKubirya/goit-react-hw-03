import { FaPhoneAlt } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import css from '../ContactList/ContactList.module.css'
export default function Contact ({data:{name,number,id},onDelete}){
const handleDeleteChange=()=>{
onDelete(id);
   }
   return<>
   <div className={css.contacts}>
      <p><IoMdContact/> {name}</p>
      <p><FaPhoneAlt/> {number}</p>
      <button type="button" onClick={handleDeleteChange}>Delete</button>
   </div>
   </>
}