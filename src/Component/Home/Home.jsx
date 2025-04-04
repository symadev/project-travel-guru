import React from "react";
import logo from "../../assets/images/icons/logo.png";
import bg from "../../assets/images/bg/Rectangle 1.png";
import bg1 from "../../assets/images/bg/sundorbon.png";
import bg2 from "../../assets/images/bg/Sreemongol.png";
import bg3 from "../../assets/images/bg/Sajek.png";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        <nav className="flex justify-between items-center text-white">
          <div className="flex items-center space-x-4">
            <img className="w-40" src={logo} alt="Travel Guru Logo" />
            <input type="text" placeholder="Search your Destination..." className="input input-bordered w-80 bg-white text-black" />
          </div>
          <div className="space-x-6 text-lg font-medium">
            <a href="#" className="hover:text-yellow-400">News</a>
            <a href="#" className="hover:text-yellow-400">Destination</a>
            <a href="#" className="hover:text-yellow-400">Blog</a>
            <a href="#" className="hover:text-yellow-400">Contact</a>
            <button className="btn btn-warning">Login</button>
          </div>
        </nav>
        
        <div className="mt-16 flex justify-between items-center text-white">
          <div className="max-w-lg">
            <h1 className="text-6xl font-bold">COX'S BAZAR</h1>
            <p className="mt-4 text-lg">Cox's Bazar is a city, fishing port, tourism centre, and district headquarters in southeastern Bangladesh...</p>
            <button className="btn btn-warning mt-4">Booking →</button>
          </div>
          
          <div className="flex space-x-6">
            <div className="card w-64 shadow-xl border-2 border-yellow-500 ">
              <figure><img className="h-72 w-full object-cover" src={bg3} alt="Sajek" /></figure>
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">SAJEK</div>
            </div>
            <div className="card w-64 shadow-xl   border-2 border-yellow-500">
              <figure><img className="h-72 w-full object-cover" src={bg2} alt="Sreemangal" /></figure>
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">SREEMANGAL</div>
            </div>
            <div className="card w-64 shadow-xl  border-2 border-yellow-500">
              <figure><img className="h-72 w-full object-cover" src={bg1} alt="Sundarbans" /></figure>
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">SUNDARBANS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
