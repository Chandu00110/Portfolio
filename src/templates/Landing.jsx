import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CS_logo from '../images/profile-logos/CS_LOGO.svg';
import '../Styles/Landing.css';

const LandingPage = ({setIsLanding}) => {
    const hexagonRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null); 

    useEffect(() => {
        const hexagon = hexagonRef.current;
        const hexagonLength = hexagon.getTotalLength();
        
        gsap.set(hexagon, { strokeDasharray: hexagonLength, strokeDashoffset: hexagonLength });

        const tl = gsap.timeline();

        // Step 1: Animate the image first
        tl.set(imageRef.current, { scale: 0.5, opacity: 0 }) // Set initial state
          .to(imageRef.current, { duration: 1, scale: 1, opacity: 1, ease: "power2.out" })
          
          // Step 2: Animate hexagon after image transition
          .to(hexagon, { duration: 2, strokeDashoffset: 0, ease: "power2.out" })
          
          // Step 3: Animate text after hexagon is drawn
          .to(textRef.current, { duration: 0.5, opacity: 1, ease: "power2.out" }, "-=0.5")

          .call(() => setIsLanding(false));
    }, [setIsLanding]);

    return (
        <div className='Landing' style={styles.hexagonContainer}>
            <svg width="300" height="300" viewBox="0 0 200 200">
                {/** Display image first */}
                <image
                    ref={imageRef}
                    x="-30"
                    y="-30"
                    width="260"
                    height="260"
                    href={CS_logo}
                    alt="Description"
                />

                {/** Hexagon draws after image transition */}
                <polygon
                    ref={hexagonRef}
                    points="100,10 180,60 180,140 100,190 20,140 20,60"
                    style={styles.hexagon}
                />
            </svg>
        </div>
    );
};

const styles = {
    hexagonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#bab0a1 ',
    },
    hexagon: {  
        stroke: 'rgb(49 47 24)',
        strokeWidth: 5,
        fill: 'none',
    },
};

export default LandingPage;
