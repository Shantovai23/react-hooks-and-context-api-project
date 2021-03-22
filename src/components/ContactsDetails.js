import React from 'react'

const ContactsDetails=({user})=>{
    return(<>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>
            <a href="#" className='btn btn-danger'>Delete</a>
        </td>
    </>)
}

export default ContactsDetails