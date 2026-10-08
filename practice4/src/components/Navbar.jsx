import React from "react";

function Navbar({activePage, setActivePage}){
    const NavItems = [
        {id: 'get', label: 'Get students (Read)'},
        {id: 'add', label: 'Add students (create)'},
        {id: 'update', label: 'Update students '},
        {id: 'delete', label: 'Delete students '},
    ];

    return (
        <nav className="navbar">
            <div className="nav-title">Student Portal</div>
            <ul className="nav-links">
                {NavItems.map((item) => (
                    <li 
                    key={item.id}
                    className={`nav-item ${activePage === item.id ? 'active' : ''}`}
                    onMouseEnter={() => setActivePage(item.id)}
                    onClick={() => setActivePage(item.id)}
                    >
                        {item.label}
                    </li>

                ))}
            </ul>
        </nav>
    );
}

export default Navbar