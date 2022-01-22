// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { Table, Button } from 'react-bootstrap';
// import './AllOrder.css'

// const AllOrder = () => {
//     const [offers, setOffers] = useState([]);
//     useEffect(() => {
//         fetch('https://gruesome-mansion-46697.herokuapp.com/offers')
//             .then(res => res.json())
//             .then(data => setOffers(data))
//     }, [])

//     const handleDelete = (id) => {
//         const procced = window.confirm('Are You Sure You Want to Delete?')
//         if (procced) {
//             fetch(`https://gruesome-mansion-46697.herokuapp.com/offers/${id}`, {
//                 method: "DELETE",
//                 headers: { "content-type": "application/json" },
//             })
//                 .then((res) => res.json())
//                 .then((data) => {
//                     if (data.deletedCount > 0) {
//                         alert('Deleted Successfully')
//                         const remainigOrders = offers.filter(offer => offer._id !== id)
//                         setOffers(remainigOrders);
//                     }
//                 });
//         }

//     };

//     return (
//         <div className="container">
//             <h3>Total Offer: {offers.length}</h3>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>#</th>
//                         <th>Offer description</th>
//                         <th>Image Link</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 {offers?.map((offer, index) => (
//                     <tbody>
//                         <tr>
//                             <td>{index}</td>
//                             <td>{offer.description}</td>
//                             <td>{offer.img}</td>
//                             <Button variant="outline-danger"
//                                 className="delete-btn"
//                                 onClick={() => handleDelete(offer._id)}

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

// export default AllOrder;