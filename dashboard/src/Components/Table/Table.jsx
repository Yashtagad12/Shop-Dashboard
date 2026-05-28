import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './Table.css'; // We'll create this for custom styling

function createData(name, trackingId, date, status) {
    return { name, trackingId, date, status };
}

// Sample Data
const rows = [
    createData('Veg Rice', 188790, '1 April, 2026', "Approved"),
    createData('Ice Cream', 188345, '1 April, 2026', "Pending"),
    createData('Brownie', 188238, '1 April, 2026', "Approved"),
    createData('Sandwich', 188035, '1 April, 2026', "Pending"),
    createData('Burger', 188120, '1 April, 2026', "Delivered"),
];

const makeStyle = (status) => {
    if (status === 'Approved')
        return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
        }
    if (status === 'Pending')
        return {
            background: 'rgb(255 255 0 / 47%)',
            color: 'orange',
        }
    if (status === 'Delivered')
        return {
            background: 'rgb(135 206 250 / 47%)',
            color: 'blue',
        }
}

export default function BasicTable() {
    return (
        <div className="tableContainer">
            <div className="tableHeader">
                <Typography variant="h6" className="tableTitle">
                    Recent Orders
                </Typography>
            </div>

            <TableContainer component={Paper} style={{ boxShadow: '0px 13px 20px 0px #80808029' }} className="tablePaper">
                <Table sx={{ minWidth: 650 }} aria-label="dashboard table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="left">Tracking ID</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left">Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                className="tableRow"
                                hover
                            >
                                <TableCell component="th" scope="row" className="tableCell">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left" className="tableCell">{row.trackingId}</TableCell>
                                <TableCell align="left" className="tableCell">{row.date}</TableCell>
                                <TableCell align="left" className="tableCell"><span className="status" style={makeStyle(row.status)}>{row.status}</span></TableCell>
                                <TableCell align="left" className="Details">Detail</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
}