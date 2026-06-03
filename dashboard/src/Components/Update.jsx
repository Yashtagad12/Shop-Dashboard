import React from 'react'
import './Update.css';
import { UpdatesData } from '../Data/data';

const Update = () => {
    return (
        <div className="Update">
            {
                UpdatesData.map((update, id) => {
                    return (
                        <div className="update" key={id} style={{ margin: '1rem' }}>
                            <img src={update.img} alt="user image" />
                            <div className="noti">
                                <div style={{ marginBottom: '1rem' }}>
                                    <span><b>{update.name}</b> </span>
                                    <span>{update.noti}</span>
                                </div>
                                <span style={{ marginTop: '1rem' }}>{update.time}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Update;