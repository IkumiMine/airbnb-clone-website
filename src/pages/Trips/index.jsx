import { useLocation } from 'react-router-dom';

const Trips = ({ properties, userBookings, setCurrentPath }) => {
    // Get current url path name
    let location = useLocation();
    setCurrentPath(location.pathname);
    
    // Filter properties by userBookings propertyId
    let bookedProperties = [];
    properties.map((data) => {
        data.id === userBookings.propertyId && bookedProperties.push(data);
    })
    
    // Convert from timestamp data type to Javascript data type
    let splitCheckInDate;
    let splitCheckOutDate;
    if(Object.keys(userBookings).length != 0) {
        splitCheckInDate = userBookings.checkInDate.toDate().toDateString().split(" ");
        splitCheckOutDate = userBookings.checkOutDate.toDate().toDateString().split(" ");
    }

    return (
        <>
            <h2 className="font-semibold text-3xl py-8">Trips</h2>
            <div>
                <h3 className="text-2xl font-medium text-font-light-black">Upcoming trips</h3>
                {bookedProperties.map((bookedProperty) => (
                    <div key={bookedProperty.id}
                         className="flex items-center gap-4 py-6 cursor-pointer"
                    >
                        <img src={bookedProperty.images[0].url} 
                             alt={bookedProperty.title}
                             className="rounded-2xl w-20"
                        />
                        <div>
                            <p>{bookedProperty.location.city}</p>
                            <p className="font-medium text-sm text-font-grey">Hosted by Leah</p>
                            {splitCheckInDate && splitCheckOutDate ?
                            <p className="font-medium text-sm text-font-grey">{splitCheckInDate[1]} {splitCheckInDate[2]} - {splitCheckOutDate[1]} {splitCheckOutDate[2]}, {splitCheckOutDate[3]}</p> : ""
                            }
                        </div>
                    </div>
                    ))
                }
                <div className="flex gap-1 tracking-tight border-t border-grey text-sm">
                    <p className="py-8">Can’t find your reservation here?</p>
                    <a href="#" className="font-medium underline py-8 cursor-pointer">Visit the Help Center</a>
                </div>
            </div>
        </>
    )
}

export default Trips;