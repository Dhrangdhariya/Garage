// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import api from "../utils/axios";

// const AdminDashboard = () => {
//     const navigate = useNavigate();
//     const { user } = useContext(AuthContext);
//     const [works, setWorks] = useState([]);
//     useEffect(() => {
//         if (!user || user.role !== 'admin') {
//             navigate('/login');
//         }

//         fetchData();
//     }, [user, navigate]);
//     const fetchData = async () => {
//         try {
//             const { data } = await api.get("/admin/work");
//             setWorks(data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const confirmInquiry = async (id) => {
//         try {
//             await api.put(`/admin/work/${id}/confirm`);
//             fetchData();
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const rejectInquiry = async (id) => {
//         try {
//             await api.put(`/admin/work/${id}/reject`);
//             fetchData();
//         } catch (error) {
//             console.error(error);
//         }
//     };
//     return (
//         <div className="mx-auto max-w-7xl px-6 py-10">

//             {/* Header */}
//             <div className="mb-8 rounded-2xl bg-[#002C3E] p-8 text-white">
//                 <h1 className="text-3xl font-bold">
//                     Garage Admin Dashboard
//                 </h1>

//                 <p className="mt-2 text-slate-300">
//                     Welcome back, {user.name}
//                 </p>
//             </div>

//             {/* Statistics */}
//             <div className="mb-10 grid gap-6 md:grid-cols-4">

//                 <div className="rounded-xl bg-white p-6 shadow">
//                     <p className="text-gray-500">Total</p>
//                     <h2 className="text-3xl font-bold">
//                         {works.length}
//                     </h2>
//                 </div>

//                 <div className="rounded-xl bg-yellow-50 p-6 shadow">
//                     <p className="text-yellow-700">Pending</p>
//                     <h2 className="text-3xl font-bold">
//                         {works.filter(w => w.status === "Pending").length}
//                     </h2>
//                 </div>

//                 <div className="rounded-xl bg-green-50 p-6 shadow">
//                     <p className="text-green-700">Confirmed</p>
//                     <h2 className="text-3xl font-bold">
//                         {works.filter(w => w.status === "Confirmed").length}
//                     </h2>
//                 </div>

//                 <div className="rounded-xl bg-red-50 p-6 shadow">
//                     <p className="text-red-700">Rejected</p>
//                     <h2 className="text-3xl font-bold">
//                         {works.filter(w => w.status === "Rejected").length}
//                     </h2>
//                 </div>

//             </div>

//             {/* Inquiry List */}

//             <div className="space-y-6">

//                 {works.map(work => (

//                     <div
//                         key={work._id}
//                         className="rounded-2xl border bg-white p-6 shadow-sm"
//                     >

//                         <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

//                             <div>

//                                 <h2 className="text-xl font-bold">
//                                     Inquiry #{work.inquiryNo}
//                                 </h2>

//                                 <p className="text-sm text-gray-500">
//                                     {new Date(work.date).toLocaleDateString()}
//                                 </p>

//                             </div>

//                             <span
//                                 className={`rounded-full px-4 py-2 text-sm font-semibold
//                         ${work.status === "Pending"
//                                         ? "bg-yellow-100 text-yellow-700"
//                                         : work.status === "Confirmed"
//                                             ? "bg-green-100 text-green-700"
//                                             : "bg-red-100 text-red-700"
//                                     }`}
//                             >
//                                 {work.status}
//                             </span>

//                         </div>

//                         <div className="mt-6 grid gap-6 md:grid-cols-2">

//                             <div>

//                                 <p>
//                                     <strong>Customer:</strong>{" "}
//                                     {work.userId.name}
//                                 </p>

//                                 <p>
//                                     <strong>Email:</strong>{" "}
//                                     {work.userId.email}
//                                 </p>

//                                 <p>
//                                     <strong>Scooter:</strong>{" "}
//                                     {work.name}
//                                 </p>

//                                 <p>
//                                     <strong>Purchase Year:</strong>{" "}
//                                     {work.year}
//                                 </p>

//                             </div>

//                             <div>

//                                 <p>
//                                     <strong>Problem:</strong>
//                                 </p>

//                                 <p className="mb-4">
//                                     {work.problem}
//                                 </p>

//                                 <p>
//                                     <strong>Description:</strong>
//                                 </p>

//                                 <p>
//                                     {work.specific || "No description"}
//                                 </p>

//                             </div>

//                         </div>

//                         {work.status === "Pending" && (

//                             <div className="mt-8 flex gap-4">

//                                 <button
//                                     onClick={() =>
//                                         confirmInquiry(work._id)
//                                     }
//                                     className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
//                                 >
//                                     Confirm
//                                 </button>

//                                 <button
//                                     onClick={() =>
//                                         rejectInquiry(work._id)
//                                     }
//                                     className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
//                                 >
//                                     Reject
//                                 </button>

//                             </div>

//                         )}

//                     </div>

//                 ))}

//             </div>

//         </div>
//     )
// }

// export default AdminDashboard

//----------------cluade code--------------

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import api from "../utils/axios";
import { BarChart3, Clock, CheckCircle2, XCircle, Users, Bike, Mail, Calendar, FileText, Loader2, AlertCircle, LogOut } from "lucide-react";

const AdminDashboard = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    const [works, setWorks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [actionLoading, setActionLoading] = useState(null);

    useEffect(() => {
        if (!user || user.role !== 'admin') {
            navigate('/login');
            return;
        }

        fetchData();
    }, [user, navigate]);

    const fetchData = async () => {
        setLoading(true);
        setError("");
        try {
            const { data } = await api.get("/admin/work");
            console.log(data);
            setWorks(data);
        } catch (error) {
            setError(error.response?.data?.message || "Failed to load inquiries");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const confirmInquiry = async (id) => {
        setActionLoading(id);
        try {
            await api.put(`/admin/work/${id}/confirm`);
            fetchData();
        } catch (error) {
            alert(error.response?.data?.message || "Failed to confirm inquiry");
            console.error(error);
        } finally {
            setActionLoading(null);
        }
    };

    const rejectInquiry = async (id) => {
        setActionLoading(id);
        try {
            await api.put(`/admin/work/${id}/reject`);
            fetchData();
        } catch (error) {
            alert(error.response?.data?.message || "Failed to reject inquiry");
            console.error(error);
        } finally {
            setActionLoading(null);
        }
    };

    const handleLogout = () => {
        if (logout) {
            logout();
            navigate("/login");
        }
    };

    const stats = [
        {
            label: "Total Inquiries",
            value: works.length,
            icon: BarChart3,
            bgColor: "bg-amber-500/20",
            textColor: "text-amber-400",
            borderColor: "border-amber-500/30"
        },
        {
            label: "Pending",
            value: works.filter(w => w.status === "Pending").length,
            icon: Clock,
            bgColor: "bg-yellow-500/20",
            textColor: "text-yellow-400",
            borderColor: "border-yellow-500/30"
        },
        {
            label: "Confirmed",
            value: works.filter(w => w.status === "Confirmed").length,
            icon: CheckCircle2,
            bgColor: "bg-emerald-500/20",
            textColor: "text-emerald-400",
            borderColor: "border-emerald-500/30"
        },
        {
            label: "Rejected",
            value: works.filter(w => w.status === "Rejected").length,
            icon: XCircle,
            bgColor: "bg-red-500/20",
            textColor: "text-red-400",
            borderColor: "border-red-500/30"
        }
    ];

    const getStatusConfig = (status) => {
        switch (status) {
            case 'Confirmed':
                return {
                    label: 'Confirmed',
                    bgColor: 'bg-emerald-500/15',
                    textColor: 'text-emerald-200',
                    borderColor: 'border-emerald-500/30',
                    icon: CheckCircle2,
                    dotColor: 'bg-emerald-400',
                    labelColor: 'text-emerald-400'
                };
            case 'Rejected':
                return {
                    label: 'Rejected',
                    bgColor: 'bg-red-500/15',
                    textColor: 'text-red-200',
                    borderColor: 'border-red-500/30',
                    icon: XCircle,
                    dotColor: 'bg-red-400',
                    labelColor: 'text-red-400'
                };
            default:
                return {
                    label: 'Pending',
                    bgColor: 'bg-yellow-500/15',
                    textColor: 'text-yellow-200',
                    borderColor: 'border-yellow-500/30',
                    icon: Clock,
                    dotColor: 'bg-yellow-400',
                    labelColor: 'text-yellow-400'
                };
        }
    };

    return (
        <div className="min-h-[calc(100vh-4.5rem)] relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 -left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-400/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Main Content */}
            <div className="mx-auto max-w-7xl relative z-10">
                {/* Header */}
                <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 sm:p-10 shadow-2xl transition-all duration-500 hover:border-white/30 hover:shadow-amber-500/20 mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                        <div>
                            <h1 className="text-4xl font-black text-white tracking-tight mb-2">
                                Garage Admin Dashboard
                            </h1>
                            <p className="text-slate-400 text-lg flex items-center gap-2">
                                <Users size={18} />
                                Welcome back, <span className="text-amber-400 font-semibold">{user?.name}</span>
                            </p>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="flex items-center justify-center gap-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 hover:border-red-500/50 text-red-200 hover:text-red-100 font-semibold py-3 px-6 rounded-xl transition-all duration-200"
                        >
                            <LogOut size={18} />
                            Sign Out
                        </button>
                    </div>
                </div>

                {/* Statistics Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className={`backdrop-blur-xl bg-white/10 border ${stat.borderColor} rounded-2xl p-6 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-white/10 animate-in fade-in slide-in-from-bottom-4`}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bgColor}`}>
                                        <Icon className={stat.textColor} size={24} />
                                    </div>
                                </div>

                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                                    {stat.label}
                                </p>
                                <h3 className={`text-4xl font-black ${stat.textColor}`}>
                                    {stat.value}
                                </h3>
                            </div>
                        );
                    })}
                </div>

                {/* Section Title */}
                <div className="mb-8">
                    <h2 className="text-3xl font-black text-white tracking-tight mb-2">
                        Service Inquiries
                    </h2>
                    <p className="text-slate-400">Review and manage customer service requests</p>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="w-12 h-12 text-amber-400 animate-spin mb-4" />
                        <p className="text-slate-400 text-lg">Loading inquiries...</p>
                    </div>
                )}

                {/* Error State */}
                {error && !loading && (
                    <div className="flex items-start gap-4 bg-red-500/15 text-red-200 p-6 rounded-2xl border border-red-500/30 shadow-lg shadow-red-500/10 mb-8">
                        <AlertCircle className="w-6 h-6 shrink-0 mt-0.5 text-red-400 flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-red-100 mb-1">Failed to Load Inquiries</p>
                            <p className="text-red-200 text-sm mb-4">{error}</p>
                            <button
                                onClick={fetchData}
                                className="text-red-300 hover:text-red-200 font-semibold text-sm transition-colors"
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                )}

                {/* Empty State */}
                {!loading && works.length === 0 && !error && (
                    <div className="flex flex-col items-center justify-center py-20 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl">
                        <FileText className="w-16 h-16 text-slate-500 mb-6 opacity-50" />
                        <p className="text-slate-400 text-lg">No inquiries at the moment</p>
                    </div>
                )}

                {/* Inquiry Cards */}
                {!loading && works.length > 0 && (
                    <div className="space-y-6">
                        {works.map((work, index) => {
                            const statusConfig = getStatusConfig(work.status);
                            const StatusIcon = statusConfig.icon;
                            const isPending = work.status === "Pending";

                            return (
                                <div
                                    key={work._id}
                                    className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-white/10 animate-in fade-in slide-in-from-bottom-4"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    {/* Card Header */}
                                    <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 px-6 py-6 sm:py-4 ${statusConfig.bgColor}`}>
                                        <div className="flex items-center gap-3 flex-1">
                                            <div className={`flex-shrink-0 h-3 w-3 rounded-full ${statusConfig.dotColor}`}></div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white">
                                                    Inquiry #{work.inquiryNo}
                                                </h3>
                                                <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                                                    <Calendar size={12} />
                                                    {new Date(work.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                                                </p>
                                            </div>
                                        </div>

                                        <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${statusConfig.bgColor} ${statusConfig.borderColor} flex-shrink-0`}>
                                            <StatusIcon size={16} className={statusConfig.labelColor} />
                                            <span className={`text-sm font-bold ${statusConfig.labelColor}`}>
                                                {statusConfig.label}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6">
                                        {/* Customer & Scooter Info */}
                                        <div className="grid gap-6 md:grid-cols-2 mb-6">
                                            {/* Customer Section */}
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <Users size={16} className="text-amber-400" />
                                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Customer Information</p>
                                                </div>

                                                <div>
                                                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Name</p>
                                                    <p className="text-white font-semibold">{work.userId?.name || "Unknown User"}</p>
                                                </div>

                                                <div>
                                                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Email</p>
                                                    <p className="text-slate-300 text-sm flex items-center gap-1">
                                                        <Mail size={14} className="text-amber-400" />
                                                        {work.userId?.email || "No Email"}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Scooter Section */}
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <Bike size={16} className="text-amber-400" />
                                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Scooter Details</p>
                                                </div>

                                                <div>
                                                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Model</p>
                                                    <p className="text-white font-semibold">{work.name}</p>
                                                </div>

                                                <div>
                                                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Purchase Year</p>
                                                    <p className="text-slate-300">{work.year}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Service Details */}
                                        <div className="border-t border-white/10 pt-6 space-y-4">
                                            <div>
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Service Required</p>
                                                <p className="text-slate-300 leading-relaxed">{work.problem}</p>
                                            </div>

                                            {work.specific && (
                                                <div>
                                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Additional Details</p>
                                                    <p className="text-slate-300 leading-relaxed">{work.specific}</p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Action Buttons */}
                                        {isPending && (
                                            <div className="mt-8 flex flex-col sm:flex-row gap-4 border-t border-white/10 pt-6">
                                                <button
                                                    onClick={() => confirmInquiry(work._id)}
                                                    disabled={actionLoading === work._id}
                                                    className="flex items-center justify-center gap-2 flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-3 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
                                                >
                                                    {actionLoading === work._id ? (
                                                        <>
                                                            <Loader2 className="w-5 h-5 animate-spin" />
                                                            Processing...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <CheckCircle2 size={20} />
                                                            Confirm Inquiry
                                                        </>
                                                    )}
                                                </button>

                                                <button
                                                    onClick={() => rejectInquiry(work._id)}
                                                    disabled={actionLoading === work._id}
                                                    className="flex items-center justify-center gap-2 flex-1 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 hover:border-red-500/50 text-red-200 hover:text-red-100 font-bold py-3 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none"
                                                >
                                                    {actionLoading === work._id ? (
                                                        <>
                                                            <Loader2 className="w-5 h-5 animate-spin" />
                                                            Processing...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <XCircle size={20} />
                                                            Reject Inquiry
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default AdminDashboard