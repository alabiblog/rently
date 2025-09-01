"use client"

 import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useFormik } from "formik";

import * as yup from "yup"


const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required").min(2),
    phoneNumber: yup.string().required("Phone number  required"),
    email: yup.string().required("Email required"),
    apartmentUnit: yup.string().required("Apartment Unit Required"),
    rentAmount: yup.number().required("Rent Amount Required"),
    dueDate: yup.string().required("Due date required"),
    paymentStatus: yup.string().oneOf(["paid","unpaid"]).required(" Status is Required"),
    notes: yup.string().required("Note Is Required"),
    
})


export default function tenant(){
    const{handleBlur,handleChange,handleSubmit,touched,errors,values}=useFormik({
      initialValues: {
        fullName: "",
        phoneNumber: "",
        email: "",
        apartmentUnit: "", 
        rentAmount: "",
        dueDate: "",
        paymentStatus: "",
        notes: "",

      },
      onSubmit:(values,{resetForm})=>{
            console.log(`fullname: ${values.fullName} email: ${values.email} amount: ${values.rentAmount} status: ${values.paymentStatus}`)
            resetForm()
      },
      validationSchema:schema
    })
    return(
        <main>
            <form  onSubmit={handleSubmit} className="flex justify-center min-h-screen max-w-screen">

                <div className="shadow-lg w-150 py-10">
                <h1 className="text-center mt-5 text-2xl md:text-3xl lg:text-3xl">Add Tenant</h1>
                <div className="grid grid-cols-1 mt-5 mx-5 md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-2 lg:gap-5">

                <div className="">
                    <TextField
                    fullWidth
                    label="Full Name"
                    type="text"
                    placeholder="Enter Full Name"
                    id="fullName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fullName}/>
                    {touched.fullName && errors.fullName ? <span className="text-xs text-red-700">{errors.fullName}</span> : null}
                </div>
                <div className="mt-4 md:mt-0 lg:mt-0">
                    <TextField
                    fullWidth
                    label="Enter Phone"
                    type="tel"
                    placeholder="+234.."
                    id="phoneNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}/>
                    {touched.phoneNumber && errors.phoneNumber ? <span className="text-xs text-red-700">{errors.phoneNumber}</span> : null}
                </div>
                <div className="mt-4 md:mt-0 lg:mt-0">
                    <TextField
                    fullWidth
                    label="Enter Email"
                    type="text"
                    placeholder="Enter Email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}/>
                    {touched.email && errors.email ? <span className="text-xs text-red-700">{errors.email}</span> : null}

                </div>
                <div className="mt-4 md:mt-0 lg:mt-0">
                    <TextField
                    fullWidth
                    label="Apartment/Unit"
                    type="text"
                    placeholder="Apartment/Unit"
                    id="apartmentUnit"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.apartmentUnit}/>
                    {touched.apartmentUnit && errors.apartmentUnit ? <span className="text-xs text-red-700">{errors.apartmentUnit}</span> : null}

               </div>
               <div className="mt-4 md:mt-0 lg:mt-0">
                    <TextField
                    fullWidth
                    label="Enter Rent Amount"
                    type="number"
                    placeholder="Enter Rent Amount"
                    id="rentAmount"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.rentAmount}/>
                    {touched.rentAmount && errors.rentAmount ? <span className="text-xs text-red-700">{errors.rentAmount}</span> : null}

                </div>
                <div className="mt-4 md:mt-0 lg:mt-0">
                    <TextField
                    fullWidth
                    label="Due Date"
                    type="date"
                    placeholder=""
                    InputLabelProps={{shrink: true}}
                    id="dueDate"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dueDate}/>
                    {touched.dueDate && errors.dueDate ? <span className="text-xs text-red-700">{errors.dueDate}</span> : null}

                </div>
                </div>
                <div className="mx-5 mt-10">
                    <FormControl fullWidth>
                        <InputLabel id="paymentStatus">Payment Status</InputLabel>
                        <Select
                         id="paymentStatus" 
                         name="paymentStatus" 
                         onChange={handleChange} 
                         onBlur={handleBlur} 
                         value={values.paymentStatus}>
                             <MenuItem value="paid">Paid</MenuItem>
                             <MenuItem value="unpaid">Unpaid</MenuItem>
                        </Select>
                     {touched.paymentStatus && errors.paymentStatus ? <span className="text-xs text-red-700">{errors.paymentStatus}</span> : null}
                    </FormControl>
                        </div>
                    <div className="mt-10 mx-5">
                    <TextField
                    fullWidth
                    label="notes"
                    placeholder="notes"
                    type="text"
                    id="notes"
                    multiline
                    rows={5}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.notes}/>
                    {touched.notes && errors.notes ? <span className="text-xs text-red-700">{errors.notes}</span> : null}

                </div>
                <div className="mt-5 mx-5 rounded bg-blue-200">
                    <Button fullWidth type="submit">Add Tenant</Button>
                </div>
               </div>
            </form>
        </main>
    )
}


























