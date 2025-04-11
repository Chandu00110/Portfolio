import React from 'react'
import '../Styles/Sidebar.css'
const Sidebar = () => {
    const links = [
        {
            name: 'LinkedIn',
            icon: 'bi bi-linkedin',
            link : "https://www.linkedin.com/in/chandra-shekhar-pepakayala/"
        },
        {
            name: 'GitHub',
            icon: 'bi bi-github',
            link : "https://github.com/Chandu00110"
        },
        {
            name: 'Instagram',
            icon: 'bi bi-instagram',
            link : "https://www.instagram.com/_.chandu.00__/"
        },
        {
            name: 'Twitter',
            icon: 'bi bi-twitter-x',
            link : "https://x.com/5b0Chandu"
        }
    ]
  return (
    <div className='Sidebar'>
        <div className="sidebar-left">
            <ul className="sidebar-list">
                {links.map((link) => {
                    return (
                        <li className="sidebar-list-item" key={link.name}>
                            <a href={link.link} target="_blank" rel="noopener noreferrer" className="sidebar-list-link">
                                <i className={link.icon}></i>
                            </a>
                        </li>
                    )
                })}
            </ul>
            <div className='line'></div>
        </div>
        <div className="sidebar-right">
            <a href="mailto:chandhupepakayala@gmail.com"  className="vertical-email">
                chandhupepakayala@gmail.com
            </a>
            <div className='line'></div>
        </div>
    </div>
  )
}

export default Sidebar