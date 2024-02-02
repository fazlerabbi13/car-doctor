import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CheckOut = () => {
    const service = useLoaderData();
    const {_id, title, img, price } = service;
    const { user } = useContext(AuthContext)
    const handleBookedService = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const order = {
            customerName: name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price:price
        }
        console.log(order);
        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{ 'content-type':'application/json',},
            body:JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                alert('booking successfully')
            }
        })
    }
    return (
        <div>
            <h1>{title}</h1>
            <form onSubmit={handleBookedService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.name} name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Payment</span>
                        </label>
                        <input type="text" name="due" defaultValue={'$' + price} className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6 mb-6">
                    <input className="btn btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;