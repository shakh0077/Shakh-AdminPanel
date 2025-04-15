import React, { useState } from "react";
import { BiConversation, BiLogIn } from "react-icons/bi";
import { IoPeople,  } from "react-icons/io5";
import { IoIceCream } from "react-icons/io5";
import {
  MdDashboardCustomize,
  MdFiberSmartRecord,
  MdOutlineInventory2,
} from "react-icons/md";
import { SiHandshakeProtocol } from "react-icons/si";
import { FaBars } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { CgMoreVerticalAlt } from "react-icons/cg";
import AccountPage from "../Components/AcountPage";

function GlobalLayout() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex ">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-[290px]" : "w-[60px]"
        } duration-400 py-5 bg-black  text-white flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 mb-6  ">
          {isOpen ? (
            <h1 className="flex items-center text-xl lg:text-xl text-orange-500 font-extrabold">
               <IoIceCream className="text-white" />
              <span className="text-2xl">M</span>uz<span className="text-blue-500"><span className="text-2xl">Q</span>aymoq</span>
            </h1>
          ) : (
            <span className="w-6 h-6" /> // joy band qilish uchun
          )}
          <button
            onClick={toggleSidebar}
            className="text-white text-xl cursor-pointer focus:outline-none"
          >
            <FaBars />
          </button>
        </div>

        {/* Navigation */}
        <aside className="px-4 mt-8  flex-1">
          <nav className="flex flex-col gap-3">
            <Link to="/dashboards" className="flex focus:bg-blue-600 rounded-2xl items-center gap-3 justify-start py-2">
              <MdDashboardCustomize size={20} />
              {isOpen && <span>Dashboards</span>}
            </Link>
            <Link to="/orders" className="flex focus:bg-blue-600 rounded-2xl items-center gap-3 justify-start py-2">
              <MdFiberSmartRecord size={20} />
              {isOpen && <span>Orders</span>}
            </Link>
            <Link to="/customers" className="flex focus:bg-blue-600 rounded-2xl items-center gap-3 justify-start py-2">
              <IoPeople size={20} />
              {isOpen && <span>Customers</span>}
            </Link>
            <Link to="/inventory" className="flex focus:bg-blue-600 rounded-2xl items-center gap-3 justify-start py-2">
              <MdOutlineInventory2 size={20} />
              {isOpen && <span>Inventory</span>}
            </Link>
            <Link to="/conversations" className="flex focus:bg-blue-600 rounded-2xl items-center gap-3 justify-start py-2">
              <BiConversation size={20} />
              {isOpen && <span>Conversations</span>}
            </Link>

          </nav>
          <div className="mt-50" >
          <Link to="/" className="flex items-center gap-3 py-2  rounded-2xl bg-red-500 justify-center">
              <BiLogIn size={18} />
              {isOpen && <span>Sig in</span>}
            </Link>
          </div>
        </aside>
      </div>

      {/* Main Content */}
      <div className="w-full bg-black/90 text-white">
      <div className='flex justify-between items-center px-5 py-5'>
            <h1 className='text-2xl font-bold py-2 cursor-pointer'><CgMoreVerticalAlt /></h1>
            <div className='flex items-center gap-3.5 '>
               <select className='bg-blue-600 text-white py-2 px-3 outline-none rounded-2xl' name="name" id="name">
                <option value="nanny’s shop">Nanny’s Shop</option>
                <option value="nanny’s shop">Hello </option>
                <option value="nanny’s shop">Nann</option>
               </select>  
               <AccountPage/>
            </div>
          
        </div>
      <main className="flex-1  py-5 overflow-auto bg-white">
        <Outlet />
      </main>
      </div>
    </div>
  );
}

export default GlobalLayout;
