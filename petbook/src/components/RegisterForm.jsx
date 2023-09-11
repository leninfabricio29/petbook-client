import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const RegisterForm = () => {
    return (
        <>
        
            <div className='row'>
                <div className="col">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Nombre"
                        className="mb-3 text-secondary"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                </div>

                <div className="col">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Apellido"
                        className="mb-3 text-secondary"
                    >
                        <Form.Control type="text" placeholder="name@example.com" />
                    </FloatingLabel>
                </div>

            </div>
            <div className="row">
                <div className="col">
                    <FloatingLabel
                        controlId=""
                        label="Correo electrónico"
                        className="mb-3 text-secondary"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                </div>

            </div>
            
            <div className="row">
                <div className="col-8">
                    <FloatingLabel
                        controlId=""
                        label="Usuario"
                        className="mb-3 text-secondary"
                    >
                        <Form.Control type="text" placeholder="name@example.com" />
                    </FloatingLabel>
                </div>


            </div>
            <div className="row">
                <div className="col-8">
                    <FloatingLabel
                        controlId=""
                        label="Contraseña"
                        className='text-secondary mb-3'
                    >
                        <Form.Control type="password" placeholder="name@example.com" />
                    </FloatingLabel>
                </div>




            </div>


            <div className='text-center m-4'>
                <Button className="btn btn-info text-light" type='submit'>Registrarse</Button>
                <div className="row justify-content-center align-items-center mt-4">
                    <div className="row text-center"> <a href='/login/'>¿Ya tienes cuenta?</a></div>

                </div>

            </div>

        </>


    );
}

export default RegisterForm;