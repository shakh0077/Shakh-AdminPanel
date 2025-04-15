import { useState } from 'react';
import { BarChart, ChevronDown, Package, ShoppingBag, ShoppingCart, Users } from 'lucide-react';
import DemoCharts1 from './DemoChart1';

export default function DashboardIn() {
  const [selectedPeriod, setSelectedPeriod] = useState('This Week');
  
  return (
    <div>
        <h1 className='text-2xl font-bold text-gray-800'>Dashboards</h1>
            <div className="w-[1200px]  py-5 min-h-screen">
      <div className="grid  grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Card */}
        <div className="bg-white rounded-lg shadow-sm p-5">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                <BarChart size={18} className="text-blue-500" />
              </div>
              <span className="text-gray-600">Sales</span>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <span>This Week</span>
              <ChevronDown size={16} className="ml-1" />
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <div className="flex items-center">
                <span className="text-2xl font-semibold">₦0.00</span>
                <span className="text-green-500 text-xs ml-2">+0.00%</span>
              </div>
              <div className="mt-1">
                <span className="text-gray-500 text-sm">Volume</span>
                <div className="text-xl font-medium">0</div>
              </div>
            </div>
          </div>
        </div>

        {/* Customers Card */}
        <div className="bg-white rounded-lg shadow-sm p-5">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                <Users size={18} className="text-blue-500" />
              </div>
              <span className="text-gray-600">Customers</span>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <span>This Week</span>
              <ChevronDown size={16} className="ml-1" />
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <div className="flex items-center">
                <span className="text-2xl font-semibold">0</span>
                <span className="text-green-500 text-xs ml-2">+0.00%</span>
              </div>
              <div className="mt-1">
                <span className="text-gray-500 text-sm">Active</span>
                <div className="flex items-center">
                  <span className="text-xl font-medium">0</span>
                  <span className="text-green-500 text-xs ml-2">+0.00%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Orders Card */}
        <div className="bg-white rounded-lg shadow-sm p-5">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                <ShoppingBag size={18} className="text-blue-500" />
              </div>
              <span className="text-gray-600">All Orders</span>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <span>This Week</span>
              <ChevronDown size={16} className="ml-1" />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-center">
              <div className="text-xl font-medium">0</div>
              <div className="text-xs text-gray-500 mt-1">All Orders</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-medium">0</div>
              <div className="text-xs text-gray-500 mt-1">Pending</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-medium">0</div>
              <div className="text-xs text-gray-500 mt-1">Completed</div>
              <div className="text-green-500 text-xs">+0.00%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Marketing Chart */}
        <div className="bg-white rounded-lg shadow-sm p-5">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Marketing</span>
            <div className="flex items-center text-sm text-gray-400">
              <span>This Week</span>
              <ChevronDown size={16} className="ml-1" />
            </div>
          </div>
          <div className="flex gap-6 text-xs mb-4">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-400 mr-1"></div>
              <span>Acquisition</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-purple-400 mr-1"></div>
              <span>Purchase</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-yellow-400 mr-1"></div>
              <span>Retention</span>
            </div>
          </div>
          <div className="flex justify-center items-center h-40">
            <div className="w-32 h-32 rounded-full border-16 border-blue-100 flex justify-center items-center">
            </div>
          </div>
        </div>

        {/* Products and Cart Sections */}
        <div className="grid grid-rows-1 lg:grid-rows-2 gap-6">
          {/* Products Card */}
          <div className="bg-blue-500 rounded-lg shadow-sm p-5 text-white">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Package size={18} className="mr-2" />
                <span>All Products</span>
              </div>
              <div className="flex items-center text-sm">
                <span>This Week</span>
                <ChevronDown size={16} className="ml-1" />
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <span className="text-2xl font-semibold">0</span>
                <span className="text-green-300 text-xs ml-2">+0.00%</span>
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-2xl font-semibold">0</span>
                  <span className="text-green-300 text-xs ml-2">+0.00%</span>
                </div>
                <div className="text-sm mt-1">Active</div>
              </div>
            </div>
          </div>

          {/* Abandoned Cart Card */}
          <div className="bg-white rounded-lg shadow-sm p-5">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <ShoppingCart size={18} className="mr-2 text-orange-400" />
                <span className="text-orange-400">Abandoned Cart</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span>This Week</span>
                <ChevronDown size={16} className="ml-1" />
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <span className="text-2xl font-semibold">0%</span>
                <span className="text-green-500 text-xs ml-2">+0.00%</span>
              </div>
              <div>
                <span className="text-2xl font-semibold">0</span>
                <p className="text-sm text-gray-500">Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Summary Chart */}
        <div className="bg-white rounded-lg shadow-sm p-5">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <span className="text-gray-600 mr-4">Summary</span>
              <div className="flex items-center bg-blue-50 text-blue-500 rounded-lg px-3 py-1 text-sm">
                <span>Sales</span>
                <ChevronDown size={16} className="ml-1" />
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span>Last 7 Days</span>
              <ChevronDown size={16} className="ml-1" />
            </div>
          </div>
          <div className="h-40 flex items-end justify-between pb-4">
            {['Sept 10', 'Sept 11', 'Sept 12', 'Sept 13', 'Sept 14', 'Sept 15', 'Sept 16'].map((day, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-4 bg-gray-100 rounded-t-sm" style={{ height: '40px' }}></div>
                <span className="text-xs text-gray-400 mt-2">{day}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-xs text-gray-400">
            <div>100%</div>
            <div>80%</div>
            <div>60%</div>
            <div>40%</div>
            <div>20%</div>
          </div>
        </div>

        <DemoCharts1/>
       
      </div>
    </div>
    </div>

  );
}