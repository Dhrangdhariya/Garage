// import React, { useState, useEffect, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import api from "../utils/axios";
// import { ArrowRight, CheckCircle, Wrench, ShieldCheck, ClipboardList, SearchCheck, Bike, BadgeCheck, Clock3, Smartphone, FileText } from "lucide-react";

// const Home = () => {
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [rating, setRating] = useState(5);
//   const [comment, setComment] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleReview = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       await api.post("/review", {
//         rating,
//         comment,
//       });

//       navigate("/reviews");

//     } catch (error) {
//       alert(error.response?.data?.message || "Failed to submit review");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (<>
//     {/* ================= HERO ================= */}
//     <section className="bg-slate-50">
//       <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 py-16 lg:flex-row">

//         {/* Left Side */}

//         <div className="max-w-xl">

//           <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
//             🚀 Online Garage Management
//           </span>

//           <h1 className="mt-6 text-5xl font-extrabold leading-tight text-[#002C3E]">

//             Book Your

//             <span className="block text-blue-600">
//               Scooter Service
//             </span>

//             Online
//           </h1>

//           <p className="mt-6 text-lg leading-8 text-gray-600">

//             Skip long waiting lines.

//             Submit your scooter issue online, receive an inquiry
//             number, and let our mechanics review your request
//             before your visit.

//           </p>

//           {/* Features */}

//           <div className="mt-8 space-y-4">

//             <div className="flex items-center gap-3">

//               <CheckCircle
//                 size={20}
//                 className="text-green-600"
//               />

//               <span>
//                 Online Inquiry Submission
//               </span>

//             </div>

//             <div className="flex items-center gap-3">

//               <ShieldCheck
//                 size={20}
//                 className="text-green-600"
//               />

//               <span>
//                 Track Inquiry Status
//               </span>

//             </div>

//             <div className="flex items-center gap-3">

//               <Wrench
//                 size={20}
//                 className="text-green-600"
//               />

//               <span>
//                 Experienced Mechanics
//               </span>

//             </div>

//           </div>

//           {/* Buttons */}

//           <div className="mt-10 flex flex-wrap gap-4">

//             {user? <Link
//               to="/"
//               className="flex items-center gap-2 rounded-xl bg-[#002C3E] px-7 py-4 font-semibold text-white transition hover:bg-[#01415d]"
//             >
//               Create Inquiry

//               <ArrowRight size={18} />

//             </Link>: <Link
//               to="/login"
//               className="flex items-center gap-2 rounded-xl bg-[#002C3E] px-7 py-4 font-semibold text-white transition hover:bg-[#01415d]"
//             >
//               Create Inquiry

//               <ArrowRight size={18} />

//             </Link>}

//             <button
//               className="rounded-xl border border-[#002C3E] px-7 py-4 font-semibold text-[#002C3E] transition hover:bg-[#002C3E] hover:text-white"
//             >
//               Learn More
//             </button>

//           </div>

//         </div>

//         {/* Right Side */}

//         <div className="flex justify-center">

//           <img
//             src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=900&q=80"
//             alt="Scooter Service"
//             className="w-full max-w-xl rounded-3xl shadow-2xl"
//           />

//         </div>

//       </div>
//     </section>
//     {/* ================= HOW IT WORKS ================= */}

//     <section className="bg-white py-24">

//       <div className="mx-auto max-w-7xl px-6">

//         <div className="text-center">

//           <p className="font-semibold uppercase tracking-widest text-blue-600">
//             Process
//           </p>

//           <h2 className="mt-3 text-4xl font-bold text-[#002C3E]">
//             How It Works
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-gray-600">
//             Our system makes booking scooter service simple, transparent,
//             and hassle-free.
//           </p>

//         </div>

//         <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

//           {/* Card 1 */}

//           <div className="rounded-2xl border bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl">

//             <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">

//               <ClipboardList className="text-blue-700" />

//             </div>

//             <span className="text-sm font-semibold text-blue-600">
//               STEP 01
//             </span>

