import React from 'react'
import '../Styles/Projects.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ecommerce from '../images/Projects/ecommerce.jpg'
import nQueens from '../images/Projects/nQueens.png'
import rock from '../images/Projects/rock-paper-scissor.jpg'
import tic from '../images/Projects/tic-tac-toe.png'
import currency from '../images/Projects/currency-convertor.jpg'


const Projects = ({wheel}) => {
  const projects = [
    // {
    //   name: "Ecommerce",
    //   description: "TempEcommerce is a full-stack e-commerce web application developed using Java. The project is designed to simulate the core functionalities of an online shopping platform, enabling both end-users and administrators to interact with the system through user-friendly interfaces and backend logic. It demonstrates the implementation of real-world e-commerce features while showcasing Java-based web development skills.",
    //   image: ecommerce,
    //   link: "https://github.com/Chandu00110/TempEcommerce"
    // },
    {
      name: "Django-React-Store",
      description: "Django React Store – A full-stack e-commerce web app built with Django and React featuring JWT authentication, Razorpay payment integration, and a responsive UI. Includes admin dashboard, shopping cart, and order management with RESTful APIs.",
      image: ecommerce,
      link: "https://github.com/Chandu00110/django-react-store"
    },
    {
      name: "N-Queens",
      description:  "The N-Queens project typically involves solving the N-Queens problem, which is a classic computer science problem. The problem is to place N chess queens on an N×N chessboard so that no two queens threaten each other. This means no two queens can share the same row, column, or diagonal.",
      image: nQueens,
      link: "https://github.com/Chandu00110/N-Queens"
    },
    {
      name: "Rock-Paper-Scissros",
      description:  "The Rock-Paper-Scissor project is a simple yet fun interactive game that allows users to play the classic hand game against a computer. Built with HTML, CSS, and JavaScript, the app randomly generates the computer's move and displays the winner of each round.",
      image: rock,
      link: "https://github.com/Chandu00110/Rock-Paper-Scissor"
    },
    {
      name: "Tic-Toc-Toe",
      description:  "Tic-Toc-Toe is a browser-based version of the classic Tic-Tac-Toe game, built using HTML, CSS, and JavaScript. The game supports two-player mode, where users take turns placing their symbols (X or O) on a 3x3 grid. The goal is to align three symbols horizontally, vertically, or diagonally before the opponent does.",
      image: tic,
      link: "https://github.com/Chandu00110/Tic-Toc-Toe"
    },
    {
      name: "Currency Calculator",
      description:  "Currency_Calculator is a responsive and easy-to-use currency converter application that allows users to convert between different currencies in real-time. Developed using JavaScript, HTML, and CSS, the app likely uses a live exchange rate API to fetch up-to-date rates.",
      image: currency,
      link: "https://github.com/Chandu00110/Currency_Calculator"
    }
  ];
  
  return (
    <div className='Projects'>
      <div className="heading">
        <img src={wheel} alt="wheel" />
          <h3>My Projects</h3>
      </div>

      <div className="Project-List" id='projects'>
            {projects.map((project, index) => (
                <div className='Project-Card' key={index}>
                    <Card style={{ backgroundImage: `url(${project.image})` }}>
                      <p className='name'>{project.name}</p>
                        <Card.Body>
                            <Card.Title>{project.name}</Card.Title>
                            <Card.Text>
                                {project.description}
                            </Card.Text>
                            <Button as="a" href={project.link} target='_blank' variant='warning'>
                              <i className="bi bi-arrow-up-right-circle-fill"></i>
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Projects