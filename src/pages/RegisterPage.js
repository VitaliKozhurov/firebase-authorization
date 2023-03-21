import SignUp from "components/SignUp";
import { Link } from "react-router-dom";

const RegisterPage = ()=>{
    return (
    <div>
        <h1>Register Page</h1>
        <p>
            If you have account, go to <Link to='/login'>login page</Link>
        </p>
        <SignUp/>
    </div>
    )
}

export default RegisterPage;