//             <h3 className="mt-3 text-xl font-bold text-[#002C3E]">
//               Submit Inquiry
//             </h3>

//             <p className="mt-4 text-gray-600">
//               Fill in your scooter model, purchase year, and describe
//               the issue you're facing.
//             </p>

//           </div>

//           {/* Card 2 */}

//           <div className="rounded-2xl border bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl">

//             <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">

//               <SearchCheck className="text-green-700" />

//             </div>

//             <span className="text-sm font-semibold text-green-600">
//               STEP 02
//             </span>

//             <h3 className="mt-3 text-xl font-bold text-[#002C3E]">
//               Admin Reviews
//             </h3>

//             <p className="mt-4 text-gray-600">
//               Our garage reviews your request and decides whether to
//               accept or reject it.
//             </p>

//           </div>

//           {/* Card 3 */}

//           <div className="rounded-2xl border bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl">

//             <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">

//               <Bike className="text-orange-700" />

//             </div>

//             <span className="text-sm font-semibold text-orange-600">
//               STEP 03
//             </span>

//             <h3 className="mt-3 text-xl font-bold text-[#002C3E]">
//               Visit Garage
//             </h3>

//             <p className="mt-4 text-gray-600">
//               Bring your scooter along with your inquiry number on the
//               scheduled visit.
//             </p>

//           </div>

//           {/* Card 4 */}

//           <div className="rounded-2xl border bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl">

//             <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">

//               <BadgeCheck className="text-purple-700" />

//             </div>

//             <span className="text-sm font-semibold text-purple-600">
//               STEP 04
//             </span>

//             <h3 className="mt-3 text-xl font-bold text-[#002C3E]">
//               Service Complete
//             </h3>

//             <p className="mt-4 text-gray-600">
//               Once the work is finished, you can see the final status in
//               your dashboard.
//             </p>

//           </div>

//         </div>

//       </div>

//     </section>
//     {/* ================= WHY CHOOSE US ================= */}

//     <section className="bg-slate-50 py-24">

//       <div className="mx-auto max-w-7xl px-6">

//         <div className="text-center">

//           <p className="font-semibold uppercase tracking-widest text-blue-600">
//             Benefits
//           </p>

//           <h2 className="mt-3 text-4xl font-bold text-[#002C3E]">
//             Why Choose Our Garage System?
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-gray-600">
//             Designed to make the service process simple, organized, and
//             convenient for both customers and the garage.
//           </p>

//         </div>

//         <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

//           {/* Card 1 */}

//           <div className="rounded-2xl bg-white p-8 shadow transition hover:-translate-y-2 hover:shadow-xl">

//             <Clock3 className="mb-5 text-blue-600" size={42} />

//             <h3 className="text-xl font-bold text-[#002C3E]">
//               Save Time
//             </h3>

//             <p className="mt-3 text-gray-600">
//               Submit your inquiry online instead of waiting at the garage.
//             </p>

//           </div>

//           {/* Card 2 */}

//           <div className="rounded-2xl bg-white p-8 shadow transition hover:-translate-y-2 hover:shadow-xl">

//             <FileText className="mb-5 text-green-600" size={42} />

//             <h3 className="text-xl font-bold text-[#002C3E]">
//               Digital Records
//             </h3>

//             <p className="mt-3 text-gray-600">
//               Every service inquiry is stored securely for future reference.
//             </p>

//           </div>

//           {/* Card 3 */}

//           <div className="rounded-2xl bg-white p-8 shadow transition hover:-translate-y-2 hover:shadow-xl">

//             <Smartphone className="mb-5 text-orange-600" size={42} />

//             <h3 className="text-xl font-bold text-[#002C3E]">
//               Easy Tracking
//             </h3>

//             <p className="mt-3 text-gray-600">
//               View all your previous inquiries from your dashboard anytime.
//             </p>

//           </div>

//           {/* Card 4 */}

//           <div className="rounded-2xl bg-white p-8 shadow transition hover:-translate-y-2 hover:shadow-xl">

