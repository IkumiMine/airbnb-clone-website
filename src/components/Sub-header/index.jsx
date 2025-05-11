import React from 'react';
import { LuHotel } from "react-icons/lu";
import { LuHouse } from "react-icons/lu";
import { LuTreePalm } from "react-icons/lu";
import { PiBuildingApartment } from "react-icons/pi";
import { MdCabin } from "react-icons/md";
import { MdHouseSiding } from "react-icons/md";
import { IoFilter } from "react-icons/io5";
import { motion, useScroll, useTransform } from 'framer-motion';

const SubHeader = ({ properties, onCategoryChange, toggleFilterModal, scrollY }) => {

    // Get all unique property types from the properties array
    const propertyTypes = [...new Set(properties.map((property) => property.propertyType))];

    //animation
    const boxshadowBottom = useTransform(scrollY,[0,20],["none","0 1px 2px rgba(0,0,0,0.08),0 4px 12px rgba(0,0,0,0.05)"]);

    return (
        <motion.div 
            className='sub-header flex justify-between items-center py-[1.5rem] px-[3rem] mt-[2px] bg-white'
            style={{ boxShadow: boxshadowBottom }}
        >
            <div className='sub-header-category flex justify-between items-center gap-[2rem]'>
                <div 
                    className='sub-header-category-item flex flex-col items-center gap-[0.3rem] cursor-pointer text-icon-grey hover:text-font-black transition-all duration-200' 
                    onClick={() => onCategoryChange(propertyTypes[0])}
                >
                    <LuHotel className='text-3xl'/>
                    <p className='text-xs font-semibold capitalize tracking-tight'>{propertyTypes[0]}</p>
                </div>
                <div 
                    className='sub-header-category-item flex flex-col items-center gap-[0.3rem] cursor-pointer text-icon-grey hover:text-font-black transition-all duration-200'
                    onClick={() => onCategoryChange(propertyTypes[1])}
                >
                    <LuHouse className='text-3xl'/>
                    <p className='text-xs font-semibold capitalize tracking-tight'>{propertyTypes[1]}</p>
                </div>
                <div 
                    className='sub-header-category-item flex flex-col items-center gap-[0.3rem] cursor-pointer text-icon-grey hover:text-font-black transition-all duration-200'
                    onClick={() => onCategoryChange(propertyTypes[2])}
                >
                    <LuTreePalm className='text-3xl'/>
                    <p className='text-xs font-semibold capitalize tracking-tight'>{propertyTypes[2]}</p>
                </div>
                <div 
                    className='sub-header-category-item flex flex-col items-center gap-[0.3rem] cursor-pointer text-icon-grey hover:text-font-black transition-all duration-200'
                    onClick={() => onCategoryChange(propertyTypes[3])}
                >
                    <PiBuildingApartment className='text-3xl'/>
                    <p className='text-xs font-semibold capitalize tracking-tight'>{propertyTypes[3]}</p>
                </div>
                <div 
                    className='sub-header-category-item flex flex-col items-center gap-[0.3rem] cursor-pointer text-icon-grey hover:text-font-black transition-all duration-200'
                    onClick={() => onCategoryChange(propertyTypes[4])}
                >
                    <MdCabin className='text-3xl'/>
                    <p className='text-xs font-semibold capitalize tracking-tight'>{propertyTypes[4]}</p>   
                </div>
                <div 
                    className='sub-header-category-item flex flex-col items-center gap-[0.3rem] cursor-pointer text-icon-grey hover:text-font-black transition-all duration-200'
                    onClick={() => onCategoryChange(propertyTypes[5])}
                >
                    <MdHouseSiding className='text-3xl'/>
                    <p className='text-xs font-semibold capitalize tracking-tight'>{propertyTypes[5]}</p>
                </div>
            </div>
            <div className='flex gap-[1rem]'>
                <div 
                    className='sub-header-filter flex justify-between items-center gap-[0.7rem] cursor-pointer border border-grey rounded-[0.8rem] px-[1rem] py-[0.7rem] hover:border-font-black hover:bg-light-grey transition-all duration-200'
                    onClick={toggleFilterModal}
                >
                    <IoFilter className='text-2xl'/>
                    <p className='text-xs font-semibold tracking-tight'>Filters</p>
                </div>
                <div className='sub-header-toggle-button flex justify-between items-center cursor-pointer border border-grey rounded-[0.8rem] px-[1rem] py-[0.7rem] hover:border-font-black hover:bg-light-grey transition-all duration-200'>
                    <p className='sub-header-toggle-button-text text-xs font-semibold tracking-tight'>Display total before taxes</p>
                </div>
            </div>
        </motion.div>
    );
}

export default SubHeader;