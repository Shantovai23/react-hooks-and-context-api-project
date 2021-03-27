import React,{createContext,useReducer} from 'react'
import {ContactReducer} from '../Reducer/ContactReducer'
export const ContactsData=createContext()
const ContactsDataProvider=(props)=>{
   const [contacts,dispatch]= useReducer(ContactReducer,[
        {id:1,name:'Hasibul Hasan',email:'demo@gmail.com', phone:'00334455'},
        {id:2,name:'jackson',email:'jacky@gmail.com',phone:'00685463'},
        {id:3,name:'Anderson',email:'ander@gmail.com',phone:'0923856'}
    ])
    return(<>
    <ContactsData.Provider value={{users:contacts,dispatch}}>
        {props.children}
    </ContactsData.Provider></>)
}
export default ContactsDataProvider
