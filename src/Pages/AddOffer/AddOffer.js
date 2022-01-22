// import React from 'react';
// import { useForm } from "react-hook-form";
// import './AddOffer.css';


// const AddOffer = () => {
//     const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
//     const onSubmit = data => {
//         fetch('https://gruesome-mansion-46697.herokuapp.com/offers', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })
//             .then(res => res.json())
//             .then(result => {
//                 if (result.insertedId) {
//                     alert("Ordered Procced Successfully")
//                     reset();
//                 }
//             })
//     }
//     return (
//         <div className="add-offer container">
//             <h4>Add An Offer Which Is Show In Home Page Offer Section</h4>
//             <form onSubmit={handleSubmit(onSubmit)} className="add-offer-content">
//                 {/* register your input into the hook by invoking the "register" function */}
//                 <input type="text" placeholder="Image URL" {...register("img", { required: true })} />
//                 <br />

//                 <input type="text" placeholder="Name Of Offer" {...register("name", { required: true })} />
//                 <br />
//                 <input type="text" placeholder="Properties" {...register("properties", { required: true })} />
//                 <br />

//                 <input type="text" placeholder="Description" {...register("description", { required: true })} />
//                 <br />

//                 <input type="text" placeholder="Price" {...register("price", { required: true, maxLength: 100 })} />
//                 <br />



//                 {/* include validation with required or other standard HTML validation rules */}

//                 {/* errors will return when field validation fails  */}
//                 {errors.exampleRequired && <span>This field is required</span>}

//                 <input type="submit" />
//             </form>
//         </div>
//     );
// };

// export default AddOffer;