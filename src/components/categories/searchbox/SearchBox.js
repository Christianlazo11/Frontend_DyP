import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchbox.css";

const SearchBox = () => {
  const [value, setValue] = useState("");

  return (
    <div className="d-flex justify-content-center align-items-center mb-5">
      <form
        className="form-search"
        onSubmit={(e) => {
          e.preventDefault();
          setValue("");
        }}
      >
        <button type="submit" className="border-0 bg-transparent">
          <FaSearch className="fs-5 text-secondary" />
        </button>
        <input
          type="text"
          placeholder="Buscar Productos..."
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
      </form>
    </div>
  );
};

export default SearchBox;
