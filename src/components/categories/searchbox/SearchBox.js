import React from "react";
import { FaSearch } from "react-icons/fa";
import "./searchbox.css";
import { CartState } from "../../../context/Context";

const SearchBox = () => {
  const {
    productDispatch,
    productState: { searchQuery },
  } = CartState();

  return (
    <div className="d-flex justify-content-center align-items-center mb-5">
      <form
        className="form-search"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <button type="submit" className="border-0 bg-transparent">
          <FaSearch className="fs-5 text-secondary" />
        </button>
        <input
          type="text"
          placeholder="Buscar Productos..."
          onChange={(e) => {
            productDispatch({
              type: "FILTER_BY_SEARCH",
              payload: e.target.value,
            });
          }}
          value={searchQuery}
        />
      </form>
    </div>
  );
};

export default SearchBox;
