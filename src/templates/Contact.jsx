import React from 'react'
import '../Styles/Contact.css';
import Button from 'react-bootstrap/Button';


const Contact = () => {
  return (
    <div className='Contact' id='contact'>
        <h5>Get in touch</h5>
        <h2>Let's Work Together</h2>
        <p>I’m open for new opportunities – especially ambitious or large projects.</p>
        <p> However, my inbox is always open. Whether you have a question or just want to say hi, </p>
        <p>I’ll try my best to get back to you!.
        Say Hello</p>
        <Button as="a" href="mailto:chandhupepakayala@gmail.com" variant='outline-warning'>
                say HI!
        </Button><br/>
        {/* <a href="mailto:chandhupepakayala@gmail.com">
            chandhupepakayala@gmail.com
        </a> */}
    </div>
  )
}

export default Contact