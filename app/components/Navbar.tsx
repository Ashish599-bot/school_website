export function Navbar() {
  return (
    <nav className="flex justify-between items-center mx-auto py-6 px-4 bg-blue-900 w-full fixed top-0">
      <div className="text-2xl font-bold text-white ">T3 Academy</div>
      <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
        <li>
          <a className="hover:text-gray-400 cursor-pointer shadow-lg text-white">
            Home
          </a>
        </li>

        <li>
          <a className="hover:text-gray-400 cursor-pointer shadow-lg text-white">
            About Us
          </a>
        </li>
        <li>
          <a className="hover:text-gray-400 cursor-pointer shadow-lg text-white">
            Contact Us
          </a>
        </li>
        <li>
          <a className="hover:text-gray-400 cursor-pointer shadow-lg text-white">
            Alumni
          </a>
        </li>
      </ul>
    </nav>
  );
}
