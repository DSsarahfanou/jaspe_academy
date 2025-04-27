"use client";
import { myAppHook } from "@/context/AppProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaBook,
  FaSignInAlt,
  FaShoppingCart,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = () => {
  const { logout, authToken } = myAppHook();
  const pathname = usePathname();

  const linkClasses = (href: string) =>
    `nav-link d-flex align-items-center gap-2 px-3 py-2 rounded transition-all position-relative ${
      pathname === href
        ? "bg-success text-white fw-bold shadow-sm"
        : "text-success"
    }`;

  return (
    <nav
      className="shadow-sm navbar navbar-expand-lg fixed-top"
      style={{
        background: "linear-gradient(to right, #ffffff, #e8fff1)",
        borderBottom: "1px solid #198754",
        transition: "all 0.3s ease",
        zIndex: 999,
      }}
    >
      <div className="container">
        <Link
          className="navbar-brand d-flex align-items-center text-success fw-bold fs-3 logo-animation"
          href="/"
        >
          Jaspe <span className="text-dark">Academy</span>
        </Link>

        <button
          className="navbar-toggler border-success"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="gap-2 navbar-nav ms-auto">
            {authToken ? (
              <>
                <li className="nav-item">
                  <Link className={linkClasses("/dashboard")} href="/dashboard">
                    <FaUserCircle /> Dashboard
                    <span className="underline-hover" />
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="gap-2 btn btn-outline-danger d-flex align-items-center ms-2"
                    onClick={logout}
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className={linkClasses("/")} href="/">
                    <FaHome /> Accueil
                    <span className="underline-hover" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={linkClasses("/#formation")} href="/#formation">
                    <FaBook /> Formations
                    <span className="underline-hover" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={linkClasses("/shop")} href="/shop">
                    <FaShoppingCart /> Shop
                    <span className="underline-hover" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={linkClasses("/auth")} href="/auth">
                    <FaSignInAlt /> Connexion
                    <span className="underline-hover" />
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        .logo-animation {
          transition: transform 0.4s ease;
        }

        .logo-animation:hover {
          transform: scale(1.05) rotate(-1deg);
        }

        .nav-link {
          transition: all 0.3s ease-in-out;
          font-weight: 500;
        }

        .nav-link:hover {
          background-color: #d1ffe5;
          transform: translateY(-1px);
          font-weight: 600;
        }

        .nav-link:active,
        .btn:active {
          transform: scale(0.95);
        }

        .underline-hover {
          position: absolute;
          bottom: 4px;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: #198754;
          transition: width 0.3s ease-in-out;
        }

        .nav-link:hover .underline-hover {
          width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
