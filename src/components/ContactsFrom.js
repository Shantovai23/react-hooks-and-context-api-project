import React, { useContext } from "react";
import InputHook from "../Hooks/InputHook";
import { ContactsData } from "../context/ContactsData";
import { v4 as uuidv4 } from "uuid";

const ContactForm = () => {
  const { dispatch } = useContext(ContactsData);
  const [name, setName, resetName] = InputHook("");
  const [email, setEmail, resetEmail] = InputHook("");
  const [phone, setPhone, resetPhone] = InputHook("");

  const addNewContact = (e) => {
    e.preventDefault();

    // dispatch({type:'ADD_CONTACT',
    // newContact:{id:uuidv4(), name:name,email:email,phone:phone}})

    // avoiding empty contact
    if (name !== "" || email !== "" || phone !== "") {
      dispatch({
        type: "ADD_CONTACT",
        newContact: { id: uuidv4(), name: name, email: email, phone: phone },
      });
    }

    resetEmail();
    resetName();
    resetPhone();
  };
  return (
    <form onSubmit={addNewContact}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="form-control"
          value={name}
          onChange={setName}
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          placeholder="email"
          name="email"
          className="form-control"
          value={email}
          onChange={setEmail}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          className="form-control"
          value={phone}
          onChange={setPhone}
        />
      </div>

      <div className="form-group">
        <input type="submit" className="btn btn-info mt-2 mb-4" />
      </div>
    </form>
  );
};

export default ContactForm;
