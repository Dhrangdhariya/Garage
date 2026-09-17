// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import api from "../utils/axios";
// import { useNavigate } from "react-router-dom";

// const UserDashboard = () => {
//     const navigate = useNavigate();
//     const { user, loading } = useContext(AuthContext);
//     const [works, setWorks] = useState([]);
//     useEffect(() => {
//         if (loading) return;

//         if (!user) {
//             navigate("/login");
//             return;
//         }

//         fetchWork();
//     }, [loading, user, navigate]);
//     const fetchWork = async () => {
//         try {
//             const { data } = await api.get("/work");
//             setWorks(data);
//         } catch (error) {
//             console.error(error);
//             alert(error.response?.data?.message || "Failed to load inquiries");
//         }
//     }
//     return (
//         <div className="mx-auto max-w-6xl px-4 py-12 antialiased">
//             {/* Profile/Overview Header Card */}
//             <div className="flex flex-col gap-6 rounded-2xl bg-[#002C3E] p-8 text-white shadow-xl md:flex-row md:items-center md:justify-between">
//                 <div className="flex items-center gap-5">
//                     <img
//                         src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=2563eb&color=fff`}
//                         alt={user.name}
//                         className="h-14 w-14 rounded-full border-2 border-white/20 object-cover shadow-inner"
//                     />
//                     <div>
//                         <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
//                             {user.name}
//                         </h1>
//                         <p className="text-sm text-slate-300 md:text-base">
//                             {user.email}
//                         </p>
//                     </div>
//                 </div>

//                 <div className="flex flex-col border-t border-white/10 pt-4 md:border-t-0 md:pt-0 md:text-right">
//                     <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
//                         Total Inquiries
//                     </p>
//                     <h2 className="text-4xl font-extrabold md:text-5xl">
//                         {works.length}
//                     </h2>
//                 </div>
//             </div>

//             {/* Section Title */}
//             <div className="mt-12 mb-6 border-b border-gray-100 pb-4">
//                 <h2 className="text-2xl font-bold text-gray-800">
//                     Service History
//                 </h2>
//             </div>

//             {/* Inquiry Cards List */}
//             <div className="flex flex-col gap-6">
//                 {works.map((work) => (
//                     <div key={work.inquiryNo} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
//                         {/* Card Inner Header */}
//                         <div className="flex items-center justify-between border-b border-gray-50 bg-slate-50/50 px-6 py-4">
//                             <div className="flex items-center gap-3">
//                                 <h3 className="text-lg font-bold text-gray-800">
//                                     Inquiry #{work.inquiryNo}
//                                 </h3>
//                                 <span className="text-xs text-gray-400">|</span>
//                                 <span className="text-xs font-medium text-gray-500">
//                                     {new Date(work.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
//                                 </span>
//                             </div>
//                             <div className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold tracking-wide">
//                                 <span>
//                                     Status: {(work.status === 'confirm') ?
//                                         <span className="text-emerald-700">
//                                             Confirm
//                                         </span> : <>{(work.status === 'reject') ?
//                                             <span className="text-red-700">
//                                                 Reject
//                                             </span> :
//                                             <span className="text-yellow-700">
//                                                 Pending
//                                             </span>
//                                     }</>
//                                     }
//                                 </span>
//                             </div>
//                         </div>

//                         {/* Card Grid Info Content */}
//                         <div className="grid gap-6 p-6 md:grid-cols-3">
//                             {/* Scooter Column */}
//                             <div className="space-y-1">
//                                 <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
//                                     Scooter Model
//                                 </p>
//                                 <p className="font-semibold text-gray-700">
//                                     {work.name}
//                                 </p>
//                             </div>

//                             <div className="space-y-1 md:col-span-2">
//                                 <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
//                                     Problem or Issue
//                                 </p>
//                                 <p className="text-sm leading-relaxed text-gray-600">
//                                     {work.problem}
//                                 </p>
//                             </div>

//                             {/* Description Column (Takes up 2/3 of space on desktop) */}
//                             <div className="space-y-1 md:col-span-2">
//                                 <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
//                                     Description Details
//                                 </p>
//                                 <p className="text-sm leading-relaxed text-gray-600">
//                                     {work.specific || "No additional description provided."}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default UserDashboard

// -----------------cluade code-------------

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { Calendar, Bike, Wrench, FileText, Clock, CheckCircle2, XCircle, AlertCircle, Loader2, LogOut, User } from "lucide-react";

