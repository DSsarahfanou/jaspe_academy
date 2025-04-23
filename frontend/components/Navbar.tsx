//components/Navbar
"use client"
import { myAppHook } from "@/context/AppProvider";
import Link from "next/link";
const Navbar = () =>{

    const {logout, authToken} = myAppHook();

    return <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-yellow-50  text-black-50 ">
            <div className="container">
                <Link className="navbar-brand text-success" href="/"><h1>Jaspe <b className="" >Academy</b></h1> </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {
                            authToken ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link text-success" href="/dashboard">Dashboard</Link>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn btn-danger ms-2" onClick={logout }>Logout</button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link text-success" href="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-success" href="/">Formation</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link text-success" href="/auth">Login</Link>
                                    </li>
                                </>
                            )
                        }

                    </ul>
                </div>
            </div>
        </nav>
    </>
}
export default Navbar;