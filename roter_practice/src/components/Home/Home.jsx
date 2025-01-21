import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        
      
        <main className="flex flex-col items-center px-4 text-center space-y-10">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mt-10">
            Welcome to Our Simple Home Page
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Practice
          </p>
          <a
            href="#download"
            className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
          >
            Download Now
          </a>
      
          <img
            src=""
            alt="Image "
            className="w-72 sm:w-96"
          />
        </main>
      
        
      </div>
      
    );
}