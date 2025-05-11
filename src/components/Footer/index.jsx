import { useState } from 'react';
import { motion } from 'framer-motion';
import { LuEarth } from "react-icons/lu";
import { FaDollarSign } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = ({ currentPath }) => { 
    let [listItem, setListItem] = useState('Popular');

    const onListItemChange = (value) => {
        const selectedListItem = value;
        setListItem(selectedListItem);
    }

    const displayListItems = () => {
        switch(listItem) {
            case 'Popular' : 
                return (
                    <div className="text-sm grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2">
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Amsterdam</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Barcelona</h3>
                            <p className="text-font-grey hover:text-font-black">Apartment rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Barrie</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Barry's Bay</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>The Blue Mountains</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Boston</h3>
                            <p className="text-font-grey hover:text-font-black">Beach house rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Calabogie</h3>
                            <p className="text-font-grey hover:text-font-black">Cottage rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Sault Ste. Marie</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Cancún</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Chicago</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Cobourg</h3>
                            <p className="text-font-grey hover:text-font-black">Cottage rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Davenport</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                    </div>
                );
            case 'Lakes' : 
                return (
                    <div className="text-sm grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2">
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Tokyo</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Paris</h3>
                            <p className="text-font-grey hover:text-font-black">Apartment rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Sydney</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Dubai</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Singapore</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>London</h3>
                            <p className="text-font-grey hover:text-font-black">Beach house rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Mumbai</h3>
                            <p className="text-font-grey hover:text-font-black">Cottage rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Berlin</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Seoul</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Rome</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Madrid</h3>
                            <p className="text-font-grey hover:text-font-black">Cottage rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Bangkok</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                    </div>
                );
            case 'Mountains' : 
                return (
                    <div className="text-sm grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2">
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Zurich</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Vienna</h3>
                            <p className="text-font-grey hover:text-font-black">Apartment rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Copenhagen</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Oslo</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Stockholm</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Helsinki</h3>
                            <p className="text-font-grey hover:text-font-black">Beach house rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Prague</h3>
                            <p className="text-font-grey hover:text-font-black">Cottage rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Budapest</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Warsaw</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Krakow</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Bucharest</h3>
                            <p className="text-font-grey hover:text-font-black">Cottage rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Sofia</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                    </div>
                );
            case 'Coastal' : 
                return (
                    <div className="text-sm grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2">
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Miami</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Sydney</h3>
                            <p className="text-font-grey hover:text-font-black">Apartment rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Tokyo</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Singapore</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Dubai</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Rio de Janeiro</h3>
                            <p className="text-font-grey hover:text-font-black">Beach house rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Cape Town</h3>
                            <p className="text-font-grey hover:text-font-black">Cottage rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Vancouver</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Seoul</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Mumbai</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Auckland</h3>
                            <p className="text-font-grey hover:text-font-black">Cottage rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>San Francisco</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                    </div>
                );
            case 'Islands' : 
                return (
                    <div className="text-sm grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2">
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Bali</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Marrakech</h3>
                            <p className="text-font-grey hover:text-font-black">Apartment rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Reykjavik</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Santorini</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Kyoto</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Havana</h3>
                            <p className="text-font-grey hover:text-font-black">Beach house rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Porto</h3>
                            <p className="text-font-grey hover:text-font-black">Cottage rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Queenstown</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Dubrovnik</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Chiang Mai</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Cusco</h3>
                            <p className="text-font-grey hover:text-font-black">Cottage rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Davenport</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                    </div>
                );
            case 'Outdoors' : 
                return (
                    <div className="text-sm grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2">
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Tokyo</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Rio de Janeiro</h3>
                            <p className="text-font-grey hover:text-font-black">Apartment rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Stockholm</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Cape Town</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Dubai</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Vancouver</h3>
                            <p className="text-font-grey hover:text-font-black">Beach house rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Seoul</h3>
                            <p className="text-font-grey hover:text-font-black">Cottage rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Vienna</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Mumbai</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Edinburgh</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Auckland</h3>
                            <p className="text-font-grey hover:text-font-black">Cottage rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Singapore</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                    </div>
                );
            case 'Unique stays' : 
                return (
                    <div className="text-sm grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2">
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Kyoto</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Montreal</h3>
                            <p className="text-font-grey hover:text-font-black">Apartment rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>San Francisco</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Venice</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Istanbul</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Melbourne</h3>
                            <p className="text-font-grey hover:text-font-black">Beach house rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Athens</h3>
                            <p className="text-font-grey hover:text-font-black">Cottage rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Lisbon</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Prague</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Dublin</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Brussels</h3>
                            <p className="text-font-grey hover:text-font-black">Cottage rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Oslo</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                    </div>
                );
            case 'Categories' : 
                return (
                    <div className="text-sm grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2">
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Amsterdam</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Barcelona</h3>
                            <p className="text-font-grey hover:text-font-black">Apartment rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Barrie</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Barry's Bay</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>The Blue Mountains</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Boston</h3>
                            <p className="text-font-grey hover:text-font-black">Beach house rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Calabogie</h3>
                            <p className="text-font-grey hover:text-font-black">Cottage rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Sault Ste. Marie</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Cancún</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Chicago</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Cobourg</h3>
                            <p className="text-font-grey hover:text-font-black">Cottage rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Davenport</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                    </div>
                );
            case 'Things to do' : 
                return (
                    <div className="text-sm grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2">
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Vancouver</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Montreal</h3>
                            <p className="text-font-grey hover:text-font-black">Apartment rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>San Francisco</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Miami</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Las Vegas</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Seattle</h3>
                            <p className="text-font-grey hover:text-font-black">Beach house rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Austin</h3>
                            <p className="text-font-grey hover:text-font-black">Cottage rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Denver</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Portland</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Nashville</h3>
                            <p className="text-font-grey hover:text-font-black">Pet-friendly rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>San Diego</h3>
                            <p className="text-font-grey hover:text-font-black">Cottage rentals</p>
                        </div>
                        <div className="cursor-pointer font-medium pt-5">
                            <h3>Phoenix</h3>
                            <p className="text-font-grey hover:text-font-black">Vacation rentals</p>
                        </div>
                    </div>
                );
        }
    }

    return ( 
        <footer className="px-[3rem] mt-[3rem] bg-light-grey">
            {currentPath === "/trips" || currentPath === "/wishlists" || currentPath === "/:id" ? "" :
                <>
                    <h2 className="font-semibold text-xl py-[3rem]">Inspiration for future getaways</h2>
                    <section>
                        <ul className="flex gap-3 text-sm border-b border-[#dddddd]">
                            <motion.li 
                                className={`cursor-pointer pb-4 ${listItem === "Popular" &&'border-b-2 font-medium'}`}
                                onClick={() => {onListItemChange("Popular")}}
                                whileTap={{ scale: 0.9 }}
                            >Popular</motion.li>
                            <motion.li
                                className={`cursor-pointer pb-4 ${listItem === "Lakes" &&'border-b-2 font-medium'}`}
                                onClick={() => {onListItemChange("Lakes")}}
                                whileTap={{ scale: 0.9 }}
                            >Lakes</motion.li>
                            <motion.li
                                className={`cursor-pointer pb-4 ${listItem === "Mountains" &&'border-b-2 font-medium'}`}
                                onClick={() => {onListItemChange("Mountains")}}
                                whileTap={{ scale: 0.9 }}
                            >Mountains</motion.li>
                            <motion.li
                                className={`cursor-pointer pb-4 ${listItem === "Coastal" &&'border-b-2 font-medium'}`}
                                onClick={() => {onListItemChange("Coastal")}}
                                whileTap={{ scale: 0.9 }}
                            >Coastal</motion.li>
                            <motion.li
                                className={`cursor-pointer pb-4 ${listItem === "Islands" &&'border-b-2 font-medium'}`}
                                onClick={() => {onListItemChange("Islands")}}
                                whileTap={{ scale: 0.9 }}
                            >Islands</motion.li>
                            <motion.li
                                className={`cursor-pointer pb-4 ${listItem === "Outdoors" &&'border-b-2 font-medium'}`}
                                onClick={() => {onListItemChange("Outdoors")}}
                                whileTap={{ scale: 0.9 }}
                            >Outdoors</motion.li>
                            <motion.li
                                className={`cursor-pointer pb-4 ${listItem === "Unique stays" &&'border-b-2 font-medium'}`}
                                onClick={() => {onListItemChange("Unique stays")}}
                                whileTap={{ scale: 0.9 }}
                            >Unique stays</motion.li>
                            <motion.li
                                className={`cursor-pointer pb-4 ${listItem === "Categories" &&'border-b-2 font-medium'}`}
                                onClick={() => {onListItemChange("Categories")}}
                                whileTap={{ scale: 0.9 }}
                            >Categories</motion.li>
                            <motion.li
                                className={`cursor-pointer pb-4 ${listItem === "Things to do" &&'border-b-2 font-medium'}`}
                                onClick={() => {onListItemChange("Things to do")}}
                                whileTap={{ scale: 0.9 }}
                            >Things to do</motion.li>
                        </ul>
                        {displayListItems()}
                    </section>
                </>
            }
            <section className="pb-8 text-sm grid lg:grid-cols-3 sm:grid-cols-1">
                <div className="pt-14 pb-4">
                    <h3 className="font-semibold pb-4">Support</h3>
                    <ul className="flex flex-col gap-4">
                        <li><a className="cursor-pointer hover:underline">Help Centre</a></li>
                        <li><a className="cursor-pointer hover:underline">AirCover</a></li>
                        <li><a className="cursor-pointer hover:underline">Anti-discrimination</a></li>
                        <li><a className="cursor-pointer hover:underline">Disabiaty support</a></li>
                        <li><a className="cursor-pointer hover:underline">Cancellation options</a></li>
                        <li><a className="cursor-pointer hover:underline">Report neighbourhood concern</a></li>
                    </ul>
                </div>
                <div className="pt-14 pb-4">
                    <h3 className="font-semibold pb-4">Hosting</h3>
                    <ul className="flex flex-col gap-4">
                        <li><a className="cursor-pointer hover:underline">Airbnb your home</a></li>
                        <li><a className="cursor-pointer hover:underline">AirCover for Hosts</a></li>
                        <li><a className="cursor-pointer hover:underline">Hosting resources</a></li>
                        <li><a className="cursor-pointer hover:underline">Community forum</a></li>
                        <li><a className="cursor-pointer hover:underline">Hosting responsibly</a></li>
                        <li><a className="cursor-pointer hover:underline">Join a free hosting class</a></li>
                        <li><a className="cursor-pointer hover:underline">Find a co-host</a></li>
                    </ul>
                </div>
                <div  className="pt-14 pb-4">
                    <h3 className="font-semibold pb-4">Airbnb</h3>
                    <ul className="flex flex-col gap-4">
                        <li><a className="cursor-pointer hover:underline">Newsroom</a></li>
                        <li><a className="cursor-pointer hover:underline">New features</a></li>
                        <li><a className="cursor-pointer hover:underline">Careers</a></li>
                        <li><a className="cursor-pointer hover:underline">Investors</a></li>
                        <li><a className="cursor-pointer hover:underline">Gift cards</a></li>
                        <li><a className="cursor-pointer hover:underline">Airbnb.org emergency stays</a></li>
                    </ul>
                </div>
            </section>
            <div className="flex justify-between text-sm border-t border-[#dddddd] py-6">
                <ul className="flex gap-1">
                    <li>© 2025 Airbnb clone website. by Ikumi Mine</li>
                    <li>&middot;</li>
                    <li><a className="cursor-pointer hover:underline">Privacy</a></li>
                    <li>&middot;</li>
                    <li><a className="cursor-pointer hover:underline">Terms</a></li>
                    <li>&middot;</li>
                    <li><a className="cursor-pointer hover:underline">Sitemap</a></li>
                </ul>
                <div className="flex gap-4 font-medium">
                    <div className="flex gap-3">
                        <div className="flex gap-2 cursor-pointer px-2 py-1.5 rounded-lg hover:bg-[#EBEBEB]">
                            <LuEarth className='text-lg'/>
                            <p>English (CA)</p>
                        </div>
                        <div className="flex items-center gap-1.5 cursor-pointer px-2 py-1.5 rounded-lg hover:bg-[#EBEBEB]">
                            <FaDollarSign />
                            <p>CAD</p>
                        </div>
                    </div>
                    <ul className="flex items-center gap-4">
                        <li><a className='cursor-pointer'><FaFacebook className='text-lg'/></a></li>
                        <li><a className='cursor-pointer'><FaXTwitter className='text-lg'/></a></li>
                        <li><a className='cursor-pointer'><FaInstagram className='text-lg'/></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}   

export default Footer;