import { useNavigate } from 'react-router-dom';
import './index.less';


const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('homePage', {replace: true})
  }

  return (
    <div className="login-page">
      <h1>oops this is error page, 404 not found!!!</h1>
      <button type="button" onClick={handleClick}>Click Me to navigate homeeee</button>
    </div>
  );
};

export default ErrorPage;
