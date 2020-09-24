import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

const SignUpForm = () => {
  return (
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input />
      </Form.Field>
      <Form.Field>
        <label>Confirm Password</label>
        <input />
      </Form.Field>
      <Form.Field>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Button type="submit" primary>
        Sign Up
      </Button>
    </Form>
  );
};

export default SignUpForm;
