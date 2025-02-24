/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBar = ({data}) => {

  const navigate = useNavigate()
  const [input,setInput] = useState( data ? data : '')

  const onSearchHandler = (e) => {
    e.preventDefault()
    navigate('/course-list/' + input)
  }
  return (
    <div className="d-flex justify-content-center mt-3">
      <form className="input-group" onSubmit={onSearchHandler} style={{ maxWidth: "500px", width: "100%" }}>
        <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
        />
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchBar