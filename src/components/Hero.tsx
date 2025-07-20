import CountdownTimer from './CountdownTimer';
import { useEffect, useRef } from 'react';
import shape1 from '../assets/svg/shape1.svg';
import shape2 from '../assets/svg/shape2_1.svg';
import shape3 from '../assets/svg/shape3.svg';
import shape4_1 from '../assets/svg/shape4_1.svg';
import shape5 from '../assets/svg/shape5.svg';
import shape6 from '../assets/svg/shape6_1.svg';
import heroImage from '../assets/img/hero-1.jpg';

const Hero = () => {
const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Activate WOW animations
    const wowElements = hero.querySelectorAll('.wow');
    wowElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('fadeInUp');
      }, index * 200); // Stagger the animations
    });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate movement based on mouse position
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const moveX = (x - centerX) / centerX * 20; // Max 20px movement
      const moveY = (y - centerY) / centerY * 20; // Max 20px movement

      // Animate corner shapes (excluding corner-bottom-right)
      const cornerShapes = hero.querySelectorAll('.corner-shape:not(.corner-bottom-right)');
      cornerShapes.forEach((shape, index) => {
        const element = shape as HTMLElement;
        const multiplier = (index + 1) * 0.5; // Different movement for each shape
        element.style.transform = `translate(${moveX * multiplier}px, ${moveY * multiplier}px)`;
      });
    };

    hero.addEventListener('mousemove', handleMouseMove);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-row">
          {/* Left Column - Text Content */}
          <div className="hero-text-column">
            <div className="wpo-static-hero-inner">
              {/* Shape 1 */}
              <div className="wow fadeInUp" data-wow-duration="1400ms">
                <img src={shape1} alt="" width={211} height={83} color='#198754' /> 
              </div>
              
              {/* Names */}
              <div className="slide-title wow fadeInUp" data-wow-duration="1500ms">
                <h2>Alejandro y Candelaria</h2>
              </div>
              
              {/* Subtitle and Date */}
              <div className="slide-text wow fadeInUp" data-wow-duration="1600ms">
                <p>Nos casamos el 1 de Mayo del 2026</p>
              </div>
              
              {/* Countdown Timer */}
              <div className="wpo-wedding-date wow fadeInUp" data-wow-duration="1700ms">
                <div className="clock-grids">
                  <CountdownTimer />
                </div>
              </div>
              
              {/* Shape 2 */}
              <div className="wow fadeInUp" data-wow-duration="1800ms">
                <img src={shape2} alt="" width={223} height={221} />
              </div>
              
              <div className="clearfix"></div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="hero-image-column">
            <div className="hero-image-container">
              {/* Background Shape */}
              <div className="bg-shape">
                <div className="hero-image">
                  <img src={heroImage} alt="Ale & Cande" width={320} height={571} />
                </div>
              </div>
              
              {/* Corner Shapes */}
              <div className="corner-shape corner-top-left">
                <img src={shape3} alt="Shape 3" />
              </div>
              <div className="corner-shape corner-top-right">
                <img src={shape4_1} alt="Shape 4" />
              </div>
              <div className="corner-shape corner-bottom-left">
                <img src={shape5} alt="Shape 5" />
              </div>
            </div>
            <div className="corner-shape corner-bottom-right">
              <img src={shape6} alt="Shape 6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 