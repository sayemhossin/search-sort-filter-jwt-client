import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";

const AddCard = () => {

const {user} = useContext(AuthContext)

const handleAdd = (e) =>{
   e.preventDefault()

const form = e.target
const name  = form.name.value
const color  = form.color.value
const description  = form.description.value
const price  = form.price.value
const email = user?.email

const all = {name,color,description,price,email}

axios.post('https://jwt-practice-server.vercel.app/alldata', all)
.then(data =>{
    if(data.data.insertedId){
        alert('success')
        e.target.reset()
    }
})










}





    return (
        <form onSubmit={handleAdd} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Card Name</span>
          </label>
          <input name="name" type="text"  className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Color</span>
          </label>
          <input name="color" type="text" className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input name="description" type="text" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input name="price" type="text" className="input input-bordered" required />
        </div>



        <div className="form-control mt-6">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    );
};

export default AddCard;