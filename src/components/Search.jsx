import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Search() {
  return (
    <Form.Control
      className="search"
      placeholder="search"
      aria-label="search"
      type="text"
      aria-describedby="basic-addon2"
    />
  );
}
