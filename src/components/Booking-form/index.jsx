const BookingForm  = ({ currentProperty }) => {

    return (
        <form>
            <p>$ {currentProperty[0].price.basePrice} CAD</p>
            <label className="uppercase">Check-in</label>
            <input type="date" />
        </form>
    )
}

export default BookingForm;