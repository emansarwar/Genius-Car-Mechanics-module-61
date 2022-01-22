// import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { Button, Table } from 'react-bootstrap';




// const MyOrder = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         fetch('https://gruesome-mansion-46697.herokuapp.com/users')
//             .then(res => res.json())
//             .then(data => setUsers(data))
//     }, [])

//     const handleDelete = (id) => {
//         const procced = window.confirm('Are You Sure You Want To Delete')
//         if (procced) {
//             fetch(`https://gruesome-mansion-46697.herokuapp.com/users/${id}`, {
//                 method: "DELETE",
//                 headers: { "content-type": "application/json" },
//             })
//                 .then((res) => res.json())
//                 .then((data) => {
//                     if (data.deletedCount > 0) {
//                         alert('Deleted Successfully')
//                         const remainigUsers = users.filter(user => user._id !== id)
//                         setUsers(remainigUsers);
//                     }
//                 });
//         }

//     };

//     return (
//         <div className="container">
//             <h3>Total Order: {users.length}</h3>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>#</th>
//                         <th>Price</th>
//                         <th>Address</th>
//                         <th>Email</th>
//                         <th>Action</th>

//                     </tr>
//                 </thead>
//                 {users?.map((users, index) => (
//                     <tbody>
//                         <tr>
//                             <td>{index}</td>
//                             <td>{users.Price}</td>
//                             <td>{users.Address}</td>
//                             <td>{users.Email}</td>

//                             <Button className="delete-btn"
//                                 onClick={() => handleDelete(users?._id)}
//                                 variant="outline-danger"
//                             >
//                                 Delete
//                             </Button>
//                         </tr>
//                     </tbody>
//                 ))}
//             </Table>

//         </div>
//     );
// };

// export default MyOrder;