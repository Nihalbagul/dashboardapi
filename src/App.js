// App.js
import React from "react";
import { ProductProvider } from "./context/ProductContext";
import ProductList from "./components/ProductList";

function App() {
  return (
    <ProductProvider>
      <div className="App min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 p-5 flex flex-col items-center">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-500 shadow-2xl">
            Product Dashboard
          </h1>
          <p className="mt-2 text-lg text-gray-300 shadow-md">
            Browse and manage your products efficiently.
          </p>
        </header>

        <main className="w-full max-w-4xl bg-gradient-to-br from-purple-300 via-pink-300 to-yellow-300 rounded-3xl shadow-2xl p-8 transform transition-transform hover:scale-105 hover:shadow-3xl">
          <ProductList />
        </main>

        <footer className="mt-10 text-center bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-lg shadow-lg">
          <p className="text-white text-lg font-semibold">
            &copy; 2024 Nihal Bagul. All rights reserved.
          </p>
        </footer>
      </div>
    </ProductProvider>
  );
}

export default App;
