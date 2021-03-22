import React,{useState,createContext} from 'react'

export const ContactsData=createContext()
const ContactsDataProvider=(props)=>{

    const [contacts,setContacts]= useState([
        {id:1,name:'Hasibul Hasan',email:'demo@gmail.com', phone:'00334455'},
        {id:3,name:'Hasibul Hasan',email:'demo@gmail.com',phone:'00334455'},
        {id:3,name:'Hasibul Hasan',email:'demo@gmail.com',phone:'00334455'}
    ])

    return(<>
    <ContactsData.Provider value={{users:contacts}}>
        {props.children}
    </ContactsData.Provider></>)
}

export default ContactsDataProvider
