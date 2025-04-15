import { useState } from 'react';
import { 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  Filter, 
  Plus, 
  Search, 
  SlidersHorizontal,
  Users,
  Copy,
  PhoneOutgoing,
  ArrowDownUp
} from 'lucide-react';

export default function Costum() {
  // State for customers data
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Janet Adebayo', email: 'janet.a@gmail.com', phone: '+2348005650633', orders: 10, total: '₦250,000.00', date: '12 Aug 2022 - 12:25 am', status: 'Active' },
    { id: 2, name: 'Janet Adebayo', email: 'janet.a@gmail.com', phone: '+2348005650633', orders: 10, total: '₦250,000.00', date: '12 Aug 2022 - 12:25 am', status: 'Active' },
    { id: 3, name: 'Janet Adebayo', email: 'janet.a@gmail.com', phone: '+2348005650633', orders: 10, total: '₦250,000.00', date: '12 Aug 2022 - 12:25 am', status: 'Active' },
    { id: 4, name: 'Janet Adebayo', email: 'janet.a@gmail.com', phone: '+2348005650633', orders: 10, total: '₦250,000.00', date: '12 Aug 2022 - 12:25 am', status: 'Active' },
    { id: 5, name: 'Janet Adebayo', email: 'janet.a@gmail.com', phone: '+2348005650633', orders: 10, total: '₦250,000.00', date: '12 Aug 2022 - 12:25 am', status: 'Active' },
    { id: 6, name: 'Janet Adebayo', email: 'janet.a@gmail.com', phone: '+2348005650633', orders: 10, total: '₦250,000.00', date: '12 Aug 2022 - 12:25 am', status: 'Active' },
    { id: 7, name: 'Janet Adebayo', email: 'janet.a@gmail.com', phone: '+2348005650633', orders: 10, total: '₦250,000.00', date: '12 Aug 2022 - 12:25 am', status: 'Active' },
    { id: 8, name: 'Janet Adebayo', email: 'janet.a@gmail.com', phone: '+2348005650633', orders: 10, total: '₦250,000.00', date: '12 Aug 2022 - 12:25 am', status: 'Active' },
    { id: 9, name: 'Janet Adebayo', email: 'janet.a@gmail.com', phone: '+2348005650633', orders: 10, total: '₦250,000.00', date: '12 Aug 2022 - 12:25 am', status: 'Active' },
    { id: 10, name: 'Janet Adebayo', email: 'janet.a@gmail.com', phone: '+2348005650633', orders: 10, total: '₦250,000.00', date: '12 Aug 2022 - 12:25 am', status: 'Active' },
  ]);

  // State for current page and pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  // Stats data
  const stats = {
    allCustomers: 1250,
    allGrowth: '+5.80%',
    active: 1180,
    activeGrowth: '+6%',
    inactive: 70,
    inactiveGrowth: '-10%',
    new: 30,
    newGrowth: '+10%',
    purchasing: 657,
    abandoned: 5
  };

  // Handler functions
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedCustomers(customers.map(customer => customer.id));
    } else {
      setSelectedCustomers([]);
    }
  };

  const handleSelectCustomer = (id) => {
    if (selectedCustomers.includes(id)) {
      setSelectedCustomers(selectedCustomers.filter(customerId => customerId !== id));
    } else {
      setSelectedCustomers([...selectedCustomers, id]);
    }
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleBulkAction = () => {
    alert(`Bulk action triggered for ${selectedCustomers.length} customers`);
  };

  const handleAddCustomer = () => {
    alert('Add new customer modal should open here');
  };

  const handleFilter = () => {
    alert('Filter modal should open here');
  };

  const handleExport = () => {
    alert('Export options should show here');
  };

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    alert(`Email ${email} copied to clipboard`);
  };

  const handleCall = (phone) => {
    alert(`Calling ${phone}`);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Sorting and filtering
  const sortedCustomers = [...customers].sort((a, b) => {
    if (!sortConfig.key) return 0;
    
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const filteredCustomers = sortedCustomers.filter(customer => 
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const paginatedCustomers = filteredCustomers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-white text-black min-h-screen px-5">
      {/* Header with title and add button */}
      <div className="flex justify-between items-center">
      <div className=" p-5 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Customers</h2>
        </div>
        <button 
          onClick={handleAddCustomer}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md flex items-center gap-1"
        >
          <Plus size={16} />
          Add a New Customer
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-2">
                <Users size={16} className="text-blue-500" />
              </div>
              <span className="text-sm text-gray-500">All Customers</span>
            </div>
            <div className="flex items-center text-xs text-gray-400">
              <span>This Week</span>
              <ChevronDown size={14} className="ml-1" />
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-xl font-semibold">{stats.allCustomers}</span>
            <span className="text-green-500 text-xs ml-2">{stats.allGrowth}</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">Active</span>
            <div className="flex items-center text-xs text-gray-400">
              <span>This Week</span>
              <ChevronDown size={14} className="ml-1" />
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-xl font-semibold">{stats.active}</span>
            <span className="text-green-500 text-xs ml-2">{stats.activeGrowth}</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">In-Active</span>
            <div className="flex items-center text-xs text-gray-400">
              <span>This Week</span>
              <ChevronDown size={14} className="ml-1" />
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-xl font-semibold">{stats.inactive}</span>
            <span className="text-red-500 text-xs ml-2">{stats.inactiveGrowth}</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">New Customers</span>
            <div className="flex items-center text-xs text-gray-400">
              <span>This Week</span>
              <ChevronDown size={14} className="ml-1" />
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-xl font-semibold">{stats.new}</span>
            <span className="text-green-500 text-xs ml-2">{stats.newGrowth}</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">Purchasing</span>
          </div>
          <div className="flex items-center">
            <span className="text-xl font-semibold">{stats.purchasing}</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">Abandoned Carts</span>
          </div>
          <div className="flex items-center">
            <span className="text-xl font-semibold">{stats.abandoned}</span>
          </div>
        </div>
      </div>

      {/* Customers Table Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">

        
        {/* Search and Filters */}
        <div className="p-4 flex flex-wrap gap-2 justify-between items-center border-b border-gray-200">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={handleFilter}
              className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              <Filter size={16} />
              Filter
            </button>
            <button 
              onClick={handleExport}
              className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              <SlidersHorizontal size={16} />
              Export
            </button>
            <div className="relative">
              <button 
                onClick={handleBulkAction}
                className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Bulk Action
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left text-sm text-gray-500">
                <th className="pl-4 py-3 w-12">
                  <input 
                    type="checkbox" 
                    onChange={handleSelectAll}
                    checked={selectedCustomers.length === customers.length && customers.length > 0}
                    className="rounded border-gray-300"
                  />
                </th>
                <th 
                  className="py-3 px-2 cursor-pointer"
                  onClick={() => handleSort('name')}
                >
                  <div className="flex items-center gap-1">
                    Customer Name
                    <ArrowDownUp size={14} className={sortConfig.key === 'name' ? 'text-blue-500' : 'text-gray-400'} />
                  </div>
                </th>
                <th className="py-3 px-2">
                  <div className="flex items-center gap-1">
                    Email
                    <ArrowDownUp size={14} className="text-gray-400" />
                  </div>
                </th>
                <th className="py-3 px-2">
                  <div className="flex items-center gap-1">
                    Phone
                    <ArrowDownUp size={14} className="text-gray-400" />
                  </div>
                </th>
                <th 
                  className="py-3 px-2 cursor-pointer"
                  onClick={() => handleSort('orders')}
                >
                  <div className="flex items-center gap-1">
                    Orders
                    <ArrowDownUp size={14} className={sortConfig.key === 'orders' ? 'text-blue-500' : 'text-gray-400'} />
                  </div>
                </th>
                <th 
                  className="py-3 px-2 cursor-pointer"
                  onClick={() => handleSort('total')}
                >
                  <div className="flex items-center gap-1">
                    Order Total
                    <ArrowDownUp size={14} className={sortConfig.key === 'total' ? 'text-blue-500' : 'text-gray-400'} />
                  </div>
                </th>
                <th className="py-3 px-2">
                  <div className="flex items-center gap-1">
                    Customer Since
                    <ArrowDownUp size={14} className="text-gray-400" />
                  </div>
                </th>
                <th className="py-3 px-2">
                  <div className="flex items-center gap-1">
                    Status
                    <ArrowDownUp size={14} className="text-gray-400" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedCustomers.map((customer) => (
                <tr 
                  key={customer.id} 
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="pl-4 py-4">
                    <input 
                      type="checkbox" 
                      checked={selectedCustomers.includes(customer.id)}
                      onChange={() => handleSelectCustomer(customer.id)}
                      className="rounded border-gray-300"
                    />
                  </td>
                  <td className="py-4 px-2 font-medium text-gray-900">{customer.name}</td>
                  <td className="py-4 px-2 text-gray-600">
                    <div className="flex items-center gap-1">
                      {customer.email}
                      <button onClick={() => handleCopyEmail(customer.email)} className="text-gray-400 hover:text-gray-600">
                        <Copy size={14} />
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-gray-600">
                    <div className="flex items-center gap-1">
                      {customer.phone}
                      <button onClick={() => handleCall(customer.phone)} className="text-gray-400 hover:text-gray-600">
                        <PhoneOutgoing size={14} />
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-gray-600">{customer.orders}</td>
                  <td className="py-4 px-2 text-gray-600">{customer.total}</td>
                  <td className="py-4 px-2 text-gray-600">{customer.date}</td>
                  <td className="py-4 px-2">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      {customer.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-gray-200 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Items per page:</span>
            <select 
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="border border-gray-300 rounded-md text-sm px-2 py-1"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
            <span className="text-sm text-gray-500">
              1-{paginatedCustomers.length} of {filteredCustomers.length} items
            </span>
          </div>
          
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-500">of {totalPages} pages</span>
            <button 
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-1 border border-gray-300 rounded-md disabled:opacity-50"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-1 border border-gray-300 rounded-md disabled:opacity-50"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}