import { useLocation } from "react-router-dom";
import BookingForm from "../../components/Booking-form";

const PropertyDetails = ({ properties, setCurrentPath }) => {

    // Get current url path name
    let location = useLocation();
    setCurrentPath(location.pathname);

    // Get property data from propertyid
    const currentProperty = [];
    const id = (location.pathname.slice(1)); // Set a current propertyid from the current URL info
    properties.map((data) => {
        data.id === id && currentProperty.push(data);
    })

    if(currentProperty.length != 0) {
        return (
            <section className="mt-12">
                <h2 className="font-semibold text-2xl mb-8">{currentProperty[0].title}</h2>
                <div className="grid grid-cols-4 gap-2 rounded-2xl overflow-hidden">
                    <img src={currentProperty[0].images[0].url} className="col-span-2 w-full"/>
                    <img src={currentProperty[0].images[1].url} />
                    <img src={currentProperty[0].images[2].url} /> 
                </div>
                <div>
                    <p className="mt-6 font-semibold text-xl capitalize">{currentProperty[0].roomType.replace("_", " ")} in {currentProperty[0].location.city}, {currentProperty[0].location.country}</p>
                    <p>{currentProperty[0].description}</p>
                </div>
                <BookingForm currentProperty={currentProperty} />
            </section>
        )
    }
}

export default PropertyDetails;