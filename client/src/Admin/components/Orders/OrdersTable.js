import React, { useState } from 'react';

const sharedClasses = {
  primaryButton: 'bg-primary border-[2px] border-gray-300 text-primary-foreground px-4 py-2 rounded-lg flex items-center',
  tableCell: 'p-4 text-left',
  actionButton: 'text-purple-500 px-2',
  editButton: 'text-red-500',
  deleteButton: 'text-brown-500 px-2',
  searchInput: 'w-full p-2 border rounded-lg bg-input text-foreground',
};

const OrdersTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const orders = [
    {
      enrolledStudent: "Arun Sinha",
      enrollmentId: "1",
      courseTaken: "AI and ML",
      paymentStatus: "Yes",
      teacherAppointed: "Mr. Ram Swaroop",
      status: "Enrolled and studying",
    },
    {
      enrolledStudent: "Tara Sighole",
      enrollmentId: "2",
      courseTaken: "Python with Django",
      paymentStatus: "No",
      teacherAppointed: "Mr. Arun Shukla",
      status: "Not enrolled",
    },
    {
      enrolledStudent: "David Marcue",
      enrollmentId: "3",
      courseTaken: "Full Stack Development",
      paymentStatus: "Yes",
      teacherAppointed: "Mr. Anup Kasol",
      status: "Enrolled and studying",
    },
    {
      enrolledStudent: "Anima Bhail",
      enrollmentId: "4",
      courseTaken: "Backend with NodeJs and ExpressJs",
      paymentStatus: "No",
      teacherAppointed: "Mrs. Amy Sinha",
      status: "Not enrolled",
    },
    {
      enrolledStudent: "Sherlyn Joshua",
      enrollmentId: "5",
      courseTaken: "Deep Learning",
      paymentStatus: "Yes",
      teacherAppointed: "Mr. Vivan Singh",
      status: "Enrolled and studying",
    },
    {
      enrolledStudent: "John Doe",
      enrollmentId: "6",
      courseTaken: "Machine Learning",
      paymentStatus: "No",
      teacherAppointed: "Mrs. Vimla Roop",
      status: "Not enrolled",
    },
  ];

  const filteredOrders = orders.filter(order =>
    order.enrolledStudent.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.enrollmentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.courseTaken.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.paymentStatus.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.teacherAppointed.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-aqua-100 mx-5 my-8 rounded-lg text-card-foreground">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Order List</h1>
        <button className={sharedClasses.primaryButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 17l4 4 4-4m-4-5v9"
            />
          </svg>
          Enrolled Student
        </button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search here..."
          className={sharedClasses.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr className="bg-blue-300 text-secondary-foreground">
              <th className={`${sharedClasses.tableCell} hidden sm:table-cell`}>Enrolled Student</th>
              <th className={`${sharedClasses.tableCell} hidden sm:table-cell`}>Enrollment ID</th>
              <th className={`${sharedClasses.tableCell} hidden sm:table-cell`}>Course Taken</th>
              <th className={`${sharedClasses.tableCell} hidden sm:table-cell`}>Payment Status</th>
              <th className={`${sharedClasses.tableCell} hidden sm:table-cell`}>Teacher Appointed</th>
              <th className={`${sharedClasses.tableCell} hidden sm:table-cell`}>Status</th>
              <th className={sharedClasses.tableCell}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-100 transition duration-200"
              >
                <td className={`${sharedClasses.tableCell} hidden sm:table-cell`}>{order.enrolledStudent}</td>
                <td className={`${sharedClasses.tableCell} hidden sm:table-cell`}>{order.enrollmentId}</td>
                <td className={`${sharedClasses.tableCell} hidden sm:table-cell`}>{order.courseTaken}</td>
                <td className={`${sharedClasses.tableCell} hidden sm:table-cell`}>{order.paymentStatus}</td>
                <td className={`${sharedClasses.tableCell} hidden sm:table-cell`}>{order.teacherAppointed}</td>
                <td className={`${sharedClasses.tableCell} hidden sm:table-cell`}>{order.status}</td>
                <td className={sharedClasses.tableCell}>
                  <button className={sharedClasses.actionButton}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.55 4.55a2.5 2.5 0 01-3.6 3.6L11 14.6V10h4zM4 4a2 2 0 100 4 2 2 0 100-4zm0 12a2 2 0 100 4 2 2 0 100-4zm12 4a2 2 0 100 4 2 2 0 100-4zm0-16a2 2 0 100 4 2 2 0 100-4z"
                      />
                    </svg>
                  </button>
                  <button className={sharedClasses.editButton}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 4.232a1.5 1.5 0 012.122 0l1.768 1.768a1.5 1.5 0 010 2.122l-10 10a1.5 1.5 0 01-.667.384l-5 1.5a.5.5 0 01-.632-.632l1.5-5a1.5 1.5 0 01.384-.667l10-10z"
                      />
                    </svg>
                  </button>
                  <button className={sharedClasses.deleteButton}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.136 21H7.864a2 2 0 01-1.997-1.858L5 7m5-3V3h4v1m4 0H6m13 0a2 2 0 00-2-2h-1a2 2 0 00-2-2h-4a2 2 0 00-2 2H5a2 2 0 00-2 2h16z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-12">
        <span className="text-xs">Showing {filteredOrders.length} Entries</span>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded-lg">1</button>
          <button className="px-3 py-1 border rounded-lg bg-primary text-primary-foreground">
            2
          </button>
          <button className="px-3 py-1 border rounded-lg">3</button>
        </div>
      </div>
    </div>
  );
}

export default OrdersTable;
