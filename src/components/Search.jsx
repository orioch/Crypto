import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ImSearch } from "react-icons/im";

export default function Search() {
  return (
    <InputGroup className="search">
      <Form.Control placeholder="search" aria-label="search" type="text" />
      <Button>
        <ImSearch />
      </Button>
    </InputGroup>
  );
}
