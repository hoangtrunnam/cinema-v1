// import { Layout } from 'antd';
// import { Header, Content, Footer } from 'antd/es/layout/layout';
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { CheckStatusPartner } from 'src/api/test';
import './index.less';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const LoginPage = () => {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate('homePage', { replace: true })
  // }

  const [email, setEmail] = useState<string>('')

  const handleCallApiTest = async () => {
    const res = await CheckStatusPartner(true)
    console.log('res', res)
  }

  useEffect(() => {
    handleCallApiTest()
  }, [])

  const handleLogin = async () => {
    console.log('email', email)
  }

  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleLogin}>
        Submit
      </Button>
    </Form>
    </div>
    </>
  );
};

export default LoginPage;
