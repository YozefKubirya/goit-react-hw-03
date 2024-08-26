import { Formik ,Field,Form,ErrorMessage} from "formik";
import css from '../ContactForm/ContactForm.module.css'
import { nanoid } from "nanoid";
import { useId } from "react";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
   name:Yup.string().min(3,'Too short').max(50,'Too long').required('Required!'),
   number:Yup.string().min(3,'Too short').max(50,'Too long').required('Required!')
});

export default function ContactForm ({onAdd}){
const nameId=useId();
const numberId=useId();
const handleSubmit=(values,actions)=>{
console.log(values);
onAdd({
id:nanoid(),
...values,
})
actions.resetForm();
   }
   return <>
   <Formik initialValues={{
name:"",
number:"",
   }} onSubmit={handleSubmit}
   validationSchema={FeedbackSchema}>
<Form className={css.form}> 
<label className={css.text} htmlFor={nameId}>Name</label>
<Field type="text" className={css.input} name="name" id={nameId}/>
<ErrorMessage className={css.error} name="name" component="span" />

<label className={css.text} htmlFor={numberId}>Number</label>
<Field type="text" className={css.input} name="number" id={numberId}/>
<ErrorMessage className={css.error} name="number" component="span" />

<button className={css.button} type="submit">Add Contact</button>
</Form>
     
   </Formik>
   </>
}