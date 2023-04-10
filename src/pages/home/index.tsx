import { useNavigate } from "react-router-dom";
import "./index.less";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/card");
  };

  return (
    <div className="login-page">
      <h1>this is home page</h1>
      <button type="button" onClick={handleClick}>
        go to card
      </button>
    </div>
  );
};

export default HomePage;
