import Login from "components/Login";
import { Link } from "react-router-dom";

const LoginPage = ()=>{
    return (
    <div>
        <h1>Login Page</h1>
        <p>
            Or <Link to='/register'>Registration</Link>
        </p>
        <Login/>
    </div>
    )
}

export default LoginPage;