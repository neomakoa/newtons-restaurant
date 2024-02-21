import React from "react";
import Calendar from "react-calendar";

const RestaurantDetails = ({location, city, tel, email}) => {
  return (
    <div>
      <h2 className="text-secondary">Contact Us</h2>
      <h4 className="text-primary">
        {location}, {city}
      </h4>
      <p className="text-primary">{tel}</p>
      <p className="text-primary">{email}</p>
      <hr />
      <h2 className="text-secondary">Operating Hours</h2>
      <p className="text-primary">Monday - Sunday (09h00 - 00h00)</p>

      {/* Modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#reservationModal"
      >
        Book A Reservation
      </button>

      <div
        className="modal fade"
        id="reservationModal"
        tabIndex="-1"
        aria-labelledby="reservationModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="reservationModalLabel">
                Reservation for {location}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Calendar />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
