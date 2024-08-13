// import axios from "axios";
// import { useState } from "react";

// const MerchantAddProduct = () => {
//     const [name,setName]=useState("")
//     const [brand,setBrand]=useState("")
//     const [category,setCategory]=useState("")
//     const [description,setDescription]=useState("")
//     const [cost,setCost]=useState("")
//     const [image_url,setImage_Url]=useState("")
//     const data={name,brand,category,description,cost,image_url}
//     let merchant_id=JSON.parse(localStorage.getItem("Merchant"))
//     const addproduct = (e) => {
//         e.preventDefault();
//         axios.post(`http://localhost:8080/products/${merchant_id}`, data)
//           .then((res) => {
//             console.log(res);
//             alert("Product added success");
//           })
//           .catch((err) => {
//             console.log(err);
//             alert("Data error");
//           });
//       };
//     return ( 
//         <div className="addproducts">
//             <div className="addproductsform">
//                 <h1>Add Product</h1>
//                 <form action="" onSubmit={addproduct}>
//                 <label htmlFor="">Name</label>
//                 <input required value={name} onChange={(e)=>{setName.target.value}} type="text" />
//                 <label htmlFor="">Brand</label>
//                 <input required value={brand} onChange={(e)=>{setBrand.target.value}} type="text" />
//                 <label htmlFor="">Category</label>
//                 <input required value={category} onChange={(e)=>{setCategory.target.value}} type="text" />
//                 <label htmlFor="">Description</label>
//                 <input required value={description} onChange={(e)=>{setDescription.target.value}} type="text" />
//                 <label htmlFor="">Cost</label>
//                 <input required value={cost} onChange={(e)=>{setCost.target.value}} type="text" />
//                 <label htmlFor="">Image_Url</label>
//                 <input required value={image_url} onChange={(e)=>{setImage_Url.target.value}} type="text" />
//                 <button type="submit">Add Product</button>
//                 </form>
//             </div>
//         </div>
//      );
// }
 
// export default MerchantAddProduct;

// import axios from "axios";
// import { useState } from "react";

// const MerchantAddProduct = () => {
//     const [name, setName] = useState("");
//     const [brand, setBrand] = useState("");
//     const [category, setCategory] = useState("");
//     const [description, setDescription] = useState("");
//     const [cost, setCost] = useState("");
//     const [image_url, setImage_Url] = useState("");
//     const data = { name, brand, category, description, cost, image_url };
//     let merchantId = JSON.parse(localStorage.getItem("Merchant"));

//     const addproduct = (e) => {
//         e.preventDefault();
//         axios.post(`http://localhost:8080/products/${merchantId.id}`, data)
//           .then((res) => {
//             console.log(res);
//             alert("Product added successfully");
//           })
//           .catch((err) => {
//             console.log(err);
//             alert("Error adding product");
//           });
//     };

//     return ( 
//         <div className="addproducts">
//             <div className="addproductsform">
//                 <h1>Add Product</h1>
//                 <form onSubmit={addproduct}>
//                     <label htmlFor="">Name</label>
//                     <input required value={name} onChange={(e) => setName(e.target.value)} type="text" />
//                     <label htmlFor="">Brand</label>
//                     <input required value={brand} onChange={(e) => setBrand(e.target.value)} type="text" />
//                     <label htmlFor="">Category</label>
//                     <input required value={category} onChange={(e) => setCategory(e.target.value)} type="text" />
//                     <label htmlFor="">Description</label>
//                     <input required value={description} onChange={(e) => setDescription(e.target.value)} type="text" />
//                     <label htmlFor="">Cost</label>
//                     <input required value={cost} onChange={(e) => setCost(e.target.value)} type="text" />
//                     <label htmlFor="">Image_Url</label>
//                     <input required value={image_url} onChange={(e) => setImage_Url(e.target.value)} type="text" />
//                     <button type="submit">Add Product</button>
//                 </form>
//             </div>
//         </div>
//      );
// }
 
// export default MerchantAddProduct;

import { useState } from "react";
import axios from "axios";
import "../styles/merchantaddproduct.css"
const MerchantAddProduct = () => {
    let [name, setname] = useState("")
    let[brand,setbrand]=useState("")
    let[category,setcategory]=useState("")
    let[description,setdescription]=useState("")
    let[cost,setcost]=useState("")
    let[image_url,setimage_url]=useState("")
    
    let data={name,brand,category,description,cost,image_url};
    let merchantid=JSON.parse(localStorage.getItem("Merchant"));
    let addproducts=(e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8080/products/${merchantid.id}`,data)
        .then((response) => {
            console.log(response);
            alert("Product added successfully");
        })
        .catch((error) => {
            console.error(error);
            alert("Failed to add Product");
        });
    }
    return ( 
        <div className="merchantaddproduct">
            <div className="merchantaddproductform">
            <h1>Add Product</h1>
            <form action="" onSubmit={addproducts}>
                
                <label htmlFor="">Name</label>
                <input type="text" required placeholder="Enter The Name" value={name} onChange={(e) => { setname(e.target.value) }}/>
                <label htmlFor="">Brand</label>
                <input type="text" required placeholder="Enter The Brand" value={brand} onChange={(e) => { setbrand(e.target.value) }}/>
                <label htmlFor="">Category</label>
                <input type="text" required placeholder="Enter The Category" value={category} onChange={(e) => { setcategory(e.target.value) }}/>
                <label htmlFor="">Description</label>
                <input type="text" required placeholder="Enter The Description" value={description} onChange={(e) => { setdescription(e.target.value) }}/>
                <label htmlFor="">Cost</label>
                <input type="text" required placeholder="Enter The Cost" value={cost} onChange={(e) => { setcost(e.target.value) }}/>
                <label htmlFor="">Image_Url</label>
                <input type="text" required placeholder="Enter The Image_url" value={image_url} onChange={(e) => { setimage_url(e.target.value) }}/>
                <button type="submit">Add</button>
            </form>
            </div>
        </div>
     );
}
 
export default MerchantAddProduct;