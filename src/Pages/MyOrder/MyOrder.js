import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';




const MyOrder = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    const handleDelete = (id) => {
        const procced = window.confirm('Are You Sure You Want To Delete')
        if (procced) {
            fetch(`http://localhost:5000/services${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainigUsers = user.filter(user => user._id !== id)
                        setUser(remainigUsers);
                    }
                });
        }

    };

    return (
        <div className="container">
            <h3>Total Order: {user.length}</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Price</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Action</th>

                    </tr>
                </thead>
                {user?.map((user, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{user.Price}</td>
                            <td>{user.Address}</td>
                            <td>{user.Email}</td>

                            <Button className="delete-btn"
                                onClick={() => handleDelete(user?._id)}
                                variant="outline-danger"
                            >
                                Delete
                            </Button>
                        </tr>
                    </tbody>
                ))}
            </Table>

        </div>
    );
};

export default MyOrder;