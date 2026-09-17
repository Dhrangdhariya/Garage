// import React, { useState, useContext } from 'react'
// import { AuthContext } from '../context/AuthContext';
// import { useNavigate, Link } from 'react-router-dom';
// import { Mail, Lock, KeyRound, Loader2, AlertCircle } from 'lucide-react';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [otp, setOtp] = useState('');
//   const [showOTP, setShowOTP] = useState(false);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const { login, verifyOTP } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     try {
//       if (!showOTP) {
//         const data = await login(email, password);
//         if (data.role === 'admin') {
//           navigate('/admin-dashboard');
//         }
//         else navigate('/');
//       } else {
//         const data = await login(email, otp);
//         if (data.role === 'admin') {
//           navigate('/admin-dashboard');
//         }
//         else navigate('/');
//       }
//     } catch (error) {
//       if (error.needsVerification) {
//         setShowOTP(true);
//         setError('Account not verified. A new OTP has been sent to your email.');
//       } else {
//         setError(error.message || error);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-[calc(100vh-4.5rem)] flex items-center justify-center relative overflow-hidden px-4 py-12 bg-slate-50">
//       <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-indigo-300/30 rounded-full blur-[100px] pointer-events-none animate-float-slow"></div>
//       <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-sky-200/40 rounded-full blur-[120px] pointer-events-none animate-float-reverse"></div>
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-violet-200/30 rounded-full blur-[90px] pointer-events-none animate-float-slow"></div>

//       <div className="w-full max-w-md backdrop-blur-xl bg-white/70 border border-white/40 shadow-2xl rounded-3xl p-8 sm:p-10 relative z-10 transition-all duration-300 hover:shadow-indigo-100/40">

//         <div className="flex flex-col items-center mb-8">
//           <div className="h-12 w-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-extrabold text-xl shadow-lg mb-3">
//             GJ
//           </div>
//           <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Welcome Back</h2>
//           <p className="text-slate-500 text-xs mt-1 text-center">
//             Sign in to manage repair orders and tracker status
//           </p>
//         </div>

//         {error && (
//           <div className="flex items-start gap-3 bg-red-50 text-red-700 p-4 rounded-2xl mb-6 text-xs border border-red-100 shadow-sm">
//             <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
//             <div className="font-medium leading-relaxed">{error}</div>
//           </div>
//         )}
//         <form onSubmit={handleSubmit} className="space-y-5">
//           {!showOTP ? (
//             <>
//               <div className="space-y-1.5">
//                 <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
//                   Email Address
//                 </label>
//                 <div className="relative group">
//                   <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 group-focus-within:text-slate-900 transition-colors duration-200">
//                     <Mail className="w-4 h-4" />
//                   </span>
//                   <input
//                     type="email"
//                     required
//                     placeholder="name@example.com"
//                     className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200/80 bg-white/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all duration-200 focus:bg-white"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>
//               </div>

//               <div className="space-y-1.5">
//                 <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
//                   Password
//                 </label>
//                 <div className="relative group">
//                   <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 group-focus-within:text-slate-900 transition-colors duration-200">
//                     <Lock className="w-4 h-4" />
//                   </span>
//                   <input
//                     type="password"
//                     required
//                     placeholder="••••••••"
//                     className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200/80 bg-white/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all duration-200 focus:bg-white"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>
//               </div>
//             </>
//           ) : (
//             <div className="space-y-1.5">
//               <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
//                 Verification Code (OTP)
//               </label>
//               <div className="relative group">
//                 <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 group-focus-within:text-slate-900 transition-colors duration-200">
//                   <KeyRound className="w-4 h-4" />
//                 </span>
//                 <input
//                   type="text"
//                   required
//                   placeholder="6-digit code"
//                   className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200/80 bg-white/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all duration-200 focus:bg-white font-bold tracking-widest text-center text-lg"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   maxLength="6"
//                 />
//               </div>
//             </div>
//           )}

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white font-semibold py-3.5 rounded-2xl hover:bg-slate-800 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none transition-all duration-200 shadow-lg shadow-slate-900/10 cursor-pointer"
//           >
//             {loading ? (
//               <>
//                 <Loader2 className="w-4 h-4 animate-spin" />
//                 <span>Processing...</span>
//               </>
//             ) : (
//               <span>{showOTP ? 'Verify & Log In' : 'Sign In'}</span>
//             )}
//           </button>
//         </form>

//         <p className="text-center mt-6 text-sm text-slate-600">
//           Don't have an account?{' '}
//           <Link to="/register" className="text-slate-900 font-bold hover:underline transition-all">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   )
// }
// export default Login

//--------cluade code---------

