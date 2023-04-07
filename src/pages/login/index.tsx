// import { Layout } from 'antd';
// import { Header, Content, Footer } from 'antd/es/layout/layout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { CheckStatusPartner } from 'src/api/test';
import './index.less';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const LoginPage = () => {
  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate('homePage', { replace: true })
  // }

  const [email, setEmail] = useState<string>('')


  const handleLogin = async () => {
    console.log('email', email)
    navigate('homePage', { replace: true })
  }

  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', paddingTop: '100px' }}>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Nhớ mật khẩu" />
      </Form.Group>
      <Button style={{justifyContent: 'space-between'}} variant="primary" type="submit" onClick={handleLogin}>
        Đăng nhập
      </Button>
      <Button variant="primary" type="submit" onClick={handleLogin}>
        Đăng kí
      </Button>
    </Form>
    </div>
    </>
  );
};

export default LoginPage;
