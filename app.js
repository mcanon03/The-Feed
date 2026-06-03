const sprintData = [
  { sprint: "Sprint 29", committed: 25, completed: 21 },
  { sprint: "Sprint 30", committed: 21.5, completed: 20.5 },
  { sprint: "Sprint 31", committed: 16, completed: 16 }, // Scope change/carryover
  { sprint: "Sprint 32", committed: 16, completed: 13 },
  { sprint: "Sprint 33", committed: 14, completed: 16 }
];

const ctx = document.getElementById('velocityChart').getContext('2d');

const velocityChart = new Chart(ctx, {
    type: 'bar', // Bar chart handles committed vs completed visualization best
    data: {
        labels: sprintData.map(data => data.sprint),
        datasets: [
            {
                label: 'Points Committed',
                data: sprintData.map(data => data.committed),
                backgroundColor: 'rgba(54, 162, 235, 0.6)', // Clean corporate blue
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Points Completed',
                data: sprintData.map(data => data.completed),
                backgroundColor: 'rgba(75, 192, 192, 0.6)', // Clean accent teal
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Velocity Trends: Committed vs. Completed'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: { display: true, text: 'Story Points' }
            }
        }
    }
});
