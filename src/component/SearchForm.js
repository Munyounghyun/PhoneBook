import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import SearchBox from "./SearchBox";
import { useSelector } from "react-redux";

const SearchForm = () => {
  const { contactList, keyword } = useSelector((state) => state);
  let [filterList, setFilterList] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      let list = contactList.filter((item) => item.name.includes(keyword));
      setFilterList(list);
    } else {
      setFilterList(contactList);
    }
  }, [keyword]);

  return (
    <div>
      <SearchBox />
      <p className="total">num : {filterList?.length}</p>
      <div>
        {filterList?.map((item) => (
          <ContactCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchForm;
