import React from 'react'
import "bootswatch/dist/materia/bootstrap.min.css";
import Navbar from './components/Navbar'
import ContactsDataProvider from './context/ContactsData';
import Contacts from './components/Contacts'
function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className='container'>
     <ContactsDataProvider>
       <Contacts/>
     </ContactsDataProvider>
     </div>
    </div>
  );
}

export default App;
