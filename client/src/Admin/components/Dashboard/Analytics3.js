import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const cardClasses = 'bg-white p-4 rounded-lg shadow-lg flex-1';
const textClasses = 'text-muted-foreground';
const valueClasses = 'text-2xl font-bold text-card-foreground';

const Analytics3 = () => {
  
  const [comments, setComments] = useState([]);
  const [earningsData, setEarningsData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Revenue',
        data: [12000, 19000, 3000, 5000, 20000, 3000, 5000, 7000],
        borderColor: 'blue',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
      {
        label: 'Profit',
        data: [9000, 15000, 2000, 4000, 15000, 2000, 4000, 6000],
        borderColor: 'lightblue',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  });
  const [revenue, setRevenue] = useState(37802);
  const [revenueChange, setRevenueChange] = useState(0.56);

  useEffect(() => {
    // Fetch data from the backend in future
    // For now, we use dummy data
   
    setComments([
      { name: 'Kathryn Murphy', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec dolor vel est interdum', rating: 4, avatarSrc: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Leslie Alexander', text: 'Cras nec viverra justo, a mattis lacus. Vestibulum eleifend, leo sit amet aliquam laoreet, turpis leo vulputate orci', rating: 4, avatarSrc: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Devon Lane', text: 'Morbi eget commodo diam. Praesent dignissim purus ac turpis porta', rating: 4, avatarSrc: 'https://images.unsplash.com/photo-1522307837370-cc113a36b784?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Eleanor Pena', text: 'Praesent dignissim purus ac turpis porta', rating: 4, avatarSrc: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ]);
  }, []);

  return (
    <div className="flex flex-wrap space-y-4 md:space-y-0 md:space-x-4 p-4 bg-transparent">
      

      <div className={cardClasses}>
        <h2 className="text-lg font-semibold">Earnings</h2>
        <div className="mb-4">
          <div className="flex items-center">
            <h3 className={valueClasses}>${revenue}</h3>
            <span className="ml-2 text-green-500 text-sm">{revenueChange}%</span>
          </div>
          <p className={textClasses}>Revenue</p>
        </div>
        <div className='w-[500px]'>
          <Line data={earningsData} />
        </div>
      </div>

      <div className={cardClasses}>
        <h2 className="text-lg font-semibold">New Comments</h2>
        <ul className='py-5'>
          {comments.map((comment, index) => (
            <li key={index} className="flex items-center mb-2">
              <img src={comment.avatarSrc} alt={comment.name} className="w-10 h-10 rounded-full mr-3" />
              <div>
                <p className={textClasses}>{comment.name}</p>
                <p className={textClasses} text-sm>{comment.text}</p>
                <p className="text-yellow-500 text-sm">{'★'.repeat(comment.rating)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Analytics3;
