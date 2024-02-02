import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Bookings = () => {
   const{user} = useContext(AuthContext)
   console.log(user)
    const [bookings, setBookings] = useState([]);
    console.log(bookings)
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data =>setBookings(data))
    },[url])
    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default Bookings;