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

import { useInput } from "../../../helpers";

const RegisterModal = ({ addUser, errors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const emailProps = useInput("", "email", "email");
  const nameProps = useInput("", "text", "name");
  const passwordProps = useInput("", "password", "password");

  return (
    <>
      <span onClick={() => setIsOpen(!isOpen)}>Register</span>
      <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <ModalHeader toggle={() => setIsOpen(!isOpen)}>Register</ModalHeader>
        <ModalBody>
          {errors ? <Alert color="danger">{errors.message}</Alert> : null}
          <Form>
            <FormGroup>
              <Label for={nameProps.id}>Name</Label>
              <Input {...nameProps} />
            </FormGroup>
            <FormGroup>
              <Label for={emailProps.id}>Email</Label>
              <Input {...emailProps} />
            </FormGroup>
            <FormGroup>
              <Label for={passwordProps.id}>Password</Label>
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
