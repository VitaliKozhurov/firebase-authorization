import Form from "./Form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "store/slices/userSlice";
import { useNavigate } from "react-router";

const SignUp = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (email, password) =>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user})=>{
                dispatch(setUser({
                    email:user.email,
                    id:user.uid,
                    token:user.accessToken,
                }));
                navigate('/');
            })
            .catch(()=>alert('Incorrect data'))
    }

    return (
        <div>
            <Form title={'Register'} handleClick={handleRegister}/>
        </div>
    )

}

export default SignUp;