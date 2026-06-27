import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../storage/auth";
function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {storeTokenInLS}=useAuth()
  
  const handleLogin = async () => {
    
    const response = await fetch("https://backend-1-lsgp.onrender.com/api/login", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    
    const data = await response.json();

    console.log("Full response:", data);
    console.log("Token:", data.token);
    
    if (data.success) {
      storeTokenInLS(data.token);
    
      console.log("Stored token:", localStorage.getItem("token"));
    
      navigate("/home");
    }
else{
  alert("wrong ")
}

    // console.log(data);
    // console.log("login sucessfully done")

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden px-4">

    {/* Background Glow */}
    <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl top-[-120px] left-[-120px]" />
    <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl bottom-[-100px] right-[-100px]" />
  
    {/* Card */}
    <div className="relative w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-[0_0_60px_rgba(59,130,246,0.2)]">
  
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-3xl shadow-lg shadow-blue-500/30">
          🔐
        </div>
      </div>
  
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white tracking-tight">
          Welcome Back
        </h1>
  
        <p className="text-zinc-400 text-sm mt-2">
          Login to continue your journey
        </p>
      </div>
  
      {/* Email */}
      <div className="mb-5">
        <label className="block text-sm text-zinc-300 mb-2">
          Email
        </label>
  
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-2xl bg-zinc-900/80 border border-zinc-700 text-white placeholder-zinc-500 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-400/10 transition-all duration-300"
        />
      </div>
  
      {/* Password */}
      <div className="mb-3">
        <label className="block text-sm text-zinc-300 mb-2">
          Password
        </label>
  
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-2xl bg-zinc-900/80 border border-zinc-700 text-white placeholder-zinc-500 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-400/10 transition-all duration-300"
        />
      </div>
  
      {/* Forgot Password */}
      <div className="flex justify-end mb-6">
        <a
          href="/forgot"
          className="text-sm text-blue-400 hover:text-cyan-300 transition"
        >
          Forgot password?
        </a>
      </div>
  
      {/* Login Button */}
      <button
        onClick={handleLogin}
        className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 text-white font-bold tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-blue-500/25"
      >
        Login →
      </button>
  
      {/* Divider */}
      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-zinc-700"></div>
        <span className="text-zinc-500 text-sm">or</span>
        <div className="flex-1 h-px bg-zinc-700"></div>
      </div>
  
      {/* Google Login */}
      <button className="w-full py-3 rounded-2xl bg-white/5 border border-zinc-700 text-white hover:bg-white/10 transition-all duration-300">
        Continue with Google
      </button>
  
      {/* Footer */}
      <p className="text-center text-zinc-500 text-sm mt-6">
        Don’t have an account?{" "}
        <a
          href="/register"
          className="text-blue-400 hover:text-cyan-300 hover:underline transition"
        >
          Register
        </a>
      </p>
  
    </div>
  </div>
  );
}

export default Login;