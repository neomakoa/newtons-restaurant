import React from "react";
import Calendar from "react-calendar";

import bg from "./assets/images/luca-bravo-8x_fFNrmeDk-unsplash.jpg";

const Locations = () => {
  return (
    <div className="container">
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          height: "70vh",
          opacity: 0.97,
          display: "flex", 
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="display-1 text-center text-success">
          Waterfall Corner
        </div>
      </div>
      <div className="row bg-dark m-0">
        <div className="col-md-7 p-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.362823530499!2d28.085455671198357!3d-26.021682106128566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957218a654179d%3A0x2e759bfc2115e78d!2sWaterfall%20Corner!5e0!3m2!1sen!2sza!4v1702999535908!5m2!1sen!2sza"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="col-md-5 p-3">
          <h2 className="text-success">Contact Us</h2>
          <h4 className="text-primary">Waterfall Corner, Midrand</h4>
          <p className="text-primary">(011) 345 6768</p>
          <p className="text-primary">waterfallcorner@newtons.co.za</p>
          <hr />
          <h2 className="text-success">Operating Hours</h2>
          <p className="text-primary">Monday - Sunday (09h00 - 00h00)</p>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Book A Reservation
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Reservation
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <Calendar />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Locations;