//             <ShieldCheck className="mb-5 text-purple-600" size={42} />

//             <h3 className="text-xl font-bold text-[#002C3E]">
//               Secure Login
//             </h3>

//             <p className="mt-3 text-gray-600">
//               Cookie-based authentication keeps your account protected.
//             </p>

//           </div>

//         </div>

//       </div>

//     </section>
//     {/* ================= REVIEW SECTION ================= */}

//     <section className="bg-[#002C3E] py-24">

//       <div className="mx-auto max-w-4xl px-6">

//         <div className="text-center">

//           <h2 className="text-4xl font-bold text-white">
//             Share Your Experience
//           </h2>

//           <p className="mt-4 text-slate-300">
//             Your feedback helps other customers and helps us improve our
//             garage service.
//           </p>

//         </div>

//         <div className="mt-12 rounded-3xl bg-white p-8 shadow-xl">

//           {user ? (

//             <form
//               onSubmit={handleReview}
//               className="space-y-6"
//             >

//               {/* Rating */}

//               <div>

//                 <label className="mb-2 block font-semibold">
//                   Rating
//                 </label>

//                 <select
//                   value={rating}
//                   onChange={(e) => setRating(Number(e.target.value))}
//                   className="w-full rounded-xl border px-4 py-3"
//                 >

//                   <option value={5}>★★★★★ (5)</option>
//                   <option value={4}>★★★★☆ (4)</option>
//                   <option value={3}>★★★☆☆ (3)</option>
//                   <option value={2}>★★☆☆☆ (2)</option>
//                   <option value={1}>★☆☆☆☆ (1)</option>

//                 </select>

//               </div>

//               {/* Comment */}

//               <div>

//                 <label className="mb-2 block font-semibold">
//                   Comment
//                 </label>

//                 <textarea
//                   rows="5"
//                   required
//                   value={comment}
//                   onChange={(e) => setComment(e.target.value)}
//                   placeholder="Tell us about your experience..."
//                   className="w-full rounded-xl border px-4 py-3"
//                 />

//               </div>

//               <div className="flex gap-4">

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="rounded-xl bg-[#002C3E] px-8 py-3 font-semibold text-white hover:bg-[#01384d]"
//                 >
//                   {loading ? "Submitting..." : "Submit Review"}
//                 </button>

//                 <Link
//                   to="/reviews"
//                   className="rounded-xl border border-[#002C3E] px-8 py-3 font-semibold text-[#002C3E]"
//                 >
//                   View All Reviews
//                 </Link>

//               </div>

//             </form>

//           ) : (

//             <div className="text-center">

//               <p className="text-gray-600">
//                 Login to share your experience with our garage.
//               </p>

//               <div className="mt-8 flex justify-center gap-4">

//                 <Link
//                   to="/login"
//                   className="rounded-xl bg-[#002C3E] px-8 py-3 text-white"
//                 >
//                   Login
//                 </Link>

//                 <Link
//                   to="/reviews"
//                   className="rounded-xl border border-[#002C3E] px-8 py-3 text-[#002C3E]"
//                 >
//                   View Reviews
//                 </Link>

//               </div>

//             </div>

//           )}

//         </div>

//       </div>

//     </section>
//     {/* =============== FOOTER ============== */}
//     <footer className="bg-[#001B27] text-white">

//       <div className="mx-auto max-w-7xl px-6 py-16">

//         <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

//           {/* Company */}

//           <div>

//             <h2 className="text-2xl font-bold">
//               GJ Company
//             </h2>

//             <p className="mt-4 text-sm leading-7 text-gray-400">
//               A modern Garage Management System that makes scooter service
//               booking simple, organized, and transparent for customers and
//               mechanics.
//             </p>

//           </div>

//           {/* Quick Links */}

//           <div>

//             <h3 className="mb-4 text-lg font-semibold">
//               Quick Links
//             </h3>

//             <ul className="space-y-3 text-gray-400">

