import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ImSearch, ImRedo2 } from "react-icons/im";
import { useDispatch } from "react-redux";
import { search } from "../redux/features/cryptoDataSlice";
export default function Search() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    dispatch(search(searchText));
    setSearchText("");
  };
  return (
    <Form onSubmit={submit}>
      <InputGroup className="search">
        <Form.Control
          className="input"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="search"
          aria-label="search"
          type="text"
        />
        <Button variant="dark" type="submit">
          <ImSearch />
        </Button>
        <Button
          onClick={() => dispatch(search(""))}
          variant="outline-dark"
          type="button"
        >
          Clear Search
        </Button>
      </InputGroup>
    </Form>
  );
}