const UserDashboard = () => {
    const navigate = useNavigate();
    const { user, loading: authLoading, logout } = useContext(AuthContext);
    const [works, setWorks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (authLoading) return;

        if (!user) {
            navigate("/login");
            return;
        }

        fetchWork();
    }, [authLoading, user, navigate]);

    const fetchWork = async () => {
        setLoading(true);
        setError("");
        try {
            const { data } = await api.get("/work");
            setWorks(data);
        } catch (error) {
            const errorMsg = error.response?.data?.message || "Failed to load inquiries";
            setError(errorMsg);
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const getStatusConfig = (status) => {
        switch (status) {
            case 'confirm':
                return {
                    label: 'Confirmed',
                    bgColor: 'bg-emerald-500/15',
                    textColor: 'text-emerald-200',
                    borderColor: 'border-emerald-500/30',
                    icon: CheckCircle2,
                    dotColor: 'bg-emerald-400',
                    labelColor: 'text-emerald-400'
                };
            case 'reject':
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

    const handleLogout = () => {
        if (logout) {
            logout();
            navigate("/login");
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
            <div className="mx-auto max-w-6xl relative z-10">
                {/* Profile Header Card */}
                <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 sm:p-10 shadow-2xl transition-all duration-500 hover:border-white/30 hover:shadow-amber-500/20 mb-12">
                    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                        {/* User Info */}
                        <div className="flex items-center gap-6">
                            <div className="relative">
                                <img
                                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name)}&background=f59e0b&color=fff&bold=true&size=80`}
                                    alt={user?.name}
                                    className="h-20 w-20 rounded-2xl border-2 border-amber-400/50 object-cover shadow-lg shadow-amber-500/20"
                                />
                                <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-emerald-400 border-2 border-slate-900"></div>
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-1">
                                    {user?.name}
                                </h1>
                                <p className="text-slate-400 text-base flex items-center gap-2">
                                    <User size={16} />
                                    {user?.email}
                                </p>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="flex flex-col sm:flex-row gap-8 border-t border-white/10 pt-8 md:border-t-0 md:pt-0">
                            <div className="text-center sm:text-left">
                                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                                    Total Inquiries
                                </p>
                                <div className="text-5xl font-black bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                                    {works.length}
                                </div>
                            </div>

                            {works.length > 0 && (
                                <>
                                    <div className="w-px bg-white/10 hidden sm:block"></div>

                                    <div className="text-center sm:text-left">
                                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                                            Confirmed
                                        </p>
                                        <div className="text-5xl font-black text-emerald-400">
                                            {works.filter(w => w.status === 'confirm').length}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Logout Button */}
                    <button
                        onClick={handleLogout}
                        className="mt-8 w-full sm:w-auto flex items-center justify-center gap-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 hover:border-red-500/50 text-red-200 hover:text-red-100 font-semibold py-3 px-6 rounded-xl transition-all duration-200"
                    >
                        <LogOut size={18} />
                        Sign Out
                    </button>
                </div>

                {/* Section Title */}
                <div className="mb-8">
                    <h2 className="text-3xl font-black text-white tracking-tight mb-2">
                        Service History
                    </h2>
                    <p className="text-slate-400">View all your service requests and their status</p>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="w-12 h-12 text-amber-400 animate-spin mb-4" />
                        <p className="text-slate-400 text-lg">Loading your inquiries...</p>
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
                                onClick={fetchWork}
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
                        <Wrench className="w-16 h-16 text-slate-500 mb-6 opacity-50" />
                        <p className="text-slate-400 text-lg mb-6">No service inquiries yet</p>
                        <a
                            href="/"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 active:scale-[0.98]"
                        >
                            Create Your First Inquiry
                        </a>
                    </div>
                )}

                {/* Inquiry Cards List */}
                {!loading && works.length > 0 && (
                    <div className="space-y-6">
                        {works.map((work, index) => {
                            const statusConfig = getStatusConfig(work.status);
                            const StatusIcon = statusConfig.icon;

                            return (
                                <div
                                    key={work.inquiryNo}
                                    className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-white/10 animate-in fade-in slide-in-from-bottom-4"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    {/* Card Header with Status */}
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
                                    <div className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                        {/* Scooter Model */}
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <Bike size={16} className="text-amber-400" />
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                    Scooter Model
                                                </p>
                                            </div>
                                            <p className="text-lg font-bold text-white">
                                                {work.name}
                                            </p>
                                            {work.year && (
                                                <p className="text-xs text-slate-400">Year: {work.year}</p>
                                            )}
                                        </div>

                                        {/* Problem/Issue */}
                                        <div className="space-y-2 md:col-span-1 lg:col-span-1">
                                            <div className="flex items-center gap-2">
                                                <Wrench size={16} className="text-amber-400" />
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                    Service Required
                                                </p>
                                            </div>
                                            <p className="text-sm text-slate-300 leading-relaxed">
                                                {work.problem}
                                            </p>
                                        </div>

                                        {/* Description Details */}
                                        <div className="space-y-2 md:col-span-1 lg:col-span-1">
                                            <div className="flex items-center gap-2">
                                                <FileText size={16} className="text-amber-400" />
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                    Details
                                                </p>
                                            </div>
                                            <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
                                                {work.specific || "No additional details provided"}
                                            </p>
                                        </div>
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

export default UserDashboard