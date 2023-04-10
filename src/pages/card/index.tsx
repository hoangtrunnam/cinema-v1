import { useNavigate } from 'react-router-dom';
import './index.less';


const Card = () => {
  const navigate = useNavigate();


  const handleClick = () => {
    navigate(-1)
  }

  return (
    <div className="login-page">
      <h1>this is card page</h1>
      <button type="button" onClick={handleClick}>click to card to go home page</button>
    </div>
  );
};

export default Card;
