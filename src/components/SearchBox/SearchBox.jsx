import css from '../SearchBox/SearchBox.module.css'
export default function SearchBox({filter,onFilter}){
   const handleFilter=(e)=>{
onFilter(e.target.value)
   }
   return<>
   <div>
      <p className={css.text}>Find contact by name</p>
      <input className={css.input} type="text" name="text" value={filter} onChange={handleFilter}/>
   </div>
   </>
}