// "use client"

// import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
// import { useFormik } from "formik"
// import * as yup from "yup"

// const schema = yup.object().shape({
//     fullName: yup.string().required("Full name is required").min(2),
//     phone: yup.string().required("phone number is required"),
//     email: yup.string().required("email is required"),
//     apartmentUnit: yup.string().required("Apartment unit is required"),
//     rentAmount: yup.number().required("Rent amout is required"),
//     date: yup.date().required("Due date required"),
//     paymentStatus: yup.string().oneOf(["paid","unpaid"]).required("Payment status required"),
//     notes: yup.string().required("note is required"),
// });




// export default function tenant(){
//     const {handleBlur,handleChange,handleSubmit,values,touched,errors}= useFormik({
//          initialValues:{
//             fullName: "",
//             phone: "",
//             email: "",
//             apartmentUnit: "",
//             rentAmount: "",
//             date: "",
//             paymentStatus: "",
//             notes: "",

//          },
//         onSubmit:(values,{resetForm})=>{
//             console.log(`fullname: ${values.fullName} email: ${values.email} amount: ${values.rentAmount} status: ${values.paymentStatus}`)
//             resetForm()
//         },
//         validationSchema:schema
//     })
//     return(
//         <main className="min-h-screen flex justify-center ">
//            <form>
//             <div  className="shadow-lg w-90  my-5 md:w-150 min-h-screen">
//                 <h1 className="text-2xl font-semibold text-center">Add Tenant</h1>
//                 <div className="mt-5 md:flex md:justify-center gap-2 mx-2">
//                     <TextField
//                     fullWidth
//                     type="text"
//                     placeholder="Full Name"
//                     label="Full Name"
//                     id="fullName"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.fullName}/>
//                     {touched.fullName && errors.fullName ? <span className="text-red-700">{errors.fullName}</span> : null}

//                 </div>
//                    <div> 
//                     <TextField
//                     fullWidth
//                     label="Phone Number"
//                     type="tel"
//                     placeholder="+234"
//                     id="phone"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.phoneNumber}/>
//                     {touched.phone && errors.phone ? <span className="text-red-700">{errors.phone}</span> : null}

//                 </div>
//                 <div className="mt-5 md:flex md:justify-center gap-2 mx-2">
//                     <TextField
//                     fullWidth
//                     type="email"
//                     placeholder="@gmail.com"
//                     label="Enter Email"
//                     id="email"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.email}/>
//                     {touched.email && errors.email ? <span className="text-red-700">{errors.email}</span> : null}

//                 </div>
//                     <div>
//                     <TextField
//                     fullWidth
//                     label="Apartment/Unit"
//                     type="text"
//                     placeholder="Apartment/Unit"
//                     id="apartmentUnit"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.apartmentUnit}/>
//                     {touched.apartmentUnit && errors.apartmentUnit ? <span className="text-red-700">{errors.apartmentUnit}</span> : null}

//                     </div>
                    
            
//                 <div className="mt-5 md:flex md:justify-center gap-2 mx-2">
//                     <TextField
//                     fullWidth
//                     type="number"
//                     placeholder="Rent Amount"
//                     label="Rent Amount"
//                     id="rentAmount"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.rentAmount}/>
//                     {touched.rentAmount && errors.rentAmount ? <span className="text-red-700">{errors.rentAmount}</span> : null}

//                 </div>
//                    <div> 
//                     <TextField
//                     fullWidth
//                     label="Due Date"
//                     placeholder="enter rent duee  date"
//                     InputLabelProps={{shrink:true}} 
//                     type="date"
//                     id="date"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.date}/>
//                     {touched.date && errors.date ? <span className="text-red-700">{errors.date}</span> : null}

//                     </div>
                    
                
//                 <div className="mt-10 mx-2">
//                  <FormControl fullWidth >
//                     <InputLabel >Payment Status</InputLabel>
//                     <Select 
//                     id="paymentStatus"
//                     name="paymentStatus"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.paymentStatus}>
                    
//                         <MenuItem value="paid">paid</MenuItem>
//                         <MenuItem value="unpaid">unpaid</MenuItem>
//                     </Select>
//                     {touched.paymentStatus && errors.paymentStatus ? <span className="text-red-700">{errors.paymentStatus}</span> : null}
                   
//                 </FormControl> 
//                 </div>
//                 <div className="mt-5 mx-2">
//                     <TextField
//                     fullWidth
//                     label="notes"
//                     type="text"
//                     multiline
//                     rows={5}
//                     placeholder="note"
//                     id="notes"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.notes}/>
//                     {touched.notes && errors.notes ? <span className="text-red-700">{errors.notes}</span> : null}
//                 </div>
//                 <div className="shadow-lg mt-5 mx-2 rounded bg-blue-200">
//                     <Button fullWidth>Add Tenant</Button>
//                 </div>

//             </div>
//            </form>
//         </main>
//     )
// }






