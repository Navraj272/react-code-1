import React from "react";
import { useNavigate } from "react-router-dom";

function Card() {
    const navigate=useNavigate()

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src="https://via.placeholder.com/300x200" // Replace with the actual photo URL
        alt="Navraj Singh Bhatia"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800">Navraj Singh Bhatia</h2>
        <p className="text-gray-600 mt-2">Web Development Enthusiast</p>
        <div className="mt-4">
          <p className="text-gray-800">
            <strong>Contact:</strong> navraj@example.com
          </p>
        </div>
        <button 
        onClick={()=>(
            navigate('/contact')
        )}
        className="mt-6 w-full px-4 py-2 bg-blue-600 text-white font-medium text-center rounded-lg hover:bg-blue-700">
          Connect
        </button>
      </div>
    </div>
  );
}

export default Card;
