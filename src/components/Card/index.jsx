import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosStar } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Card = ({ properties }) => {
    const navigate = useNavigate();

    // Variants for sliding animations
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return ( 
        <div className='card grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-6'>
            {properties.map(property => (
                <PropertyCard 
                    key={property.id} 
                    property={property} 
                    navigate={navigate} 
                    slideVariants={slideVariants} 
                />
            ))}
        </div>
    )
}

const PropertyCard = ({ property, navigate, slideVariants }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = useCallback((newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            if (newDirection === 1) {
                return prevIndex === property.images.length - 1 ? 0 : prevIndex + 1;
            }
            return prevIndex === 0 ? property.images.length - 1 : prevIndex - 1;
        });
    }, [property.images.length]);

    return (
        <div className="cursor-pointer">
            <div className="relative w-full h-[250px] overflow-hidden rounded-xl group">
                {/* Main Image Container */}
                <div className="absolute inset-0 z-0"
                    onClick={() => navigate(`${property.id}`, {state: { id: property.id } })}
                >
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            key={currentIndex}
                            src={property.images[currentIndex]?.url}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute w-full h-full object-cover"
                            alt={`Slide ${currentIndex + 1}`}
                        />
                    </AnimatePresence>
                </div>

                {/* Controls Container - Higher z-index */}
                {/* Left Arrow */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        paginate(-1);
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 
                            flex items-center justify-center 
                            bg-white rounded-full 
                            opacity-0 group-hover:opacity-70 hover:opacity-100
                            transition-opacity duration-300
                            shadow-md z-20 cursor-pointer"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={3}
                        stroke="currentColor" 
                        className="w-4 h-4"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M15.75 19.5L8.25 12l7.5-7.5" 
                        />
                    </svg>
                </button>

                {/* Right Arrow */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        paginate(1);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 
                            flex items-center justify-center 
                            bg-white rounded-full 
                            opacity-0 group-hover:opacity-70 hover:opacity-100
                            transition-opacity duration-300
                            shadow-md z-20 cursor-pointer"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={3} 
                        stroke="currentColor" 
                        className="w-4 h-4"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M8.25 4.5l7.5 7.5-7.5 7.5" 
                        />
                    </svg>
                </button>

                {/* Dots Navigation */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {property.images.map((_, index) => (
                        <button
                            key={index}
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentIndex(index);
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 
                                    ${currentIndex === index 
                                        ? 'bg-white' 
                                        : 'bg-white/50 hover:bg-white/80'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
            <div className='flex justify-between pt-[0.5rem]'
                 onClick={() => navigate(`${property.id}`, {state: { id: property.id } })}
            >
                <h2 className='font-semibold'>
                    {property.location.city},{property.location.state},{property.location.country}
                </h2>
                <p className='flex items-center gap-1'><IoIosStar className='inline'/> {property.rating}</p>
            </div>
            <p><span className='font-semibold'>$ {property.price.basePrice}</span> night</p>
        </div>
    );
}

export default Card;