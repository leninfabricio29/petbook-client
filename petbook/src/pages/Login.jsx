import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
const Login = () => {
  return (
    <>
    <div className="d-flex flex-column min-vh-100 ">
      <div className="container flex-grow-1 d-flex flex-column justify-content-center align-items-center ">

        <div className="border rounded shadow-lg p-4 bg-light">
        
        <Header> </Header>
          <LoginForm />
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Login;