//               <li>
//                 <Link to="/">
//                   Home
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/main">
//                   Create Inquiry
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/reviews">
//                   Reviews
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/login">
//                   Login
//                 </Link>
//               </li>

//             </ul>

//           </div>

//           {/* Features */}

//           <div>

//             <h3 className="mb-4 text-lg font-semibold">
//               Features
//             </h3>

//             <ul className="space-y-3 text-gray-400">

//               <li>Online Inquiry</li>

//               <li>Inquiry Tracking</li>

//               <li>Admin Dashboard</li>

//               <li>Customer Reviews</li>

//             </ul>

//           </div>

//           {/* Contact */}

//           <div>

//             <h3 className="mb-4 text-lg font-semibold">
//               Contact
//             </h3>

//             <ul className="space-y-3 text-gray-400">

//               <li>📍 Rajkot, Gujarat</li>

//               <li>📧 support@gjcompany.com</li>

//               <li>📞 +91 98765 43210</li>

//             </ul>

//           </div>

//         </div>

//         <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">

//           © {new Date().getFullYear()} GJ Company. All Rights Reserved.

//         </div>

//       </div>

//     </footer>
//   </>
//   );
// };

// export default Home;

// ------------cluade code----------

import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import api from "../utils/axios";
import { ArrowRight, CheckCircle2, Wrench, ShieldCheck, ClipboardList, SearchCheck, Bike, BadgeCheck, Clock, FileText, Smartphone, Star, Loader2, AlertCircle } from "lucide-react";

