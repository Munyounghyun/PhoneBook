import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import SearchBox from "./SearchBox";
import { useSelector } from "react-redux";

const SearchForm = () => {
  const { contact, keyword } = useSelector((state) => state);
  let [filterList, setFilterList] = useState([]);

  console.log(contact);
  useEffect(() => {
    if (keyword == "") {
      setFilterList(contact);
    } else {
      let list = contact.filter((item) => item.name.includes(keyword));
      setFilterList(list);
    }
  }, [keyword]);

  return (
    <div>
      <SearchBox />
      {filterList?.length !== 0 ? (
        <p className="total">num : {filterList.length}</p>
      ) : (
        ""
      )}
      <div>
        {filterList?.map((item) => (
          <ContactCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchForm;
