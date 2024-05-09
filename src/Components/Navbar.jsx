import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {

const {user,logOut}  = useContext(AuthContext)
const navigate = useNavigate()

const handleLogout = () =>{
    logOut()
    .then(()=>{
        navigate('/')
    })
    .catch(err => console.log(err))

}


    return (
        <div className="h-20 shadow-xl w-full">
            <div className="flex justify-around text-2xl font-bold">
                <Link to={'/'}>Home</Link>
                {
                    user && <>
                    <Link to={'/mycard'}>My Card</Link>
                    <Link to={'/addcard'}> Add Card </Link>
                    </> 
                }
          

{
    user ? <button onClick={handleLogout} className="btn">Logout</button> : <Link to={'/login'}>Login </Link>
}





            </div>
        </div>
    );
};

export default Navbar;