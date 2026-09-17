// import React, { useContext, useEffect, useState } from 'react'
// import { AuthContext } from '../context/AuthContext';
// import { Link, useNavigate } from 'react-router-dom';
// import api from '../utils/axios';
// const Main = () => {
//     const { user, loading, isAdmin } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const [work, setWork] = useState({
//         name: '', year: '', problem: '', specific: ''
//     });

//     useEffect(() => {
//         if (!loading && !user) {
//             navigate("/main");
//         }
//         if(isAdmin){
//             navigate('/admin-dashboard');
//         }
//     }, [loading, user, navigate]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const { data } = await api.post("/work", work);
//             alert(`Your Inquiry Number is ${data.inquiryNo}`);
//             setWork({
//                 name: '', year: '', problem: '', specific: ''
//             });
//         } catch (error) {
//             console.error(error.message);
//             alert('failed to add inquiry');
//             throw error.response?.data?.message || "failed to add inquiry";
//         }
//     }
//     return (
//         <div className="mx-auto max-w-6xl px-6 py-10">
//             <div className="mb-10">
//                 <h1 className="text-4xl font-bold text-gray-900">
//                     Vehicle Service Inquiry
//                 </h1>
//                 <p className="mt-2 text-gray-600">
//                     Fill in your scooter details and describe the issue. Our team will
//                     contact you after reviewing your request.
//                 </p>
//             </div>

//             <form onSubmit={handleSubmit} className="grid gap-8">
//                 <div className="grid gap-6 md:grid-cols-2">
//                     <div>
//                         <label className="mb-2 block text-sm font-medium text-gray-700">
//                             Scooter Model Version name
//                         </label>
//                         <input
//                             type='text'
//                             className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
//                             required
//                             placeholder='like Activa 3G, 5G, 6G, 125, or H-Smart'
//                             value={work.name}
//                             onChange={(e) => setWork({ ...work, name: e.target.value })} />
//                     </div>
//                     <div>
//                         <label className="mb-2 block text-sm font-medium text-gray-700">
//                             Scooter Model
//                         </label>
//                         <input
//                             type='number'
//                             className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
//                             required
//                             placeholder='year of purchase like 2025'
//                             value={work.year}
//                             onChange={(e) => setWork({ ...work, year: e.target.value })} />
//                     </div>
//                 </div>
//                 <div>
//                     <label className="mb-2 block text-sm font-medium text-gray-700">
//                         Peoblem in Scooter
//                     </label>
//                     <input
//                         type='text'
//                         className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
//                         required
//                         placeholder='like Oil change'
//                         value={work.problem}
//                         onChange={(e) => setWork({ ...work, problem: e.target.value })} />
//                 </div>
//                 <div>
//                     <label className="mb-2 block text-sm font-medium text-gray-700">
//                         Specific problem in Scooter(optional)
//                     </label>
//                     <textarea
//                         rows={5}
//                         placeholder="Describe the issue in detail..."
//                         value={work.specific}
//                         onChange={(e) =>
//                             setWork({
//                                 ...work,
//                                 specific: e.target.value,
//                             })
//                         }
//                         className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
//                 </div>
//                 <div className="flex justify-end">
//                     <button
//                         type="submit"
//                         disabled={loading}
//                         className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50" >
//                         {loading ? "Submitting..." : "Submit Inquiry"}
//                     </button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default Main

// --------------cluade code----------

import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import api from '../utils/axios';
import { Car, Calendar, Wrench, FileText, Loader2, CheckCircle2, AlertCircle, Send } from 'lucide-react';

