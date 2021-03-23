import React,{useContext} from 'react'
import {ContactsData} from '../context/ContactsData'

const ContactsDetails=({user})=>{
   const {removeContact}= useContext(ContactsData)
    return(<>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>
            {/* <a href="#" className='btn btn-danger'>Delete</a> */}
            <button type='button' className='btn btn-danger' onClick={()=>{removeContact(user.id)}}>Delete</button>
        </td>
    </>)
}

export default ContactsDetails