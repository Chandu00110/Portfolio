import React, { useEffect, useRef } from 'react';
import '../Styles/Services.css';

const Services = ({ wheel }) => {
    const services = [
        {
            title: 'Web Development Services',
            description: 'Full-Stack Web Development (Java, JSP, Servlets, Django, .NET, Blazor) Frontend Development (HTML, CSS, JavaScript, Bootstrap) Backend Development (Java, Python, .NET, Django) E-Commerce Website Development',
        },
        {
            title: 'Software Development Services',
            description: 'Custom Software Development (Java, .NET, Python) Enterprise Application Development Desktop & Web Application Development',
        },
        {
            title: 'Database Management',
            description: 'Database Design & Optimization (MySQL, PostgreSQL) Database Integration & Management',
        }
    ];

    const serviceRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.getAttribute('data-index'));
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.3 }
        );
    
        serviceRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });
    
        return () => {
            serviceRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);
    

    return (
        <div className='Services' id='services'>
            <div className="heading">
                <img src={wheel} alt="wheel" />
                <h3>My Services</h3>
            </div>

            <div className="Services-List">
            {services.map((service, index) => (
                    <div
                        className={`service ${index % 2 === 0 ? 'from-left' : 'from-right'}`}
                        key={index}
                        ref={(el) => (serviceRefs.current[index] = el)}
                        data-index={index}
                    >
                        <div className="service-content">
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
