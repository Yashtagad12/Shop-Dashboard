import React, {
    useState

} from 'react';
import './Sidebar.css';
import Logo from '../imgs/logo.png';
import { SidebarData } from '../Data/data';
import {
    UilSignOutAlt
} from '@iconscout/react-unicons';

const Sidebar = () => {

    const [selected, setSelected] = useState(0);

    return (
        <div className='Sidebars'>
            {/* Logo */}
            <div className='logo'>
                <img src={Logo} alt="Logo" />
                <span>
                    SH
                    <span>O</span>P
                </span>
            </div>

            {/* Menu */}
            <div className='menu'>
                {SidebarData.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            className={`menu-item ${selected === index ? 'active' : ''}`}
                            key={index}
                            onClick={() => setSelected(index)}
                        >
                            <div className="icon">
                                <Icon />
                            </div>
                            <span>{item.heading}</span>
                        </div>
                    );
                })}
                <div className='menu-item'>
                    <UilSignOutAlt />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;