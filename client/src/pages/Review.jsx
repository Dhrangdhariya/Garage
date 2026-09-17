// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import api from "../utils/axios";

// const Review = () => {
//     const [reviews, setReviews] = useState([]);
//     useEffect(() => {
//         fetchReviews();
//     }, []);
//     const fetchReviews = async () => {
//         const { data } = await api.get("/review");
//         setReviews(data);
//     };

//     return (
//         <div className="grid gap-8 md:grid-cols-3">
//             {reviews.map((review) => (
//                 <div
//                     key={review._id}
//                     className="rounded-2xl bg-white p-8 shadow" >
//                     <div className="mb-3 text-yellow-500 text-xl">
//                         {"⭐".repeat(review.rating)}
//                     </div>
//                     <p className="text-gray-600">
//                         "{review.comment}"
//                     </p>
//                     <h3 className="mt-6 font-bold">
//                         {review.userId.name}
//                     </h3>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default Review

// -----------Cluade code----------------

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../utils/axios";
import { Star, MessageCircle, User, ArrowLeft, Loader2, AlertCircle } from "lucide-react";

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        setLoading(true);
        setError("");
        try {
            const { data } = await api.get("/review");
            setReviews(data);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to load reviews");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }).map((_, i) => (
            <Star
                key={i}
                size={18}
                className={i < rating ? "fill-amber-400 text-amber-400" : "text-slate-600"}
            />
        ));
    };

    const averageRating = reviews.length > 0
        ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
        : 0;

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
                {/* Header Section */}
                <div className="mb-12 text-center">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold mb-6 transition-colors"
                    >
                        <ArrowLeft size={18} />
                        Back to Home
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
                        Customer Reviews
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                        See what our customers say about their experience with our garage service.
                    </p>

                    {/* Stats Bar */}
                    {reviews.length > 0 && (
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 w-fit mx-auto">
                            <div className="text-center">
                                <div className="text-5xl font-black text-amber-400 mb-2">{averageRating}</div>
                                <div className="flex gap-1 justify-center mb-2">
                                    {renderStars(Math.round(averageRating))}
                                </div>
                                <p className="text-sm text-slate-400">Average Rating</p>
                            </div>
                            <div className="w-px h-16 bg-white/10 hidden sm:block"></div>
                            <div className="text-center">
                                <div className="text-5xl font-black text-emerald-400 mb-2">{reviews.length}</div>
                                <p className="text-sm text-slate-400">Total Reviews</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="w-12 h-12 text-amber-400 animate-spin mb-4" />
                        <p className="text-slate-400 text-lg">Loading reviews...</p>
                    </div>
                )}

                {/* Error State */}
                {error && !loading && (
                    <div className="flex items-start gap-4 bg-red-500/15 text-red-200 p-6 rounded-2xl border border-red-500/30 shadow-lg shadow-red-500/10 mb-8">
                        <AlertCircle className="w-6 h-6 shrink-0 mt-0.5 text-red-400 flex-shrink-0" />
                        <div>
                            <p className="font-semibold text-red-100 mb-1">Failed to Load Reviews</p>
                            <p className="text-red-200 text-sm mb-4">{error}</p>
                            <button
                                onClick={fetchReviews}
                                className="text-red-300 hover:text-red-200 font-semibold text-sm transition-colors"
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                )}

                {/* Empty State */}
                {!loading && reviews.length === 0 && !error && (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-slate-700/50 mb-6">
                            <MessageCircle className="w-10 h-10 text-slate-400" />
                        </div>
                        <p className="text-slate-400 text-lg mb-6">No reviews yet</p>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 active:scale-[0.98]"
                        >
                            Be the First to Review
                        </Link>
                    </div>
                )}

                {/* Reviews Grid */}
                {!loading && reviews.length > 0 && (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {reviews.map((review, index) => (
                            <div
                                key={review._id}
                                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-white/10 animate-in fade-in slide-in-from-bottom-4"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                {/* Rating Stars */}
                                <div className="flex gap-1 mb-4">
                                    {renderStars(review.rating)}
                                </div>

                                {/* Comment */}
                                <p className="text-slate-300 leading-relaxed mb-6 line-clamp-4 text-sm">
                                    "{review.comment}"
                                </p>

                                {/* User Info */}
                                <div className="border-t border-white/10 pt-4 flex items-center gap-3">
                                    <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-amber-500/20">
                                        <User size={18} className="text-amber-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-sm">
                                            {review.userId.name}
                                        </h3>
                                        <p className="text-xs text-slate-500">
                                            {review.userId.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* CTA Section */}
                {!loading && reviews.length > 0 && (
                    <div className="mt-16 text-center">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 active:scale-[0.98]"
                        >
                            Share Your Review
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Review