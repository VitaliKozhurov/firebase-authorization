import Form from "./Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "store/slices/userSlice";
import { useNavigate } from "react-router";

const Login = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email, password) =>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user})=>{
                dispatch(setUser({
                    email:user.email,
                    id:user.uid,
                    token:user.accessToken,
                }));
                navigate('/');
            }
            )
            .catch(()=>alert('Invalid authorization'))

    }

    return (
        <div>
            <Form title={'Login'} handleClick={handleLogin}/>
        </div>
    )

}

export default Login;