const Main = () => {
    const { user, loading, isAdmin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [work, setWork] = useState({
        name: '', year: '', problem: '', specific: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [inquiryNo, setInquiryNo] = useState('');
    const [formLoading, setFormLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!loading && !user) {
            navigate("/main");
        }
        if (isAdmin) {
            navigate('/admin-dashboard');
        }
    }, [loading, user, navigate, isAdmin]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormLoading(true);
        setError('');

        try {
            const { data } = await api.post("/work", work);
            setInquiryNo(data.inquiryNo);
            setSubmitted(true);
            setWork({
                name: '', year: '', problem: '', specific: ''
            });

            // Auto-hide success message after 5 seconds
            setTimeout(() => setSubmitted(false), 5000);
        } catch (error) {
            const errorMsg = error.response?.data?.message || error.message || "Failed to submit inquiry";
            setError(errorMsg);
            console.error(errorMsg);
        } finally {
            setFormLoading(false);
        }
    }

    return (
        <div className="min-h-[calc(100vh-4.5rem)] relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 -left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-400/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Main Content */}
            <div className="mx-auto max-w-3xl relative z-10">
                {/* Header Section */}
                <div className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-white font-black text-2xl shadow-lg shadow-amber-500/40 mb-6">
                        GJ
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
                        Service Request
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Tell us about your scooter and the service you need. Our team will review your request and contact you shortly.
                    </p>
                </div>

                {/* Success Message */}
                {submitted && (
                    <div className="mb-8 flex items-start gap-4 bg-emerald-500/15 text-emerald-200 p-6 rounded-2xl border border-emerald-500/30 shadow-lg shadow-emerald-500/10 animate-in fade-in slide-in-from-top-2 duration-300">
                        <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5 text-emerald-400 flex-shrink-0" />
                        <div>
                            <p className="font-bold text-emerald-100 mb-1">Request Submitted Successfully!</p>
                            <p className="text-emerald-200 text-sm mb-2">Your inquiry number is:</p>
                            <p className="text-emerald-300 font-black text-xl tracking-wider">{inquiryNo}</p>
                            <p className="text-emerald-200/80 text-xs mt-2">Keep this number handy for tracking your request.</p>
                        </div>
                    </div>
                )}

                {/* Error Message */}
                {error && (
                    <div className="mb-8 flex items-start gap-3 bg-red-500/15 text-red-200 p-6 rounded-2xl border border-red-500/30 shadow-lg shadow-red-500/10 animate-in fade-in slide-in-from-top-2 duration-300">
                        <AlertCircle className="w-6 h-6 shrink-0 mt-0.5 text-red-400 flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-red-100 mb-1">Failed to Submit Request</p>
                            <p className="text-red-200 text-sm">{error}</p>
                        </div>
                    </div>
                )}

                {/* Form Card */}
                <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 sm:p-10 shadow-2xl transition-all duration-500 hover:border-white/30 hover:shadow-amber-500/20">

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Two Column Section */}
                        <div className="grid gap-6 md:grid-cols-2">
                            {/* Scooter Model Input */}
                            <div className="space-y-2">
                                <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest">
                                    Scooter Model/Version
                                </label>
                                <div className="relative group">
                                    <Car className="absolute inset-y-0 left-0 flex items-center pl-4 w-4 h-4 text-slate-500 group-focus-within:text-amber-400 transition-colors duration-200 pointer-events-none" />
                                    <input
                                        type='text'
                                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-white/15 bg-white/5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 focus:bg-white/10 backdrop-blur-sm"
                                        required
                                        placeholder='e.g., Activa 6G, 125cc, H-Smart'
                                        value={work.name}
                                        onChange={(e) => setWork({ ...work, name: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Year of Purchase Input */}
                            <div className="space-y-2">
                                <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest">
                                    Year of Purchase
                                </label>
                                <div className="relative group">
                                    <Calendar className="absolute inset-y-0 left-0 flex items-center pl-4 w-4 h-4 text-slate-500 group-focus-within:text-amber-400 transition-colors duration-200 pointer-events-none" />
                                    <input
                                        type='number'
                                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-white/15 bg-white/5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 focus:bg-white/10 backdrop-blur-sm"
                                        required
                                        placeholder='e.g., 2023'
                                        value={work.year}
                                        onChange={(e) => setWork({ ...work, year: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Problem Type Input */}
                        <div className="space-y-2">
                            <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest">
                                Service Required
                            </label>
                            <div className="relative group">
                                <Wrench className="absolute inset-y-0 left-0 flex items-center pl-4 w-4 h-4 text-slate-500 group-focus-within:text-amber-400 transition-colors duration-200 pointer-events-none" />
                                <input
                                    type='text'
                                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-white/15 bg-white/5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 focus:bg-white/10 backdrop-blur-sm"
                                    required
                                    placeholder='e.g., Oil change, Tire replacement, General maintenance'
                                    value={work.problem}
                                    onChange={(e) => setWork({ ...work, problem: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Detailed Description */}
                        <div className="space-y-2">
                            <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest">
                                Additional Details (Optional)
                            </label>
                            <div className="relative group">
                                <FileText className="absolute top-4 left-4 w-4 h-4 text-slate-500 group-focus-within:text-amber-400 transition-colors duration-200 pointer-events-none" />
                                <textarea
                                    rows={5}
                                    placeholder="Describe any specific issues, symptoms, or additional information that will help us serve you better..."
                                    value={work.specific}
                                    onChange={(e) =>
                                        setWork({
                                            ...work,
                                            specific: e.target.value,
                                        })
                                    }
                                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-white/15 bg-white/5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 focus:bg-white/10 backdrop-blur-sm resize-none"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={formLoading}
                            className="w-full group flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer mt-8 text-base"
                        >
                            {formLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>Submitting Request...</span>
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    <span>Submit Service Request</span>
                                </>
                            )}
                        </button>
                    </form>

                    {/* Form Help Text */}
                    <div className="mt-8 pt-8 border-t border-white/10">
                        <p className="text-xs text-slate-500 text-center leading-relaxed">
                            After submission, you'll receive a confirmation with your inquiry number via email.
                            <br />Our team typically responds within 24 hours during business days.
                        </p>
                    </div>
                </div>

                {/* Info Cards */}
                <div className="grid gap-4 md:grid-cols-3 mt-12">
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300">
                        <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-amber-500/20 text-amber-400 mb-3">
                            <Wrench className="w-6 h-6" />
                        </div>
                        <h3 className="text-white font-semibold mb-2">Professional Service</h3>
                        <p className="text-slate-400 text-sm">Experienced technicians ready to help</p>
                    </div>

                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300">
                        <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500/20 text-blue-400 mb-3">
                            <FileText className="w-6 h-6" />
                        </div>
                        <h3 className="text-white font-semibold mb-2">Easy Tracking</h3>
                        <p className="text-slate-400 text-sm">Monitor your request status anytime</p>
                    </div>

                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300">
                        <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-500/20 text-emerald-400 mb-3">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <h3 className="text-white font-semibold mb-2">Quick Response</h3>
                        <p className="text-slate-400 text-sm">Fast turnaround on service requests</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main