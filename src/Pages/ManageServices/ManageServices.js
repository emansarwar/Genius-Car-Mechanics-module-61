// import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';



const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'

        })
        .then(res => res.json() )
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('deleted')
                const remaining = services.filter(service => service._id !== id);
                
            }
        })
    }
    return (
        <div id="services">
            <h2 className="text-primary mt-5">Manage Services</h2>
            <div className="service-container">
                {
                    services.map(service => <div
                        key={service.id}>
                        <h3>{service.Name}</h3>
                        <Button onClick={() => handleDelete(service._id)}>Delete</Button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageServices;