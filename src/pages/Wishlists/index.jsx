import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useLocation } from 'react-router-dom';

const Wishlists = ({ properties, userWishlists, setCurrentPath }) => {
    const [isMouseOver, setIsMouseOver] = useState(false);

    // Get current url path name
    let location = useLocation();
    setCurrentPath(location.pathname);
  
    // Get property ID from userwishlists
    let userWishlistsProperties = [];
    let addedProperties = [];

    if(Object.keys(userWishlists).length != 0) {
        Object.keys(userWishlists.list123.properties).map(items=>{
            userWishlistsProperties.push(items);
         })

        properties.map((data) => {
            data.id === userWishlistsProperties[0] && addedProperties.push(data);
        })
    }

    function mouseOver() {
        setIsMouseOver(true);
    }

    function mouseLeave() {
        setIsMouseOver(false);
    }

    if(addedProperties.length > 0){
    return (
        <>
            <h2 className="font-semibold text-3xl py-8">Wishlists</h2>
            <div className="relative">
                {isMouseOver && 
                <div className="absolute rounded-[50%] bg-white p-1 top-2.5 left-3">
                    <IoMdClose  className="text-2xl text-font-light-black" />
                </div>
                }
                <img src={addedProperties[0].images[0].url}
                     className="rounded-2xl shadow-[0px_6px_16px_rgba(0,0,0,0.12)] cursor-pointer"
                     onMouseOver={() => {mouseOver()}}
                     onMouseLeave={() => {mouseLeave()}}
                />
                <p className="font-semibold pt-4">{userWishlists.list123.name}</p>
                <p className="text-font-grey">{Object.keys(userWishlists).length - 1} saved</p>
            </div>
        </>
    )}
}

export default Wishlists;