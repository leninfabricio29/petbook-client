import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const LoginForm =() => {
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Usuario o email"

        className="mb-3 text-secondary"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Clave" className='text-secondary'>
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <div className='text-center m-4'>
      <Button className="btn btn-info text-light ">Iniciar Sesion</Button>
      <div className="row justify-content-center align-items-center mt-4">
        <div className="row text-center"> <a href=''>¿Olvidaste tu contraseña?</a></div>
        <hr className="hr mt-4" />
        <div className="row mt-2"><Button variant='success' href='/register/'> Crea una cuenta</Button></div>
      </div>

      </div>

    </>
      
    
  );
}

export default LoginForm;