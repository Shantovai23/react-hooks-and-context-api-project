import React,{useState,createContext} from 'react'

export const ContactsData=createContext()
const ContactsDataProvider=(props)=>{

    const [contacts,setContacts]= useState([
        {id:1,name:'Hasibul Hasan',email:'demo@gmail.com', phone:'00334455'},
        {id:2,name:'jackson',email:'jacky@gmail.com',phone:'00685463'},
        {id:3,name:'Anderson',email:'ander@gmail.com',phone:'0923856'}
    ])

   const  addContact=contact=>{
       //inputk value empty hole new unnecessary row asbena
       if(contact.name==='' || contact.email==='' || contact.phone===''){
           return false
       }

       //puraton arrayr sathe notun contact send korsi
       setContacts([...contacts,contact])
   }
   
    //click kora idr sathe jegula milsena segula return korse
    const removeContact=(id)=>{
        const filtered=contacts.filter(contact=>contact.id!==id )
        setContacts(filtered)
    }


    return(<>
    <ContactsData.Provider value={{users:contacts,addContact,removeContact}}>
        {props.children}
    </ContactsData.Provider></>)
}

export default ContactsDataProvider
