import React from "react";

function Navbar({activePage, setActivePage}){
    const NavItems = [
        {id: 'get', label: 'Get contacts (Read)'},
        {id: 'add', label: 'Add contacts (Create)'},
        {id: 'update', label: 'update contacts '},
        {id: 'delete', label: 'Delete contacts '},
    ];

    return (
        <nav className="navbar">
      <div className="nav-title">Contact Portal</div>
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