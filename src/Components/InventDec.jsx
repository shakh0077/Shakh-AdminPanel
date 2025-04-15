import { useState } from 'react';
import { BarChart, ChevronDown, DollarSign, Package, ShoppingBag, ShoppingCart, Users, Check, X } from 'lucide-react';

export default function Invent() {
  const [selectedPeriod, setSelectedPeriod] = useState('This Week');
  const [showProductModal, setShowProductModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: ''
  });
  const [notifications, setNotifications] = useState([]);
  const [products, setProducts] = useState([]);

  const handleNewProductClick = () => {
    setShowProductModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new product
    const product = {
      ...newProduct,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
    
    setProducts(prev => [...prev, product]);
    
    // Add notification
    const notification = {
      id: Date.now(),
      message: `New product "${newProduct.name}" added successfully!`,
      type: 'success',
      timestamp: new Date().toISOString()
    };
    
    setNotifications(prev => [...prev, notification]);
    
    // Reset form and close modal
    setNewProduct({ name: '', price: '', description: '' });
    setShowProductModal(false);
    
    // Auto-remove notification after 5 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== notification.id));
    }, 5000);
  };

  const dismissNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div>
      <h1 className='text-2xl font-bold text-gray-800'>Inventory</h1>
      <div className="w-[1190px] py-5 min-h-screen">
        
        {/* Notification Area */}
        <div className="fixed bottom-4 right-4 z-50 space-y-2">
          {notifications.map(notification => (
            <div 
              key={notification.id}
              className={`p-4 rounded-lg shadow-lg flex items-center justify-between ${
                notification.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              <div className="flex items-center">
                {notification.type === 'success' ? (
                  <Check className="mr-2" size={18} />
                ) : (
                  <X className="mr-2" size={18} />
                )}
                <span>{notification.message}</span>
              </div>
              <button 
                onClick={() => dismissNotification(notification.id)}
                className="ml-4 text-gray-500 hover:text-gray-700"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* ... (previous dashboard code remains the same) ... */}

        {/* No Orders Yet Card */}
        <div className="bg-white rounded-lg shadow-sm p-5">
          <h3 className="text-gray-600 mb-6">Recent Orders</h3>
          <div className="flex flex-col items-center justify-center h-64">
            <div className="bg-gray-100 rounded-full p-8 mb-4">
              <ShoppingBag size={32} className="text-gray-300" />
            </div>
            <h3 className="text-xl font-medium mb-2">No Orders Yet?</h3>
            <p className="text-sm text-gray-500 text-center mb-6">
              Add products to your store and start selling to see orders here.
            </p>
            <button 
              onClick={handleNewProductClick}
              className="bg-blue-500 cursor-pointer text-white rounded-lg py-2 px-4 flex items-center hover:bg-blue-600 transition-colors"
            >
              <span className="mr-1">+</span>
              New Product
            </button>
          </div>
        </div>

        {/* New Product Modal */}
        {showProductModal && (
          <div className="fixed inset-0 bg-black/60 text-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Add New Product</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block  text-sm font-bold mb-2" htmlFor="name">
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newProduct.name}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={newProduct.description}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setShowProductModal(false)}
                    className="bg-gray-300 cursor-pointer text-gray-700 py-2 px-4 rounded mr-2 hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 cursor-pointer text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                  >
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Products To-Do List (appears after adding products) */}
        {products.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-sm p-5">
            <h3 className="text-gray-800 mb-4">Product To-Do List</h3>
            <div className="space-y-3">
              {products.map(product => (
                <div key={product.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-black">{product.name}</h4>
                    <p className="text-sm text-black">$ {product.price}</p>
                    {product.description && (
                      <p className="text-sm text-gray-900 mt-1">{product.description}</p>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-green-500 cursor-pointer hover:text-green-700">
                      <Check size={25} />
                    </button>
                    <button 
                      className="text-red-500 cursor-pointer hover:text-red-700"
                      onClick={() => setProducts(prev => prev.filter(p => p.id !== product.id))}
                    >
                      <X size={25} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}