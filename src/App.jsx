import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
function App() {
  const isCreator = localStorage.getItem("isCreator");
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  if (isAuthenticated && isCreator) {
    navigate("/register");
  } 
  if(isAuthenticated && !isCreator){ 
    navigate("/user");
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Creator Management</h1>
      <div className="card">
        <h3>Are you a content creator?</h3>
        <button
          onClick={() => {
            localStorage.setItem("isCreator", true);
            loginWithRedirect();
          }}
        >
          Yes
        </button>
        <button
          onClick={() => {
            localStorage.setItem("isCreator", false);
            loginWithRedirect();
          }}
        >
          No
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