const Home = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleReview = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);

      await api.post("/review", {
        rating,
        comment,
      });

      setSubmitted(true);
      setComment("");
      setRating(5);
      setTimeout(() => setSubmitted(false), 4000);

    } catch (error) {
      setError(error.response?.data?.message || "Failed to submit review");
    } finally {
      setLoading(false);
    }
  };

  return (<>
    {/* ================= HERO ================= */}
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-400/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 lg:flex-row relative z-10">

        {/* Left Side */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-2 border border-amber-500/30 mb-6">
            <span className="text-amber-400 text-sm font-semibold">✨ Smart Garage Management</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            Service Your Scooter
            <span className="block bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              Without the Wait
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-400 leading-8 max-w-xl">
            Submit your service request online, get an instant inquiry number, and let our experienced mechanics prepare before you arrive. Fast, transparent, hassle-free.
          </p>

          {/* Features List */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 border border-amber-500/50">
                <CheckCircle2 size={16} className="text-amber-400" />
              </div>
              <span className="text-slate-300">Submit inquiries in seconds</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 border border-amber-500/50">
                <CheckCircle2 size={16} className="text-amber-400" />
              </div>
              <span className="text-slate-300">Real-time inquiry tracking</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 border border-amber-500/50">
                <CheckCircle2 size={16} className="text-amber-400" />
              </div>
              <span className="text-slate-300">Professional, certified mechanics</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            {user ? (
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 px-8 py-4 font-bold text-white transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 active:scale-[0.98]"
              >
                Create Service Request
                <ArrowRight size={20} />
              </Link>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 px-8 py-4 font-bold text-white transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 active:scale-[0.98]"
              >
                Get Started
                <ArrowRight size={20} />
              </Link>
            )}

            <button
              onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
              className="rounded-xl border border-white/20 hover:border-white/40 px-8 py-4 font-bold text-white transition-all duration-200 bg-white/5 hover:bg-white/10 backdrop-blur-sm"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center w-full lg:w-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=900&q=80"
              alt="Scooter Service"
              className="relative w-full max-w-lg rounded-3xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>

    {/* ================= HOW IT WORKS ================= */}
    <section id="how-it-works" className="relative overflow-hidden bg-slate-900 py-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest border border-amber-500/30 mb-4">
            Simple Process
          </span>

          <h2 className="text-4xl lg:text-5xl font-black text-white mt-4 mb-4">
            How It Works
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Four simple steps to get your scooter serviced quickly and professionally.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Step 1 */}
          <div className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-amber-500/20 group-hover:bg-amber-500/30 transition-all duration-300 mb-6">
              <ClipboardList className="text-amber-400" size={28} />
            </div>

            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Step 01
            </span>

            <h3 className="mt-3 text-xl font-bold text-white">
              Submit Inquiry
            </h3>

            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              Fill in your scooter model, year, and describe the issue. Get an instant inquiry number.
            </p>
          </div>

          {/* Step 2 */}
          <div className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-all duration-300 mb-6">
              <SearchCheck className="text-blue-400" size={28} />
            </div>

            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
              Step 02
            </span>

            <h3 className="mt-3 text-xl font-bold text-white">
              We Review
            </h3>

            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              Our mechanics analyze your request and prepare before your visit. You'll be notified of approval.
            </p>
          </div>

          {/* Step 3 */}
          <div className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-all duration-300 mb-6">
              <Bike className="text-cyan-400" size={28} />
            </div>

            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
              Step 03
            </span>

            <h3 className="mt-3 text-xl font-bold text-white">
              Visit Garage
            </h3>

            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              Bring your scooter and inquiry number. Service starts right away—no waiting.
            </p>
          </div>

          {/* Step 4 */}
          <div className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-emerald-500/20 group-hover:bg-emerald-500/30 transition-all duration-300 mb-6">
              <BadgeCheck className="text-emerald-400" size={28} />
            </div>

            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              Step 04
            </span>

            <h3 className="mt-3 text-xl font-bold text-white">
              Complete & Track
            </h3>

            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              Service finished! View your status, service details, and cost in your dashboard.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ================= WHY CHOOSE US ================= */}
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest border border-amber-500/30 mb-4">
            Why Us
          </span>

          <h2 className="text-4xl lg:text-5xl font-black text-white mt-4 mb-4">
            Why Choose Us?
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Built for customers and mechanics. Transparent, organized, and designed for convenience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-white/10">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500/20 mb-6">
              <Clock size={28} className="text-amber-400" />
            </div>

            <h3 className="text-xl font-bold text-white">Save Time</h3>

            <p className="mt-3 text-slate-400 text-sm">
              No more waiting in queues. Submit online and arrive at your scheduled time.
            </p>
          </div>

          {/* Card 2 */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-white/10">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/20 mb-6">
              <FileText size={28} className="text-blue-400" />
            </div>

            <h3 className="text-xl font-bold text-white">Digital Records</h3>

            <p className="mt-3 text-slate-400 text-sm">
              All service history, invoices, and details stored securely online forever.
            </p>
          </div>

          {/* Card 3 */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-white/10">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/20 mb-6">
              <Smartphone size={28} className="text-cyan-400" />
            </div>

            <h3 className="text-xl font-bold text-white">Track Anytime</h3>

            <p className="mt-3 text-slate-400 text-sm">
              Monitor your current and past service requests from your dashboard 24/7.
            </p>
          </div>

          {/* Card 4 */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-lg hover:shadow-white/10">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/20 mb-6">
              <ShieldCheck size={28} className="text-emerald-400" />
            </div>

            <h3 className="text-xl font-bold text-white">Secure & Safe</h3>

            <p className="mt-3 text-slate-400 text-sm">
              Enterprise-level security with encrypted authentication to protect your data.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ================= REVIEW SECTION ================= */}
    <section className="relative overflow-hidden bg-slate-900 py-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-4xl px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Share Your Experience
          </h2>

          <p className="text-slate-400 text-lg">
            Help other customers and help us improve. Your feedback matters.
          </p>
        </div>

        <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl transition-all duration-500 hover:border-white/30 hover:shadow-amber-500/20">
          {user ? (
            <form onSubmit={handleReview} className="space-y-6">
              {/* Success Message */}
              {submitted && (
                <div className="flex items-start gap-3 bg-emerald-500/15 text-emerald-200 p-4 rounded-2xl border border-emerald-500/30 shadow-lg shadow-emerald-500/10 animate-in fade-in slide-in-from-top-2 duration-300">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                  <div className="text-sm font-medium">Thanks for your review! It helps us improve.</div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="flex items-start gap-3 bg-red-500/15 text-red-200 p-4 rounded-2xl border border-red-500/30 shadow-lg shadow-red-500/10 animate-in fade-in slide-in-from-top-2 duration-300">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-400" />
                  <div className="text-sm font-medium">{error}</div>
                </div>
              )}

              {/* Rating */}
              <div>
                <label className="block text-sm font-bold text-slate-300 uppercase tracking-widest mb-3">
                  Rating
                </label>

                <select
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                  className="w-full rounded-xl border border-white/15 bg-white/5 text-white px-4 py-3.5 focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 focus:bg-white/10 backdrop-blur-sm"
                >
                  <option value={5}>⭐⭐⭐⭐⭐ Excellent (5)</option>
                  <option value={4}>⭐⭐⭐⭐ Good (4)</option>
                  <option value={3}>⭐⭐⭐ Average (3)</option>
                  <option value={2}>⭐⭐ Fair (2)</option>
                  <option value={1}>⭐ Poor (1)</option>
                </select>
              </div>

              {/* Comment */}
              <div>
                <label className="block text-sm font-bold text-slate-300 uppercase tracking-widest mb-3">
                  Your Review
                </label>

                <textarea
                  rows="5"
                  required
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your experience with our service. What did you like? What could we improve?"
                  className="w-full rounded-xl border border-white/15 bg-white/5 text-white placeholder-slate-500 px-4 py-3.5 focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 focus:bg-white/10 backdrop-blur-sm resize-none"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Star className="w-5 h-5" />
                      <span>Submit Review</span>
                    </>
                  )}
                </button>

                <Link
                  to="/reviews"
                  className="rounded-xl border border-white/20 hover:border-white/40 px-8 py-3.5 font-bold text-white transition-all duration-200 bg-white/5 hover:bg-white/10 backdrop-blur-sm"
                >
                  View All Reviews
                </Link>
              </div>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-slate-700/50 mb-6">
                <Star className="w-8 h-8 text-amber-400" />
              </div>

              <p className="text-slate-300 text-lg mb-8">
                Sign in to share your experience and help other customers.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 active:scale-[0.98]"
                >
                  Sign In
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  to="/reviews"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 hover:border-white/40 px-8 py-3.5 font-bold text-white transition-all duration-200 bg-white/5 hover:bg-white/10 backdrop-blur-sm"
                >
                  Read Reviews
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>

    {/* =============== FOOTER ============== */}
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Company */}
          <div>
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-white font-black text-lg shadow-lg shadow-amber-500/40 mb-4">
              GJ
            </div>

            <p className="text-sm leading-7 text-slate-400 mt-4">
              A modern garage management system that makes scooter service booking simple, organized, and transparent for customers and mechanics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white uppercase tracking-wide">
              Navigate
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/main" className="hover:text-amber-400 transition-colors">
                  Service Request
                </Link>
              </li>

              <li>
                <Link to="/reviews" className="hover:text-amber-400 transition-colors">
                  Reviews
                </Link>
              </li>

              <li>
                <Link to="/login" className="hover:text-amber-400 transition-colors">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white uppercase tracking-wide">
              Features
            </h3>

            <ul className="space-y-3 text-slate-400 text-sm">
              <li>✓ Online Service Requests</li>
              <li>✓ Real-time Tracking</li>
              <li>✓ Admin Dashboard</li>
              <li>✓ Customer Reviews</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white uppercase tracking-wide">
              Contact
            </h3>

            <ul className="space-y-3 text-slate-400 text-sm">
              <li>📍 Rajkot, Gujarat</li>
              <li>📧 support@gjcompany.com</li>
              <li>📞 +91 98765 43210</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} GJ Garage Management. All Rights Reserved. | Designed with ❤️
          </p>
        </div>
      </div>
    </footer>
  </>
  );
};

export default Home;