import React from 'react'
import "bootswatch/dist/materia/bootstrap.min.css";
import Navbar from './components/Navbar'
import ContactsDataProvider from './context/ContactsData';
import Contacts from './components/Contacts'
import ContactsForm from  './components/ContactsFrom'
function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className='container mt-4'>
     <ContactsDataProvider>
     <ContactsForm/>
       <Contacts/>
     </ContactsDataProvider>
     </div>
    </div>
  );
}

export default App;
