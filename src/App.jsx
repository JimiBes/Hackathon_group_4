import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="w-[100dvw]">
      <header className="flex items-center justify-between bg-white p-4 border-b-2 border-gray-200">
        {/* Logo */}
        <div className="text-lg font-bold">Logo</div>
        {/* Navigation */}
        <nav className="flex items-center space-x-4">
          <li>
            {" "}
            <a href="#" className="text-gray-500 hover:text-gray-700">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Contact
            </a>
          </li>
          <li>
            {" "}
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Another Link
            </a>
          </li>
        </nav>
      </header>
      {/* container milieu*/}
      <main className="flex p-4">
        {/* section gauche*/}
        <section className="flex-1 p-4 border-r-2 border-gray-200">
          <div className="p-4 border border-gray-200 mb-4">Block 1</div>
          <div className="p-4 border border-gray-200 mb-4">Block 2</div>
        </section>
        {/* section droite*/}
        <section className="flex-1 p-4">
          <div className="p-4 border border-gray-200 mb-4">Block 3</div>
          <div className="p-4 border border-gray-200 mb-4">Block 4</div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white p-4 border-t-2 border-gray-200 flex justify-between">
        <div className="text-lg font-bold">Logo</div>
        <div className="text-gray-500">Contact Us</div>
      </footer>
    </div>
  );
  // useEffect(() => {
  //   axios
  //     .get(`url`)
  //     .then((response) => {
  //       setExemple(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error.message);
  //     });
  // }, []);
  // return (
  //   // <Router>
  //   //   <div>
  //   //     <Routes>
  //   //       <Route path="/" element={<Home />} />
  //   //       <Route
  //   //         path="/Page_principale"
  //   //         element={}
  //   //       />
  //   //       <Route path="/about" element={<About/>} />
  //   //     </Routes>
  //   //   </div>
  //   // </Router>
  // );
}

export default App;
