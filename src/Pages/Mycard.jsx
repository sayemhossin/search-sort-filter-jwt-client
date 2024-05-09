import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Mycard = () => {

const [cards,setCard] = useState([])
const {user} = useContext(AuthContext)

const url = `https://jwt-practice-server.vercel.app/mydata?email=${user?.email}`

useEffect(()=>{
    if(user?.email){
fetch(url,{credentials:'include'})
.then(res => res.json())
.then(data =>{
    setCard(data)
})
    }
},[user,url])






    return (
        <div className="grid grid-cols-2 gap-6">
           {
            cards.map(card => <div className=" border-2 p-9 border-red-500" key={card._id}>
                 <h1>{card.name}</h1>
                 <h1>{card.price}</h1>
                 <h1>{card.color}</h1>
                 <h1>{card.description}</h1>
                
            </div>)
           }
        </div>
    );
};

export default Mycard;