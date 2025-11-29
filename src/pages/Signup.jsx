import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Signup(){
  return (
    <div>
      <Navbar />
      <div className="pt-28 max-w-md mx-auto px-4">
        <div className="bg-slate-900/30 rounded-2xl p-6">
          <h2 className="text-2xl text-white font-bold">Create an account</h2>
          <form className="mt-4 grid gap-3">
            <input placeholder="Full name" className="px-4 py-3 rounded bg-transparent border border-slate-700" />
            <input placeholder="Email" className="px-4 py-3 rounded bg-transparent border border-slate-700" />
            <input placeholder="Password" type="password" className="px-4 py-3 rounded bg-transparent border border-slate-700" />
            <button className="mt-2 px-4 py-3 bg-indigo-600 rounded text-white">Sign up</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
