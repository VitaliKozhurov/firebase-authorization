import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { removeUser } from "store/slices/userSlice";
import {useAuth} from '../hooks/useAuth';


const HomePage = ()=>{
const dispatch = useDispatch();

const {isAuth, email} = useAuth();

    return (
            isAuth
            ?<div>
                <h1>Welcome</h1>
                <button onClick={()=>dispatch(removeUser())}>Logout</button>
             </div> 
            : <Navigate to='/login'/>
    )
}

export default HomePage;