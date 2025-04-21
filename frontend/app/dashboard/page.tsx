"use client"
import React, {useEffect, useState} from "react";
import Image from "next/image";
import { myAppHook } from "@/context/AppProvider";
import { useRouter } from "next/navigation";
import { error } from "console";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

interface ProductType{
    id?: number,
    title: string,
    description?: string,
    cost?: number,
    file?: string,
    banner_image?: File|null
}

const Dashbord: React.FC = () =>{

    const {isLoading, authToken} = myAppHook();
    const router = useRouter();
    const fileRef = React.useRef<HTMLInputElement>(null);
    const [products, setProducts] = useState<ProductType[]>([]);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [formData, setFormData] = useState<ProductType>({
        title: "",
        description: "",
        cost: 0,
        file: "",
        banner_image: null
    });

    //Page Load When authToken is available 
    useEffect( () =>{

        if (!authToken) {
            router.push("/auth");
            return
        }

        fetchAllProducts();

    }, [authToken]
    )
    //On change Form Inputs 
    const HandleOnChangeEvent =   (event: React.ChangeEvent<HTMLInputElement> ) => 
        {
        if (event.target.files) {
            //File uploaded
            setFormData({
                ...formData,
                banner_image: event.target.files[0],
                file: URL.createObjectURL(event.target.files[0])
            })

        }else{
            //No file upload
            setFormData({
                ...formData,
                [event.target.name]: event.target.value
            })
           


        }
    }

    //Form Submission
    const handleFormSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    
    event.preventDefault();
    console.log(formData) 


    try{
        if (isEdit) {
            //Edit opeeration
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products/${formData.id}`,
                {
                    ...formData,
                    "method" : "PUT"
                }, {
                    headers:{
                     Authorization: `Bearer ${authToken}`,
                    "Content-Type": "multipart/form-data"
                    }
                }
            )
            toast.success(response.data.message)
            fetchAllProducts()
        }else{
            //Add Operation
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products`, formData, {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    "Content-Type": "multipart/form-data"
                }
            })
    
            if (response.data.status) {
                fetchAllProducts()
                toast.success(response.data.message)
                setFormData({
                    title: "",
                    description: "",
                    cost: 0,
                    file: "",
                    banner_image: null
                })
                if (fileRef.current) {
                    fileRef.current.value = "";
                }
            }
            
        }
    

    }catch (error){
        console.log(error)
    }
        
    }

    //list All products
    const  fetchAllProducts = async() => {
        try{
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`,{
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            })

            setProducts(response.data.products)
        }catch(error){
            console.log(error)
        }
    } 

    //Delete Products
    const handleDeleteProduct  = async(id: number) =>{
        try{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then(async(result) => {
                if (result.isConfirmed) {
                  try{
                        const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, { 
                        headers: {
                            Authorization: `Bearer ${authToken}`,
                        }
                        })
                        if (response.data.status) {
                            toast.success(response.data.message)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                            fetchAllProducts()
                        }
                  }catch(error){
                    console.log(error);
                  }
                  
                }
              });
        }catch(error){
            console.log(error)
        }
    }

    return <>
    <div className="container mt-4">
        <div className="row">
            <div className="col-md-6">
                <div className="card p-4">
                    <h4>{isEdit? "Edit" : "Add"} Product</h4>
                    <form onSubmit={handleFormSubmit}>
                        <input 
                            className="form-control mb-2" 
                            name="title" 
                            value={formData.title}
                            placeholder="Title" 
                            onChange={HandleOnChangeEvent}
                            required/>
                        <input 
                            className="form-control mb-2" 
                            name="description" 
                            placeholder="Description" 
                            value={formData.description}
                            onChange={HandleOnChangeEvent}
                            required/>
                        <input 
                            className="form-control mb-2" 
                            name="cost" 
                            placeholder="Cost" 
                            type="number" 
                            value={formData.cost}
                            onChange={HandleOnChangeEvent}
                            required
                        />
                        <div className="mb-2">
                            {
                                formData.file && (
                                    <Image 
                                    src={formData.file} 
                                    alt="Preview" 
                                    id="bannerPreview" 
                                    width={100}
                                    height={100}
                                   // style={{display: "none"}}
                                    />
                                )
                            } 
                           
                        </div>
                        <input 
                            className="form-control mb-2" 
                            type="file" 
                            ref = {fileRef}
                            onChange={HandleOnChangeEvent}
                            id="bannerInput"/>
                        <button 
                            className="btn btn-primary" 
                            type="submit">{isEdit? "Update" : "Add"} Product</button>
                    </form>
                </div>
            </div>


            <div className="col-md-6">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Banner</th>
                            <th>Cost</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((SingleProduct, index) => (
                                <tr key={SingleProduct.id}>
                                    <td>{SingleProduct.id}</td>
                                    <td>{SingleProduct.title}</td>
                                    <td>
                                        {
                                            SingleProduct.banner_image ? (<Image src={SingleProduct.banner_image} alt="Product" style={{width: "50px", height: "50px"}}/>) : "No Image"
                                        }
                                    </td>
                                    <td>${SingleProduct.cost}</td>
                                    <td>
                                        <button className="btn btn-warning btn-sm me-2" onClick={(isEdit) => {
                                            setFormData({
                                                id: SingleProduct.id,
                                                title: SingleProduct.title,
                                                cost: SingleProduct.cost,
                                                description: SingleProduct.description,
                                                banner_image: SingleProduct.banner_image,
                                                file: SingleProduct.file
                                            })
                                            setIsEdit(true)
                                        }}>Edit</button>
                                        <button className="btn btn-danger btn-sm" onClick={ () => handleDeleteProduct(SingleProduct.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
 
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>

}
export default Dashbord;