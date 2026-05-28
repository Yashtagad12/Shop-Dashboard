import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Card.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { UilTimes } from '@iconscout/react-unicons';
import Chart from 'react-apexcharts';

const Card = (props) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <AnimatePresence mode="wait">
            {expanded ? (
                <ExpandedCard
                    key="expanded"
                    param={props}
                    setExpanded={setExpanded}
                />
            ) : (
                <CompactCard
                    key="compact"
                    param={props}
                    setExpanded={setExpanded}
                />
            )}
        </AnimatePresence>
    );
};

// ==================== COMPACT CARD ====================
function CompactCard({ param, setExpanded }) {
    const Png = param.png;

    return (
        <motion.div
            className="CompactCard"
            style={{
                background: param.color.background,
                boxShadow: param.color.boxShadow,
            }}
            onClick={() => setExpanded(true)}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.03 }}
        >
            <div className="radialBar">
                <div className="circularProgress">
                    <CircularProgressbar
                        value={param.barValue}
                        text={`${param.barValue}%`}
                    />
                </div>
                <span>{param.title}</span>
            </div>

            <div className="detail">
                <Png size={28} />
                <span>${param.value}</span>
                <span>Last 24 hours</span>
            </div>
        </motion.div>
    );
}


// ==================== EXPANDED CARD ====================
function ExpandedCard({ param, setExpanded }) {
    const chartData = {
        options: {
            chart: {
                type: 'area',
                height: 200,
                toolbar: { show: false },
            },
            fill: {
                colors: ['#fff'],
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.75,
                    opacityTo: 0.3,
                }
            },
            dataLabels: { enabled: false },
            stroke: {
                curve: 'smooth',
                colors: ['white'],
                width: 3
            },
            tooltip: {
                x: { format: 'dd/MM/yy HH:mm' }
            },
            grid: {
                show: true,
                borderColor: 'rgba(255,255,255,0.25)'
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    '2025-05-20T00:00:00',
                    '2025-05-20T04:00:00',
                    '2025-05-20T08:00:00',
                    '2025-05-20T12:00:00',
                    '2025-05-20T16:00:00',
                    '2025-05-20T20:00:00',
                    '2025-05-21T00:00:00'
                ]
            },
            yaxis: {
                labels: { style: { colors: 'white' } }
            }
        }
    };

    return (
        <motion.div
            className="ExpandedCard"
            style={{
                background: param.color.background,
                boxShadow: param.color.boxShadow,
            }}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.4 }}
            onClick={() => setExpanded(false)}
        >
            <div className="closeButton" onClick={(e) => {
                e.stopPropagation();
                setExpanded(false);
            }}>
                <UilTimes size={28} />
            </div>

            <span className="expandedTitle">{param.title}</span>

            <div className="chartContainer">
                <Chart
                    series={param.series}
                    type="area"
                    options={chartData.options}
                    height="100%"
                    width="100%"
                />
            </div>

            <span className="lastUpdated">Last 24 hours</span>
        </motion.div>
    );
}

export default Card;