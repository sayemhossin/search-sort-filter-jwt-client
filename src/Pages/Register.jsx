import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
const {createUser} = useContext(AuthContext)

const handleRegister =(e) =>{
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    const name = form.name.value
    console.log(name,email,password)
    createUser(email,password)
    .then()
    .catch(err => console.log(err))

}






    return (
        <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" mr-12  w-1/2">
           
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-5xl text-center font-bold">Register </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>

            <p className='my-4 text-center'>Already Have An Account <Link className='text-orange-600 font-bold'  to={'/login'}>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Register;