import { Button, Form, Icon, Message, Segment } from 'semantic-ui-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import catchErrors from '../utils/catchErrors';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import { handleLogin } from '../utils/auth';

const INITIAL_USER = {
  email: '',
  password: '',
};

function Login() {
  const [user, setUser] = useState(INITIAL_USER);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');
      const url = `${baseUrl}/api/login`;
      const payload = { ...user };
      const response = await axios.post(url, payload);
      handleLogin(response.data);
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setDisabled(!Object.values(user).every(Boolean));
  }, [user]);
  return (
    <>
      <Message
        attached
        icon='privacy'
        header='Welcome Back!'
        content='Login with email and password'
        color='blue'
      />
      <Form error={Boolean(error)} onSubmit={handleSubmit} loading={loading}>
        <Message error header='Oops!' content={error} />
        <Segment>
          <Form.Input
            fluid
            icon='envelope'
            iconPosition='left'
            label='Email'
            placeholder='Email'
            name='email'
            type='email'
            value={user.email}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            label='Password'
            placeholder='Password'
            name='password'
            type='password'
            value={user.password}
            onChange={handleChange}
          />
          <Button
            disabled={disabled || loading}
            icon='sign in'
            type='submit'
            color='orange'
            content='Login'
          />
        </Segment>
      </Form>
      <Message attached='bottom' warning>
        <Icon name='help' />
        New User?{' '}
        <Link href='/signup'>
          <a>Signup here</a>
        </Link>{' '}
        instead.
      </Message>
    </>
  );
}

export default Login;
