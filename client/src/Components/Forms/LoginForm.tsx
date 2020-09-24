import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

const SignUpForm = () => {
  return (
    <Form>
      <Form.Field>
        <label>Email</label>
        <input />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input />
      </Form.Field>

      <Button type="submit" primary>
        Login
      </Button>
    </Form>
  );
};

export default SignUpForm;
