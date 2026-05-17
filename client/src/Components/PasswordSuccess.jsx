import { Button, Container } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../App.css";
import bgImage from "../assets/str.jpg"; 

const PasswordSuccess = () => {
  const navigate = useNavigate();

  return (
    <Container
      fluid
      className="success-page-auth"
      style={{                       
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="auth-overlay"></div>

      <div className="success-box-auth">
        <h1 className="auth-title">Bloom Hair</h1>

        {/* CHECK */}
        <div className="success-circle-auth">
          ✓
        </div>

        <h3 className="success-text-auth">
          Saved Successfully
        </h3>

        <Button
          className="auth-btn gray-btn"
          onClick={() => navigate("/login")}
        >
          Back to Login
        </Button>
      </div>
    </Container>
  );
};

export default PasswordSuccess;