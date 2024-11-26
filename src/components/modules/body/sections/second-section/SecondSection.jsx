import { useEffect, useRef, useState } from "react";
import ImgLogo1 from '../../../../img/png/logo-ipsum-1.png';
import ImgLogo2 from '../../../../img/png/logo-ipsum-2.png';
import ImgLogo3 from '../../../../img/png/logo-ipsum-3.png';
import ImgLogo4 from '../../../../img/png/logo-ipsum-4.png';
import "./second-section.css";

export default function SecondSection() {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (slider) {
      const scrollTop = window.scrollY;
      const sliderHeight = slider.offsetHeight;
      const maxScroll = sliderHeight;
      const scrollProgress = Math.min(scrollTop / maxScroll, 1);
      const translateX = scrollProgress * (slider.scrollWidth - slider.clientWidth);
      slider.style.transform = `translateX(-${translateX}px)`;
    }
  };

  const handleMouseDown = (e) => {
    const slider = sliderRef.current;
    if (slider) {
      setIsDragging(true);
      setStartX(e.pageX - slider.offsetLeft);
      setScrollLeft(slider.scrollLeft);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const slider = sliderRef.current;
    if (slider) {
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slides = [
    {
      img: ImgLogo1,
      
    },
    {
      img: ImgLogo2,
      
    },
    {
      img: ImgLogo3,
      
    },
    {
      img: ImgLogo4,
      
    },
  ];

  return (
    <div className="second_section">
      <div className="first_block">
        <div className="first_block_text">
            <h1>Доверенное IT-решение Таджикистана</h1>
            <p>
            В Connect Service мы стремимся обеспечить наше сообщество в Таджикистане
            высококачественными услугами по ремонту и сборке компьютеров. Наша команда опытных
            специалистов с неизменной приверженностью к совершенству решает самые разные
            технологические задачи как для частных лиц, так и для бизнеса.
            </p>
        </div>
      </div>
      <div className="second_block">
        <div
          className="slider"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <img src={slide.img} alt={`Slide ${index + 1}`} className="slide_img"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
