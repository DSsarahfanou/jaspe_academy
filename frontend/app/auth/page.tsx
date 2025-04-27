//app/auth
"use client"
import React, { useEffect, useState } from "react";
import { myAppHook } from "@/context/AppProvider";
import { useRouter } from "next/navigation";
import Image from 'next/image';

interface formData{
    name?: string,
    email: string,
    password: string,
    password_confirmation?: string
}

const Auth: React.FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const [formData, setFormData] = useState<formData>({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    })
    const router = useRouter();
    const {login, register, authToken, isLoading} = myAppHook()

    useEffect( () => {
        if (authToken) {
            router.push("/dashboard");
            return
        }
    }, [authToken, isLoading])
    const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData, 
            [event.target.name]: event.target.value
        })
    }
    const handleFormSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // TODO: Send data to server
        if (isLogin){
            try{
                await login(formData.email, formData.password)
            }catch (error){
                console.log(`Authentification Error ${error}`)
            }
        }else{
            try{
                await register(formData.name!, formData.email, formData.password, formData.password_confirmation!)
            }catch(error){
                console.log(`Registration Error ${error}`)
            }
        }
    }
 
    return (
        <>
            
    <div className="container d-flex justify-content-between align-items-center vh-100">
        <div>
            {isLogin? 
            (<Image
                src="/image/register_2.avif"
                width={400}
                height={400}
                alt="logo_login"
            />) : 
            ( <Image
                src="/image/register.png"
                width={500}
                height={750}
                alt="logo_register"
                className="self-center mt-5 rounded-full"
            />)}
        </div>
        <div className="p-4 card" style={{width: "400px"}}>
            
            <h3 className="text-center"> {isLogin? "Login" : "Register"}</h3>
            <form onSubmit={handleFormSubmit}>
                {
                    !isLogin && (<input 
                        className="mb-2 form-control" 
                        name="name" 
                        type="text" 
                        value={formData.name}
                        onChange={handleOnChangeInput}
                        placeholder="Name" 
                        required/>)
                } 
                <input 
                    className="mb-2 form-control" 
                    name="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleOnChangeInput}
                    placeholder="Email" 
                    required
                />
                <input
                     className="mb-2 form-control" 
                     name="password" 
                     type="password" 
                     value={formData.password}
                     onChange={handleOnChangeInput}
                     placeholder="Password" 
                     required
                />
               {
                    !isLogin && (<input 
                        className="mb-2 form-control" 
                        name="password_confirmation" 
                        type="password" 
                        value={formData.password_confirmation}
                        onChange={handleOnChangeInput}
                        placeholder="Confirm Password" 
                        required/>)
               }
                <button className="btn btn-success w-100" type="submit">{isLogin? "Login" : "Register"}</button>
            </form>

            <p className="mt-3 text-center">{isLogin? "Don't have an account? " : "already have an account? " }
               <span onClick={() => setIsLogin(!isLogin)} style={{cursor: "pointer"}}>
                    {
                        isLogin? "Register" : "Login"
                    }
               </span>
            </p>
        </div>
    </div>
        </>
    );
};

export default Auth;