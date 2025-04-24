export default function Navbar() {
    return (
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">Nielly Web Dev</div>
        <ul className="flex space-x-4 text-gray-600">
          <li><a href="#" className="hover:text-blue-600">Home</a></li>
          <li><a href="#" className="hover:text-blue-600">Services</a></li>
          <li><a href="#" className="hover:text-blue-600">Portfolio</a></li>
          <li><a href="#" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
    );
  }
  