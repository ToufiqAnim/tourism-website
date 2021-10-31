import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useHistory } from 'react-router';


const NotFound = () => {
    const history = useHistory()
    function homeBtnClicked(){
        history.push("/home");
    }
    return (
        <div className="text-center mt-5 mb-5" >
            <img className="pt-5" src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-18367.jpg?size=626&ext=jpg" alt="" />
            <h1 className='fw-bolder m-3' style={{fontSize:'60px'}}>Page Not Found!</h1>
            <p className='fs-3' >Please Try Again Later</p>
            <Button className='btn-outline-primary border-1 p-3 fw-bold rounded' onClick={homeBtnClicked}>Back to Home</Button>
        </div>
    );
};

export default NotFound;