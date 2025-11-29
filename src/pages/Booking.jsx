import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Booking(){
  return (
    <div>
      <Navbar />
      <div className="pt-28 max-w-3xl mx-auto px-4">
        <h2 className="text-xl text-white font-bold">Booking (placeholder)</h2>
        <div className="mt-4 bg-slate-900/30 rounded p-6">Here you will integrate date/time picker and payment step.</div>
      </div>
      <Footer />
    </div>
  );
}
