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

const LoginModal = ({ login, errors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const emailProps = useInput("", "email", "email");
  const passwordProps = useInput("", "password", "password");

  return (
    <>
      <span onClick={() => setIsOpen(!isOpen)}>Login</span>
      <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <ModalHeader toggle={() => setIsOpen(!isOpen)}>Login</ModalHeader>
        <ModalBody>
          {errors ? <Alert color="danger">{errors.message}</Alert> : null}
          <Form>
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
            onClick={() => login(emailProps.value, passwordProps.value)}
          >
            Login
          </Button>
          <Button color="secondary" onClick={() => setIsOpen(!isOpen)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default LoginModal;
