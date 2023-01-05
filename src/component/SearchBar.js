
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const SearchBar = ()=>{
    return(
        <>
        <form className='search-bar shadow rounded overflow-hidden'>
          <label>
            <input type='search' placeholder='Search...'/>
            <div className='bg-warning h-100 px-3 text-center search-btn'>
            <img src="./search.png" aria-hidden="true" className="text-light d-block" style={{width:"100%",objectFit:"contain",height:"40px"}} />
            </div>
          </label>
         </form>
        </>
    )
}

