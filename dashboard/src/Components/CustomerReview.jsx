import React from 'react';
import Chart from 'react-apexcharts';
import './CustomerReview.css';

const CustomerReview = () => {
    const data = {
        series: [
            {
                name: "Customer Reviews",
                data: [10, 50, 30, 90, 40, 120, 100],
            },
        ],
        options: {
            chart: {
                type: 'area',
                height: 280,
                toolbar: { show: false },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.3,
                },
            },
            dataLabels: { enabled: false },
            stroke: {
                curve: 'smooth',
                width: 3,
                colors: ['#ff929f'],
            },
            tooltip: {
                x: { format: 'dd MMM' },
                theme: 'dark',
            },
            grid: { show: false },

            // ✅ FIXED: Changed to 'category' instead of 'datetime'
            xaxis: {
                type: 'category',           // Best for simple labels
                categories: [
                    "20 May",
                    "21 May",
                    "22 May",
                    "23 May",
                    "24 May",
                    "25 May",
                    "26 May"
                ],
                labels: {
                    style: {
                        colors: '#888',
                        fontSize: '12px',
                    },
                },
            },
            yaxis: { show: false },
        },
    };

    return (
        <div className="CustomerReview">
            <div className="reviewHeader">
                <h3 style={{ margin: '1rem 0rem' }}>Customer Review</h3>
                <span className="reviewSubtext">Last 7 Days</span>
            </div>

            <div className="chartContainer">
                <Chart
                    series={data.series}
                    options={data.options}
                    type="area"
                    height="100%"
                    width="100%"
                />
            </div>
        </div >
    );
};

export default CustomerReview;  