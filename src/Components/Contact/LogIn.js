import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';

import { FcGoogle } from "react-icons/fc";



import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
const Contact = () => {

    const { handleRegistration,isLogin,handleEmailChange,handleNameChange,handlePasswordChange,toggleLogin,error,handleGoogleSignIn,resetPassBtn}= useAuth();
    
    const history = useHistory();
    const location = useLocation();

    const redirect_uri = location.state?.from || '/home';

  const signInUsingGoogle = ()=>{
    handleGoogleSignIn()
    .then(result =>{
        history.push(redirect_uri);
        
    })
    
  }

    return (
        <div>
            <Container style={{marginRight:"100px"}}>
              <Row>
                <Col sm={12} md={6}>

                <div className=" 'login-form'   mt-5" >
      <form onSubmit={handleRegistration}>
        <h3 className="text-info text-center mt-5 pt-5 mb-4">Please {isLogin ? 'Login' : 'Register'}</h3>
      
        

          {/* Name */}
          {!isLogin && <div className="row ">
          <label htmlFor="inputName" className="col-sm-2 col-form-label mb-3 fw-bold">Name</label>
          <div className="col-sm-10">

            <input onBlur={handleNameChange} type="text" className="form-control border-0 p-3" id="inputName" placeholder="Enter Your Name" style={{backgroundColor:"#eee"}} required />

          </div>
         </div>
          }
          {/* Email */}
          <div className="row mb-3 mt-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label fw-bold">Email</label>
          <div className="col-sm-10">

            <input onBlur={handleEmailChange} type="email" className="form-control border-0 p-3" id="inputEmail3" placeholder="Enter Your Email" style={{backgroundColor:"#eee"}} required />
            
          </div>
        </div>

        {/* Password */}
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label fw-bold">Password</label>
          <div className="col-sm-10">

            <input type="password" onBlur={handlePasswordChange} className="form-control border-0 p-3" id="inputPassword3" autoComplete='on' style={{backgroundColor:"#eee"}} placeholder="Enter Your Password" required />

          </div>
        </div>

        {/* Buttons */}
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
              <label className="form-check-label" htmlFor="gridCheck1">
                Already Have An Account?
              </label>
            </div>
          </div>
        </div>

        <div className="row text-danger">{error}</div>

        <button type="submit" className="btn btn-success py-2 px-5 mb-3" style={{marginLeft:"180px"}}>
          {isLogin ? 'Login' : 'Register'}
        </button>
        <br />

        {isLogin && <Link to="#" onClick={resetPassBtn}  className="mb-4 text-danger " style={{textDecoration:"none" , marginLeft:"120px"}} > Forgot Your Password? <span className="text-success"> Reset Now</span> </Link>}

        <div className="text-center mt-4 fw-bold">Or</div>

        <button className=" p-2 px-3 fw-600 border-1 fs-4 rounded-3" style={{marginLeft:"90px", marginTop:"20px", marginBottom:"90px"}} onClick={signInUsingGoogle}> Sign In Using Google <FcGoogle className="fs-1"/></button>
      </form>
      
      
    </div>

                </Col>
              </Row>
            </Container>

            

        </div>
    );
};

export default Contact;


