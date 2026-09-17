// import { Link, useNavigate } from "react-router-dom";
// import { use, useContext, useEffect } from "react";
// import { AuthContext } from "../context/AuthContext";

// const Navbar = () => {
//     const { user, logout } = useContext(AuthContext);
//     const navigate = useNavigate();
//     return (
//         <header className="sticky top-0 z-50 border-b border-gray-200 bg-white rounded-lg m-2 backdrop-blur-lg">
//             <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
//                 {/* Logo */}
//                 <Link
//                     to="/main"
//                     className="flex items-center gap-3"
//                 >
//                     <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#002C3E] text-lg font-bold text-white shadow-md">
//                         GJ
//                     </div>

//                     <div>
//                         <h1 className="text-lg font-bold text-gray-900">
//                             GJ Company
//                         </h1>

//                         <p className="text-xs text-gray-500">
//                             Garage Management
//                         </p>
//                     </div>
//                 </Link>

//                 {/* Right Side */}
//                 {user ? (
//                     <div className="flex items-center justify-between gap-6 mr-3">
//                         {user?.role !== "admin" && (
//                             <button
//                                 onClick={() => navigate("/user-dashboard")}
//                                 className="text-sm rounded-lg bg-[#002C3E] px-3 py-2 text-white hover:bg-[#012432]"
//                             >
//                                 Dashboard
//                             </button>
//                         )}
//                         <button
//                             onClick={logout}
//                             className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600" >
//                             Logout
//                         </button>
//                     </div>
//                 ) : (
//                     <div className="flex items-center gap-3">
//                         <Link
//                             to="/login"
//                             className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
//                         >
//                             Login
//                         </Link>

//                         <Link
//                             to="/register"
//                             className="rounded-lg bg-[#002C3E] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#023a51]"
//                         >
//                             Register
//                         </Link>
//                     </div>
//                 )}
//             </div>
//         </header>
//     );
// };

// export default Navbar;

// -----------cluade code------------
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { LogOut, LayoutDashboard, LogIn, UserPlus, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/login");
        setMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 backdrop-blur-2xl bg-gradient-to-b from-slate-900/80 via-slate-800/80 to-slate-900/80 border-b border-white/10">
            <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-3 group"
                >
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-lg font-black text-white shadow-lg shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-all duration-300 group-hover:scale-105">
                        GJ
                    </div>

                    <div className="hidden sm:block">
                        <h1 className="text-lg font-black text-white tracking-tight group-hover:text-amber-400 transition-colors duration-200">
                            GJ Garage
                        </h1>

                        <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-200">
                            Service Management
                        </p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    {user ? (
                        <>
                            {user?.role !== "admin" && (
                                <Link
                                    to="/user-dashboard"
                                    className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors duration-200 group"
                                >
                                    <LayoutDashboard size={18} className="group-hover:scale-110 transition-transform" />
                                    <span>Dashboard</span>
                                </Link>
                            )}

                            {user?.role === "admin" && (
                                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-xs font-bold text-amber-400 border border-amber-500/30">
                                    Admin
                                </span>
                            )}

                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 hover:border-red-500/50 text-red-200 hover:text-red-100 font-semibold transition-all duration-200 group"
                            >
                                <LogOut size={18} className="group-hover:scale-110 transition-transform" />
                                <span>Sign Out</span>
                            </button>
                        </>
                    ) : (
                        <div className="flex items-center gap-3">
                            <Link
                                to="/login"
                                className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-white/20 hover:border-white/40 text-white hover:bg-white/10 font-semibold transition-all duration-200 group backdrop-blur-sm"
                            >
                                <LogIn size={18} className="group-hover:scale-110 transition-transform" />
                                <span>Sign In</span>
                            </Link>

                            <Link
                                to="/register"
                                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 active:scale-[0.98] group"
                            >
                                <UserPlus size={18} className="group-hover:scale-110 transition-transform" />
                                <span>Register</span>
                            </Link>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden flex items-center justify-center h-10 w-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 text-white transition-all duration-200"
                >
                    <Menu size={20} />
                </button>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="absolute top-16 right-6 md:hidden backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="flex flex-col p-4 space-y-3 min-w-max">
                            {user ? (
                                <>
                                    {user?.role !== "admin" && (
                                        <Link
                                            to="/user-dashboard"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-slate-300 hover:text-amber-400 hover:bg-white/10 transition-all duration-200"
                                        >
                                            <LayoutDashboard size={18} />
                                            Dashboard
                                        </Link>
                                    )}

                                    {user?.role === "admin" && (
                                        <div className="px-4 py-2">
                                            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-xs font-bold text-amber-400 border border-amber-500/30">
                                                Admin Access
                                            </span>
                                        </div>
                                    )}

                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-red-200 hover:text-red-100 hover:bg-red-500/20 transition-all duration-200 w-full text-left"
                                    >
                                        <LogOut size={18} />
                                        Sign Out
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200"
                                    >
                                        <LogIn size={18} />
                                        Sign In
                                    </Link>

                                    <Link
                                        to="/register"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 transition-all duration-200"
                                    >
                                        <UserPlus size={18} />
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;