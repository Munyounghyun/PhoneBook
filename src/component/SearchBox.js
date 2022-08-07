import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  const searchName = (event) => {
    event.preventDefault();
    dispatch({
      type: "SEARCH_NAME",
      payload: { keyword },
    });
  };

  return (
    <form onSubmit={searchName}>
      <input
        className="phone_input search_input"
        placeholder="이름"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button className="contact_btn" type="submit">
        검색
      </button>
    </form>
  );
};

export default SearchBox;