import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, KeyRound, Loader2, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login, verifyOTP } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      if (!showOTP) {
        const data = await login(email, password);
        if (data.role === 'admin') {
          navigate('/admin-dashboard');
        }
        else navigate('/');
      } else {
        const data = await login(email, otp);
        if (data.role === 'admin') {
          navigate('/admin-dashboard');
        }
        else navigate('/');
      }
    } catch (error) {
      if (error.needsVerification) {
        setShowOTP(true);
        setError('');
      } else {
        setError(error.message || error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4.5rem)] flex items-center justify-center relative overflow-hidden px-4 py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-400/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Card Container */}
      <div className="w-full max-w-md relative z-10">
        {/* Progress Indicator */}
        <div className="flex items-center justify-between mb-8 px-2">
          <div className="flex flex-col items-center flex-1">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${showOTP
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-400/50'
                : 'bg-amber-500 text-white border border-amber-600 shadow-lg shadow-amber-500/30'
              }`}>
              1
            </div>
            <p className="text-xs font-medium text-slate-400 mt-2">Credentials</p>
          </div>

          <div className={`flex-1 h-1 mx-4 rounded-full transition-all duration-500 ${showOTP ? 'bg-emerald-500/40' : 'bg-slate-700'
            }`}></div>

          <div className="flex flex-col items-center flex-1">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${showOTP
                ? 'bg-amber-500 text-white border border-amber-600 shadow-lg shadow-amber-500/30'
                : 'bg-slate-700 text-slate-500 border border-slate-600'
              }`}>
              2
            </div>
            <p className="text-xs font-medium text-slate-400 mt-2">Verification</p>
          </div>
        </div>

        {/* Card */}
        <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 sm:p-10 shadow-2xl transition-all duration-500 hover:border-white/30 hover:shadow-amber-500/20">

          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-amber-500/40 mb-4 transform transition-transform duration-300 hover:scale-105">
              GJ
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">
              {showOTP ? 'Verify Account' : 'Welcome Back'}
            </h1>
            <p className="text-slate-400 text-sm mt-3 text-center leading-relaxed max-w-xs">
              {showOTP
                ? 'Enter the verification code sent to your email'
                : 'Sign in to manage your service requests and track status'
              }
            </p>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="flex items-start gap-3 bg-red-500/15 text-red-200 p-4 rounded-2xl mb-6 text-sm border border-red-500/30 shadow-lg shadow-red-500/10 animate-in fade-in slide-in-from-top-2 duration-300">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-400" />
              <div className="font-medium leading-relaxed">{error}</div>
            </div>
          )}

          {/* OTP Notification */}
          {showOTP && !error && (
            <div className="flex items-start gap-3 bg-emerald-500/15 text-emerald-200 p-4 rounded-2xl mb-6 text-sm border border-emerald-500/30 shadow-lg shadow-emerald-500/10 animate-in fade-in slide-in-from-top-2 duration-300">
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400 flex-shrink-0" />
              <div className="leading-relaxed font-medium">A 6-digit verification code has been sent to your email.</div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {!showOTP ? (
              <>
                {/* Email Field */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest">
                    Email Address
                  </label>
                  <div className="relative group">
                    <Mail className="absolute inset-y-0 left-0 flex items-center pl-4 w-4 h-4 text-slate-500 group-focus-within:text-amber-400 transition-colors duration-200 pointer-events-none" />
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-white/15 bg-white/5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 focus:bg-white/10 backdrop-blur-sm"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest">
                    Password
                  </label>
                  <div className="relative group">
                    <Lock className="absolute inset-y-0 left-0 flex items-center pl-4 w-4 h-4 text-slate-500 group-focus-within:text-amber-400 transition-colors duration-200 pointer-events-none" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-white/15 bg-white/5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 focus:bg-white/10 backdrop-blur-sm"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* OTP Input Field */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest">
                    Verification Code
                  </label>
                  <div className="relative group">
                    <KeyRound className="absolute inset-y-0 left-0 flex items-center pl-4 w-4 h-4 text-slate-500 group-focus-within:text-amber-400 transition-colors duration-200 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="000000"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-white/15 bg-white/5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20 transition-all duration-200 focus:bg-white/10 backdrop-blur-sm font-bold tracking-[0.3em] text-center text-lg"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      maxLength="6"
                    />
                  </div>
                  <p className="text-xs text-slate-500 text-center mt-2">Check your spam folder if you don't see it</p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full group flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer mt-7 text-base"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{showOTP ? 'Verifying...' : 'Signing In...'}</span>
                </>
              ) : (
                <>
                  <span>{showOTP ? 'Verify & Sign In' : 'Sign In'}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
                </>
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          {!showOTP && (
            <div className="flex items-center justify-center gap-1 mt-7 pt-7 border-t border-white/10">
              <p className="text-sm text-slate-400">Don't have an account?</p>
              <Link
                to="/register"
                className="text-amber-400 font-semibold hover:text-amber-300 transition-colors duration-200 flex items-center gap-1"
              >
                Sign Up
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>

        {/* Footer Text */}
        <p className="text-center text-xs text-slate-500 mt-8">
          Keep your credentials secure. Never share your password with anyone.
        </p>
      </div>
    </div>
  )
}

export default Login