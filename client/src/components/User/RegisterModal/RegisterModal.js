import React, { useState } from "react";
import {
  Alert,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const useInput = (initialValue, type) => {
  const [value, setValue] = useState(initialValue);
  return {
    type,
    value,
    onChange: e => setValue(e.target.value)
  };
};
const RegisterModal = ({ addUser, errors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const emailProps = useInput("", "email");
  const nameProps = useInput("", "text");
  const passwordProps = useInput("", "password");

  return (
    <>
      <span onClick={() => setIsOpen(!isOpen)}>Register</span>
      <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <ModalHeader toggle={() => setIsOpen(!isOpen)}>Register</ModalHeader>
        <ModalBody>
          {errors ? <Alert color="danger">{errors.message}</Alert> : null}
          <Form>
            <FormGroup>
              <Label for="email">Name</Label>
              <Input {...emailProps} />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input {...nameProps} />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input {...passwordProps} />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() =>
              addUser(nameProps.value, emailProps.value, passwordProps.value)
            }
          >
            Register
          </Button>
          <Button color="secondary" onClick={() => setIsOpen(!isOpen)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default RegisterModal;
