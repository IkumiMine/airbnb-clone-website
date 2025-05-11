import React, { useState, useEffect } from 'react';
import Histogram from '../Histogram';
import { IoCloseOutline } from "react-icons/io5";
import { TbToolsKitchen2 } from "react-icons/tb";
import { CgGym } from "react-icons/cg";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { FaTv } from "react-icons/fa";
import { IoWifiOutline } from "react-icons/io5";
import { BiSolidWasher } from "react-icons/bi";
import { BiSolidDryer } from "react-icons/bi";
import { LuCircleParking } from "react-icons/lu";
import { FaTemperatureFull } from "react-icons/fa6";
import { LuSnowflake } from "react-icons/lu";
import { MdOutlineElevator } from "react-icons/md";
import { LuHotel } from "react-icons/lu";
import { LuHouse } from "react-icons/lu";
import { LuTreePalm } from "react-icons/lu";
import { PiBuildingApartment } from "react-icons/pi";
import { MdCabin } from "react-icons/md";
import { MdHouseSiding } from "react-icons/md";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { motion } from 'framer-motion';

const FilterModal = ({ properties, toggleFilterModal, filteredProperties, setFilteredProperties }) => {
    // Get items from each category to display them as filter options
    const roomTypes = [...new Set(properties.map((property) => property.roomType))];
    const priceData = [properties.map((property) => property.price.basePrice)];
    const amenities = [(properties.map((property) => property.amenities))];
    const propertyTypes = [...new Set(properties.map((property) => property.propertyType))];

    // Merge all amenities into one array
    let amenitiesArray= [];
    for (let i = 0; i < amenities[0].length; i++) {
        amenitiesArray = [...amenitiesArray, ...amenities[0][i]];
    }
    const amenitiesList = ([...new Set(amenitiesArray)]);

    // Create an object to store checked status ex.kitche: true
    const amenityObject = amenitiesList.reduce((obj, key) => {
        obj[key] = false;
        return obj;
    }, {});

    const propertyTypeObject = propertyTypes.reduce((obj, key) => {
        obj[key] = false;
        return obj;
    },{});

    const [selectedRoomtype, setSelectedRoomtype] = useState("");
    const [selectedPrice, setSelectedPrice] = useState([]);
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [amenityObj, setAmenityObj] = useState(amenityObject);
    const [selectedPropertyType, setSelectedPropertyType] = useState([]);
    const [propertyTypeObj, setPropertyTypeObj] = useState(propertyTypeObject);
    //const [filteredProperties, setFilteredProperties] = useState(properties);

    const handleCheckboxChange = (e) => {
        setSelectedRoomtype(e.target.value);
    };

    const handleAmenitiesClick = (e) => {
        const selectedValue = e.target.value;
        const selectedState = e.target.checked;

        // Create a new object with the updated state
        setAmenityObj(prevState => ({
            ...prevState,
            [selectedValue]: selectedState
        }));

        // Add checked amenity to selectedAmenities array
        setSelectedAmenities(prevAmenities => {
            if (selectedState) {
                return [...prevAmenities, selectedValue];
            } else {
                return prevAmenities.filter(amenity => amenity !== selectedValue);
            }
        });
    }

    const handlePropertyTypeClick = (e) => {
        const selectedValue = e.target.value;
        const selectedState = e.target.checked;

        // Create a new object with the updated state
        setPropertyTypeObj(prevState => ({
            ...prevState,
            [selectedValue]: selectedState
        }));

        // Add checked property type to selectedPropertyType array
        setSelectedPropertyType(prevPropertyType => {
            if (selectedState) {
                return [...prevPropertyType, selectedValue];
            } else {
                return prevPropertyType.filter(propertyType => propertyType !== selectedValue);
            }
        });
    }
    
    useEffect(() => {
        const newFilteredProperties = properties
          .filter(property => {
            // Filter by room type if selected
            if (selectedRoomtype && selectedRoomtype !== "anytype") {
              return property.roomType === selectedRoomtype;
            }
            return true;
          })
          .filter(property => {
            // Filter by amenities if any selected
            if (selectedAmenities && selectedAmenities.length > 0) {
              return selectedAmenities.every(amenity => 
                property.amenities.includes(amenity)
              );
            }
            return true;
          })
          .filter(property => {
            // Filter by property type if any selected  
            if (selectedPropertyType && selectedPropertyType.length > 0) {
              return selectedPropertyType.includes(property.propertyType);
            }
            return true;
          });
        //   .filter(property => {
        //     // Filter by price range if selected
        //     if (selectedPrice && selectedPrice.length === 2) {
        //       const [minPrice, maxPrice] = selectedPrice;
        //       return property.price.basePrice >= minPrice && 
        //              property.price.basePrice <= maxPrice;
        //     }
        //     return true;
        //   });
        setFilteredProperties(newFilteredProperties);
        //console.log(newFilteredProperties);
    },[selectedRoomtype, selectedAmenities, selectedPropertyType])

    return (
        <motion.section className='bg-[rgba(0,0,0,0.3)] fixed top-0 left-0 w-full h-dvh z-40'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
        >
            <motion.div className={`filter-modal overflow-clip flex justify-center items-center h-full px-[40px] py-[23px]`}
                        initial={{ opacity: 0, y: 1000 }}
                        animate={{ opacity: 1, y:  0, transition: { opacity: { ease: "linear" } } }}
                        exit={{ opacity: 0, y: 1000 }}
            >
                <div className='flex flex-col w-[568px] max-w-[568px] h-[80%] rounded-[32px] bg-white'>
                    <div className='filter-modal-header flex justify-start items-center p-[1rem] border-b border-gray-200'>
                        <IoCloseOutline 
                            className='text-2xl cursor-pointer' 
                            onClick={toggleFilterModal}
                        />
                        <h2 className='text-lg font-semibold tracking-tighter grow text-center pr-[2rem]'>Filter</h2>
                    </div>
                    <div className='filter-modal-body overflow-y-auto overflow-x-auto h-full'>
                        <div className='border-b border-gray-200 pb-[2rem] mx-[1rem]'>
                            <h3 className='text-lg font-semibold pt-[1rem] pb-[1rem]'>Type of place</h3>
                            <div className='flex justify-evenly items-stretch border border-gray-200 rounded-[.8rem] p-[.2rem]'>
                                <div className={`cursor-pointer text-center px-[1rem] py-[.8rem] hover:rounded-[.8rem] hover:bg-gray-100 grow ${selectedRoomtype != "anytype" ? "hover:border-r-0 border-r border-gray-200" : ""} ${selectedRoomtype === "anytype" ? "border-2 border-font-black rounded-[.8rem] bg-gray-100" : ""}`}>
                                    <input 
                                        type="radio" 
                                        id='anytype' 
                                        value="anytype"
                                        name="roomType"
                                        className='hidden'
                                        checked={selectedRoomtype === "anytype"}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label htmlFor='anytype' className='capitalize text-sm font-medium cursor-pointer'>Any Type</label>
                                </div>
                            {roomTypes.map((roomType) => (
                                <div key={roomType} className={`cursor-pointer text-center px-[1rem] py-[.8rem] hover:rounded-[.8rem] hover:bg-gray-100 grow ${roomType != "shared_room" && selectedRoomtype != roomType ? "hover:border-r-0 border-r border-gray-200" : ""} ${selectedRoomtype === roomType ? "border-2 border-font-black rounded-[.8rem] bg-gray-100" : ""}`}>
                                    <input 
                                        type="radio" 
                                        id={roomType}
                                        value={roomType} 
                                        name="roomType" 
                                        className='hidden'
                                        checked={selectedRoomtype === roomType}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label htmlFor={roomType} className='capitalize text-sm font-medium cursor-pointer'>{roomType.replace(/_/g, ' ')}</label>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className='border-b border-gray-200 pb-[2rem] mx-[1rem]'>
                            <h3 className='text-lg font-semibold pt-[1rem]'>Price range</h3>
                            <p className='text-sm'>Nightly prices including fees and taxes</p>
                            <Histogram priceData={priceData[0]} width={500} height={100}/>
                            <div className='flex justify-between items-center mt-[1rem]'>
                                <div className='flex flex-col items-center'>
                                    <p className='text-xs tracking-tighter'>Minimum</p>
                                    <p className='border border-gray-200 rounded-[2rem] mt-[.5rem] px-[1rem] py-[.8rem]'>$100</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <p className='text-xs tracking-tighter'>Maximum</p>
                                    <p className='border border-gray-200 rounded-[2rem] mt-[.5rem] px-[1rem] py-[.8rem]'>$700</p>
                                </div>
                            </div>
                        </div>
                        <div className='border-b border-gray-200 pb-[2rem] mx-[1rem]'>
                            <h3 className='text-lg font-semibold pt-[1rem] pb-[.6rem]'>Rooms and beds</h3>
                            <div className='flex justify-between items-center gap-1'>
                                <p>Bathrooms</p>
                                <div className='flex items-center gap-5'>
                                    <CiCircleMinus className='text-3xl cursor-pointer' />
                                    <p className='font-medium'>Any</p>
                                    <CiCirclePlus className='text-3xl cursor-pointer' />
                                </div>
                            </div>
                            <div className='flex justify-between items-center gap-1 mt-[.7rem]'>
                                <p>Bedrooms</p>
                                <div className='flex items-center gap-5'>
                                    <CiCircleMinus className='text-3xl cursor-pointer' />
                                    <p className='font-medium'>Any</p>
                                    <CiCirclePlus className='text-3xl cursor-pointer' />
                                </div>
                            </div>
                        </div>
                        <div className='border-b border-gray-200 pb-[2rem] mx-[1rem]'>
                            <h3 className='text-lg font-semibold pt-[1rem] pb-[.6rem]'>Amenities</h3>
                            <div className='flex flex-wrap gap-4'>
                                <motion.div 
                                    className={`flex items-center gap-1 px-3 py-3 rounded-[1.5rem] cursor-pointer ${amenityObj[amenitiesList[0]] ? "bg-light-grey border-2 border-font-black" : "border border-gray-200 hover:border-font-black"}`}
                                    whileTap={{ scale: 0.9 }}
                                > 
                                    <input 
                                        type="checkbox" 
                                        className='hidden'
                                        name="amenities"
                                        id={amenitiesList[0]}
                                        value={amenitiesList[0]}
                                        onChange={handleAmenitiesClick}
                                    />
                                    <TbToolsKitchen2 className='text-2xl' />
                                    <label 
                                        className='text-sm capitalize cursor-pointer'
                                        htmlFor={amenitiesList[0]}
                                    >{amenitiesList[0]}</label>
                                </motion.div>
                                <motion.div 
                                    className={`flex items-center gap-1 px-3 py-3 rounded-[1.5rem] cursor-pointer ${amenityObj[amenitiesList[1]] ? "bg-light-grey border-2 border-font-black" : "border border-gray-200 hover:border-font-black"}`}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <input 
                                        type="checkbox" 
                                        className='hidden'
                                        name="amenities"
                                        id={amenitiesList[1]}
                                        value={amenitiesList[1]}
                                        onChange={handleAmenitiesClick}
                                    />
                                    <CgGym className='text-2xl' />
                                    <label 
                                        className='text-sm capitalize cursor-pointer'
                                        htmlFor={amenitiesList[1]}
                                    >{amenitiesList[1]}</label>
                                </motion.div>
                                <motion.div 
                                    className={`flex items-center gap-1 px-3 py-3 rounded-[1.5rem] cursor-pointer ${amenityObj[amenitiesList[2]] ? "bg-light-grey border-2 border-font-black" : "border border-gray-200 hover:border-font-black"}`}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <input 
                                        type="checkbox" 
                                        className='hidden'
                                        name="amenities"
                                        id={amenitiesList[2]}
                                        value={amenitiesList[2]}
                                        onChange={handleAmenitiesClick}
                                    />
                                    <LiaSwimmingPoolSolid className='text-2xl' />
                                    <label 
                                        className='text-sm capitalize cursor-pointer'
                                        htmlFor={amenitiesList[2]}
                                    >{amenitiesList[2]}</label>
                                </motion.div>
                                <motion.div 
                                    className={`flex items-center gap-1 px-3 py-3 rounded-[1.5rem] cursor-pointer ${amenityObj[amenitiesList[3]] ? "bg-light-grey border-2 border-font-black" : "border border-gray-200 hover:border-font-black"}`}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <input 
                                        type="checkbox" 
                                        className='hidden'
                                        name="amenities"
                                        id={amenitiesList[3]}
                                        value={amenitiesList[3]}
                                        onChange={handleAmenitiesClick}
                                    />
                                    <FaTv className='text-2xl' />
                                    <label 
                                        className='text-sm capitalize cursor-pointer'
                                        htmlFor={amenitiesList[3]}    
                                    >{amenitiesList[3]}</label>
                                </motion.div>
                                <motion.div 
                                    className={`flex items-center gap-1 px-3 py-3 rounded-[1.5rem] cursor-pointer ${amenityObj[amenitiesList[4]] ? "bg-light-grey border-2 border-font-black" : "border border-gray-200 hover:border-font-black"}`}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <input 
                                        type="checkbox" 
                                        className='hidden'
                                        name="amenities"
                                        id={amenitiesList[4]}
                                        value={amenitiesList[4]}
                                        onChange={handleAmenitiesClick}
                                    />
                                    <IoWifiOutline className='text-2xl' />
                                    <label 
                                        className='text-sm capitalize cursor-pointer'
                                        htmlFor={amenitiesList[4]}
                                    >{amenitiesList[4]}</label>
                                </motion.div>
                                <motion.div 
                                    className={`flex items-center gap-1 px-3 py-3 rounded-[1.5rem] cursor-pointer ${amenityObj[amenitiesList[5]] ? "bg-light-grey border-2 border-font-black" : "border border-gray-200 hover:border-font-black"}`}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <input 
                                        type="checkbox" 
                                        className='hidden'
                                        name="amenities"
                                        id={amenitiesList[5]}
                                        value={amenitiesList[5]}
                                        onChange={handleAmenitiesClick}
                                    />
                                    <BiSolidWasher className='text-2xl' />
                                    <label 
                                        className='text-sm capitalize cursor-pointer'
                                        htmlFor={amenitiesList[5]}
                                    >{amenitiesList[5]}</label>
                                </motion.div>
                                <motion.div 
                                    className={`flex items-center gap-1 px-3 py-3 rounded-[1.5rem] cursor-pointer ${amenityObj[amenitiesList[6]] ? "bg-light-grey border-2 border-font-black" : "border border-gray-200 hover:border-font-black"}`}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <input 
                                        type="checkbox" 
                                        className='hidden'
                                        name="amenities"
                                        id={amenitiesList[6]}
                                        value={amenitiesList[6]}
                                        onChange={handleAmenitiesClick}
                                    />
                                    <BiSolidDryer className='text-2xl' />
                                    <label 
                                        className='text-sm capitalize cursor-pointer'
                                        htmlFor={amenitiesList[6]}
                                    >{amenitiesList[6]}</label>
                                </motion.div>
                                <motion.div 
                                    className={`flex items-center gap-1 px-3 py-3 rounded-[1.5rem] cursor-pointer ${amenityObj[amenitiesList[7]] ? "bg-light-grey border-2 border-font-black" : "border border-gray-200 hover:border-font-black"}`}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <input 
                                        type="checkbox" 
                                        className='hidden'
                                        name="amenities"
                                        id={amenitiesList[7]}
                                        value={amenitiesList[7]}
                                        onChange={handleAmenitiesClick}
                                    />
                                    <LuCircleParking className='text-2xl' />
                                    <label 
                                        className='text-sm capitalize cursor-pointer'
                                        htmlFor={amenitiesList[7]}
                                    >{amenitiesList[7]}</label>   
                                </motion.div>
                                <motion.div 
                                    className={`flex items-center gap-1 px-3 py-3 rounded-[1.5rem] cursor-pointer ${amenityObj[amenitiesList[8]] ? "bg-light-grey border-2 border-font-black" : "border border-gray-200 hover:border-font-black"}`}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <input 
                                        type="checkbox" 
                                        className='hidden'
                                        name="amenities"
                                        id={amenitiesList[8]}
                                        value={amenitiesList[8]}
                                        onChange={handleAmenitiesClick}
                                    />
                                    <FaTemperatureFull className='text-2xl' />
                                    <label 
                                        className='text-sm capitalize cursor-pointer'
                                        htmlFor={amenitiesList[8]}
                                    >{amenitiesList[8]}</label>
                                </motion.div>
                                <motion.div 
                                    className={`flex items-center gap-1 px-3 py-3 rounded-[1.5rem] cursor-pointer ${amenityObj[amenitiesList[9]] ? "bg-light-grey border-2 border-font-black" : "border border-gray-200 hover:border-font-black"}`}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <input 
                                        type="checkbox" 
                                        className='hidden'
                                        name="amenities"
                                        id={amenitiesList[9]}
                                        value={amenitiesList[9]}
                                        onChange={handleAmenitiesClick}
                                    />
                                    <LuSnowflake className='text-2xl' />
                                    <label 
                                        className='text-sm capitalize cursor-pointer'
                                        htmlFor={amenitiesList[9]}
                                    >{amenitiesList[9]}</label>
                                </motion.div>
                                <motion.div 
                                    className={`flex items-center gap-1 px-3 py-3 rounded-[1.5rem] cursor-pointer ${amenityObj[amenitiesList[10]] ? "bg-light-grey border-2 border-font-black" : "border border-gray-200 hover:border-font-black"}`}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <input 
                                        type="checkbox" 
                                        className='hidden'
                                        name="amenities"
                                        id={amenitiesList[10]}
                                        value={amenitiesList[10]}
                                        onChange={handleAmenitiesClick}
                                    />
                                    <MdOutlineElevator className='text-2xl' />
                                    <label 
                                        className='text-sm capitalize cursor-pointer'
                                        htmlFor={amenitiesList[10]}
                                    >{amenitiesList[10]}</label>
                                </motion.div>
                            </div>
                        </div>
                        <div className='pb-[2rem] mx-[1rem]'>
                            <h3 className='text-lg font-semibold pt-[1rem] pb-[.6rem]'>Property type</h3>
                            <div className='flex flex-wrap gap-4'>
                                <motion.div 
                                    className={`flex items-center gap-1 px-3 py-3 rounded-[1.5rem] cursor-pointer ${propertyTypeObj[propertyTypes[0]] ? "bg-light-grey border-2 border-font-black" : "border border-gray-200 hover:border-font-black"}`}
                                    whileTap={{ scale: 0.9 }}
                                > 
                                    <input 
                                        type="checkbox" 
                                        className='hidden'
                                        name="propertyType"
                                        id={propertyTypes[0]}
                                        value={propertyTypes[0]}
                                        onChange={handlePropertyTypeClick} 
                                    />
                                    <LuHotel className='text-2xl' />
                                    <label 
                                        className='text-sm capitalize cursor-pointer'
                                        htmlFor={propertyTypes[0]}
                                    >{propertyTypes[0]}</label>
                                </motion.div>
                                <motion.div 
                                    className={`flex items-center gap-1 px-3 py-3 rounded-[1.5rem] cursor-pointer ${propertyTypeObj[propertyTypes[1]] ? "bg-light-grey border-2 border-font-black" : "border border-gray-200 hover:border-font-black"}`}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <input 
                                        type="checkbox" 
                                        className='hidden'
                                        name="propertyType"
                                        id={propertyTypes[1]}
                                        value={propertyTypes[1]}
                                        onChange={handlePropertyTypeClick} 
                                    />
                                    <LuHouse className='text-2xl' />
                                    <label 
                                        className='text-sm capitalize cursor-pointer'
                                        htmlFor={propertyTypes[1]}
                                    >{propertyTypes[1]}</label>
                                </motion.div>
                                <motion.div 
                                    className={`flex items-center gap-1 px-3 py-3 rounded-[1.5rem] cursor-pointer ${propertyTypeObj[propertyTypes[2]] ? "bg-light-grey border-2 border-font-black" : "border border-gray-200 hover:border-font-black"}`}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <input 
                                        type="checkbox" 
                                        className='hidden'
                                        name="propertyType"
                                        id={propertyTypes[2]}
                                        value={propertyTypes[2]}
                                        onChange={handlePropertyTypeClick} 
                                    />
                                    <LuTreePalm className='text-2xl' />
                                    <label 
                                        className='text-sm capitalize cursor-pointer'
                                        htmlFor={propertyTypes[2]}
                                    >{propertyTypes[2]}</label>
                                </motion.div>
                                <motion.div 
                                    className={`flex items-center gap-1 px-3 py-3 rounded-[1.5rem] cursor-pointer ${propertyTypeObj[propertyTypes[3]] ? "bg-light-grey border-2 border-font-black" : "border border-gray-200 hover:border-font-black"}`}
                                    whileTap={{ scale: 0.9 }}                
                                >
                                    <input 
                                        type="checkbox" 
                                        className='hidden'
                                        name="propertyType"
                                        id={propertyTypes[3]}
                                        value={propertyTypes[3]}
                                        onChange={handlePropertyTypeClick} 
                                    />
                                    <PiBuildingApartment className='text-2xl' />
                                    <label 
                                        className='text-sm capitalize cursor-pointer'
                                        htmlFor={propertyTypes[3]}
                                    >{propertyTypes[3]}</label>
                                </motion.div>
                                <motion.div 
                                    className={`flex items-center gap-1 px-3 py-3 rounded-[1.5rem] cursor-pointer ${propertyTypeObj[propertyTypes[4]] ? "bg-light-grey border-2 border-font-black" : "border border-gray-200 hover:border-font-black"}`}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <input 
                                        type="checkbox" 
                                        className='hidden'
                                        name="propertyType"
                                        id={propertyTypes[4]}
                                        value={propertyTypes[4]}
                                        onChange={handlePropertyTypeClick} 
                                    />
                                    <MdCabin className='text-2xl' />
                                    <label 
                                        className='text-sm capitalize cursor-pointer'
                                        htmlFor={propertyTypes[4]}
                                    >{propertyTypes[4]}</label>
                                </motion.div>
                                <motion.div 
                                    className={`flex items-center gap-1 px-3 py-3 rounded-[1.5rem] cursor-pointer ${propertyTypeObj[propertyTypes[5]] ? "bg-light-grey border-2 border-font-black" : "border border-gray-200 hover:border-font-black"}`}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <input 
                                        type="checkbox" 
                                        className='hidden'
                                        name="propertyType"
                                        id={propertyTypes[5]}
                                        value={propertyTypes[5]}
                                        onChange={handlePropertyTypeClick} 
                                    />
                                    <MdHouseSiding className='text-2xl' />
                                    <label 
                                        className='text-sm capitalize cursor-pointer'
                                        htmlFor={propertyTypes[5]}
                                    >{propertyTypes[5]}</label>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className='filter-buttons flex justify-between items-center py-[1.5rem] px-[1rem] rounded-b-[32px] shadow-[0_-2px_10px_rgba(0,0,0,0.16)]'>
                        <button className='font-semibold text-md tracking-tighter cursor-pointer px-3 py-2 rounded-xl hover:bg-light-grey'>Clear all</button>
                        <button 
                            className='font-semibold text-md tracking-tighter bg-black text-white px-5 py-3 rounded-xl cursor-pointer'
                            onClick={toggleFilterModal}
                        >Show {filteredProperties.length} places</button>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
}

export default FilterModal;