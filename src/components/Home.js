import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Line, Pie, Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import './Home.css';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Home() {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    navigate('/');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Mood tracking data
  const moodData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Mood Level',
      data: [7, 6, 8, 5, 7, 8, 9],
      borderColor: '#6c63ff',
      tension: 0.4,
      fill: false
    }]
  };

  // Activity distribution data
  const activityData = {
    labels: ['Exercise', 'Meditation', 'Therapy', 'Journaling', 'Social Activities'],
    datasets: [{
      data: [30, 20, 15, 20, 15],
      backgroundColor: [
        '#6c63ff',
        '#ff6384',
        '#36a2eb',
        '#ffce56',
        '#4bc0c0'
      ]
    }]
  };

  // Sleep vs Energy scatter data
  const sleepEnergyData = {
    datasets: [{
      label: 'Sleep vs Energy Level',
      data: [
        { x: 6, y: 5 },
        { x: 7, y: 6 },
        { x: 8, y: 8 },
        { x: 9, y: 9 },
        { x: 5, y: 4 },
        { x: 7.5, y: 7 },
        { x: 6.5, y: 6 }
      ],
      backgroundColor: '#6c63ff'
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'
      }
    }
  };

  const scatterOptions = {
    ...chartOptions,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Sleep Hours'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Energy Level'
        }
      }
    }
  };

  return (
    <div className="home-container">
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="nav-item active">Dashboard</div>
        <div className="nav-item">Profile</div>
        <div className="nav-item">Settings</div>
        <div className="nav-item">Messages</div>
      </div>
      
      <div className="main-content">
        <div className="top-nav">
          <div className="nav-left">
            <button className="menu-toggle" onClick={toggleSidebar}>
              ☰
            </button>
            <h2>Mental Health Dashboard</h2>
          </div>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>

        <div className="dashboard-summary">
          <div className="dashboard-cards">
            <div className="card">
              <h3>Mood Score</h3>
              <div className="number">7.5</div>
            </div>
            <div className="card">
              <h3>Activities Done</h3>
              <div className="number">12</div>
            </div>
            <div className="card">
              <h3>Therapy Sessions</h3>
              <div className="number">3</div>
            </div>
            <div className="card">
              <h3>Goals Achieved</h3>
              <div className="number">5</div>
            </div>
          </div>
        </div>

        <div className="charts-grid">
          <div className="chart-container">
            <h3>Weekly Mood Tracking</h3>
            <div className="chart">
              <Line data={moodData} options={chartOptions} />
            </div>
          </div>
          
          <div className="chart-container">
            <h3>Activity Distribution</h3>
            <div className="chart">
              <Pie data={activityData} options={chartOptions} />
            </div>
          </div>
          
          <div className="chart-container">
            <h3>Sleep vs Energy Levels</h3>
            <div className="chart">
              <Scatter data={sleepEnergyData} options={scatterOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;