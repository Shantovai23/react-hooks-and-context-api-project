import React,{useContext} from 'react'
import {ContactsData} from '../context/ContactsData'
import ContactsDetails from '../components/ContactsDetails'

const Contacts=()=>{
    const {users}=useContext(ContactsData)
    console.log(users)

    return(<>
       { users.length ? 
           <table className='table'>
               <thead>
                   <tr>
                       <td>Name</td>
                       <td>Email</td>
                       <td>Phone</td>
                       <td>Delete</td>
                   </tr>
               </thead>
               <tbody>
                   {users.map((user)=>(
                       <tr>
                       <ContactsDetails user={user}/>
                       </tr>
                   ))}
               </tbody>
           </table>
        : (<h1>No Data Found</h1>)}
    </>)
}

export default Contacts