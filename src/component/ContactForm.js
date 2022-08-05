import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNumber },
      //ES6문법 payload: { name=name, phoneNumber=phoneNumber },
    });
    setName("");
    setPhoneNumber();
  };

  return (
    <form onSubmit={addContact} className="contactform">
      <h4>이름</h4>
      <input
        className="phone_input"
        placeholder="이름을 입력해주세요."
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <h4>전화번호</h4>
      <input
        className="phone_input"
        placeholder="전화번호를 입력해주세요."
        onChange={(event) => setPhoneNumber(event.target.value)}
        value={phoneNumber}
      />
      <button className="contact_btn" type="submit">
        추가
      </button>
    </form>
  );
};

export default ContactForm;
