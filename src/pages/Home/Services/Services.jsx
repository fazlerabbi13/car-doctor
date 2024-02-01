import { useEffect } from "react";
import { useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="text-center mt-10 space-y-4 mb-10">
                <h3 className="text-xl text-[#FF3811] font-semibold">Service</h3>
                <h1 className="text-4xl font-semibold">Our Service Area</h1>
                <p>the majority have suffered
                     alteration in some form, 
                     by injected humour, or 
                     randomised <br /> words which don 
                     not look
                     even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 mt-5">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
}; 

export default Services;