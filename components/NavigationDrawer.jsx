import React, {useState} from 'react'

export default function NavigationDrawer() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className={`w-1/3 h-full drawer ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <button
        className="bg-gray-800 w-48 text-red-600 px-4 py-2"
        onClick={toggleDrawer}>
        Toggle Drawer
      </button>
      <div className="p-4 text-white">
        <ul>
          <li className="py-2 cursor-pointer">Home</li>
          <li className="py-2 cursor-pointer">About</li>
          <li className="py-2 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  )
}
