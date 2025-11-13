import React from 'react';

const Home = () => {
  return (
    <>
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
        <p className="text-gray-600 mt-1">Track and manage your stock levels in real-time</p>
      </header>

      {/* Add Item Button */}
      <div className="flex justify-end mb-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
          + Add Item
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Total Items */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Total Items</span>
            <span className="text-blue-600 text-xl">Chart</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">334</div>
          <p className="text-sm text-green-600 font-medium">+12% from last month</p>
        </div>

        {/* Low Stock Alerts */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Low Stock Alerts</span>
            <span className="text-yellow-500 text-xl">Warning</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">2</div>
          <p className="text-sm text-orange-600 font-medium">Requires attention</p>
        </div>

        {/* Total Value */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Total Value</span>
            <span className="text-green-600 text-xl">$</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">$14,800.66</div>
          <p className="text-sm text-green-600 font-medium">+8% from last month</p>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Categories</span>
            <span className="text-blue-600 text-xl">Up</span>
          </div>
          <div className="text-3xl font-bold text-gray-900">3</div>
          <p className="text-sm text-gray-600 font-medium">Well organized</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name, SKU, or category..."
          className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {['Name', 'SKU', 'Category', 'Quantity', 'Status', 'Location', 'Unit Price', 'Total Value', 'Actions'].map((header) => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Row 1 */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Wireless Mouse</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">WM-001</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Electronics</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">145</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    In Stock
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">A-12</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$29.99</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$4348.55</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-gray-600 hover:text-blue-600 mr-3">Edit</button>
                  <button className="text-gray-600 hover:text-red-600">Delete</button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">USB-C Cable</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">UC-002</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Accessories</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">32</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Low Stock
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">B-05</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$12.99</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$415.68</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-gray-600 hover:text-blue-600 mr-3">Edit</button>
                  <button className="text-gray-600 hover:text-red-600">Delete</button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mechanical Keyboard</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">MK-003</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Electronics</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">78</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    In Stock
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">A-15</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$89.99</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$7019.22</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-gray-600 hover:text-blue-600 mr-3">Edit</button>
                  <button className="text-gray-600 hover:text-red-600">Delete</button>
                </td>
              </tr>

              {/* Row 4 */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Monitor Stand</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">MS-004</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Furniture</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">23</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Low Stock
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">C-08</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$45.99</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$1057.77</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-gray-600 hover:text-blue-600 mr-3">Edit</button>
                  <button className="text-gray-600 hover:text-red-600">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-gray-500">
        Edit with <span className="font-medium text-gray-700">Lovable</span>
      </div>
    </>
  );
};

export default Home;