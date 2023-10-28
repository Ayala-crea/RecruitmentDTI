import React from "react";
import {
  Container,
  FormGroup,
  Label,
  Input,
  Form,
  Button,
} from "reactstrap";

export default function FormComponents() {
  return (
    <Container>
      <div>
        <Form>
          <FormGroup>
            <label for="exampleEmail">Email</label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="with a placeholder"
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="password placeholder"
              type="password"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input id="exampleSelect" name="select" type="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    </Container>
  );
}
