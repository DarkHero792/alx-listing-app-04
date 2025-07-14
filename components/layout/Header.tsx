// components/layout/Header.tsx
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex flex-col md:flex-row items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="Logo" width={40} height={40} />
        <span className="text-xl font-bold text-gray-800">StayVista</span>
      </div>

      {/* Search Bar */}
      <div className="w-full md:w-1/2 my-4 md:my-0">
        <input
          type="text"
          placeholder="Search location or property"
          className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-4">
        <button className="text-gray-700 hover:text-blue-500">Sign in</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
          Sign up
        </button>
      </div>

      {/* Accommodation Types (Horizontal scrollable on small screens) */}
      <nav className="w-full mt-4 md:mt-0 md:ml-6 overflow-x-auto whitespace-nowrap text-sm text-gray-600">
        <ul className="flex gap-4">
          <li className="hover:text-blue-600 cursor-pointer">Rooms</li>
          <li className="hover:text-blue-600 cursor-pointer">Mansion</li>
          <li className="hover:text-blue-600 cursor-pointer">Countryside</li>
          <li className="hover:text-blue-600 cursor-pointer">Beach</li>
          <li className="hover:text-blue-600 cursor-pointer">Cabins</li>
          <li className="hover:text-blue-600 cursor-pointer">Chalets</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
