import React, { useState } from 'react';
import { FiPlus, FiShoppingBag, FiClock, FiCheckCircle, FiXCircle, FiRotateCcw, FiAlertTriangle, FiUsers } from 'react-icons/fi';

const Orders = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showNewProductModal, setShowNewProductModal] = useState(false);

  // Mock data
  const stats = {
    all: 1245,
    pending: 42,
    completed: 1103,
    canceled: 67,
    returned: 23,
    damaged: 10,
    thisWeek: 156,
    abandoned: 89,
    customers: 876,
    thisWeekCustomers: 45
  };

  const tabs = [
    { id: 'all', label: 'All Orders' },
    { id: 'pending', label: 'Pending', icon: <FiClock className="mr-2" /> },
    { id: 'completed', label: 'Completed', icon: <FiCheckCircle className="mr-2" /> },
    { id: 'canceled', label: 'Canceled', icon: <FiXCircle className="mr-2" /> },
    { id: 'returned', label: 'Returned', icon: <FiRotateCcw className="mr-2" /> },
    { id: 'damaged', label: 'Damaged', icon: <FiAlertTriangle className="mr-2" /> },
    { id: 'thisWeek', label: 'This Week' },
    { id: 'abandoned', label: 'Abandoned Cart' },
    { id: 'customers', label: 'Customers', icon: <FiUsers className="mr-2" /> },
    { id: 'thisWeekCustomers', label: 'This Week' }
  ];

  return (
    <div className="p-5 bg-gray-50 text-black min-h-screen">


      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Orders</h1>
        <button 
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          onClick={() => setShowNewProductModal(true)}
        >
          <FiPlus className="mr-2" />
          New Product
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
        {tabs.map((tab) => (
          <div 
            key={tab.id}
            className={`p-4 rounded-lg cursor-pointer transition-all ${activeTab === tab.id ? 'bg-blue-100 border-l-4 border-blue-600' : 'bg-white hover:bg-gray-100'}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {tab.icon && tab.icon}
                <span className={activeTab === tab.id ? 'font-semibold text-blue-800' : 'text-gray-700'}>
                  {tab.label}
                </span>
              </div>
              <span className="text-lg font-bold">{stats[tab.id]}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Content Area */}
      {stats.all === 0 ? (
        <div className="bg-white rounded-lg p-8 text-center">
          <FiShoppingBag className="mx-auto text-4xl text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">No Orders Yet?</h3>
          <p className="text-gray-600 mb-6">Add products to your store and start selling to see orders here.</p>
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
            onClick={() => setShowNewProductModal(true)}
          >
            <FiPlus className="inline mr-2" />
            Add Product
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-lg p-6">
          {/* Order list would go here */}
          <p className="text-gray-700">Showing {activeTab} orders ({stats[activeTab]})</p>
          {/* You would map through orders data here */}
        </div>
      )}

      {/* New Product Modal */}
      {showNewProductModal && (
        <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New Product</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Product Name</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Price</label>
                <input type="number" className="w-full p-2 border rounded" />
              </div>
              <div className="flex justify-end space-x-3">
                <button 
                  type="button" 
                  className="px-4 py-2 border rounded"
                  onClick={() => setShowNewProductModal(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;