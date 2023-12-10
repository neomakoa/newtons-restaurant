import hero from "./assets/images/sebastian-schuppik-H7xTpvBjJS4-unsplash.jpg";
import img1 from "./assets/images/alexandru-bogdan-ghita-UeYkqQh4PoI-unsplash.jpg";
import img2 from "./assets/images/louis-hansel-8qT_cml7M68-unsplash.jpg";
import img3 from "./assets/images/lidye-1Shk_PkNkNw-unsplash.jpg";
import img4 from "./assets/images/ash-edmonds-SSh9jI6sw-I-unsplash.jpg";
import img5 from "./assets/images/ash-edmonds-fsI-_MRsic0-unsplash.jpg";
import img6 from "./assets/images/david-todd-mccarty-46ht3RkmLBo-unsplash.jpg";
import imga from "./assets/images/niklas-rhose-FlmXvqlD-nI-unsplash.jpg";
import imgb from "./assets/images/tim-toomey-pe9dvM1rQkM-unsplash.jpg";
import area1 from "./assets/images/jason-leung-poI7DelFiVA-unsplash.jpg";

export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-black">
        <div className="container">
          <a className="navbar-brand display-6 text-success" href="/">
            Newton's
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Menus
                </a>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle text-white"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Locations
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/*hero section  */}
      <div className="container">
        <div className="row ">
          <div className="col-12 bg-dark p-0">
            <img src={hero} alt="steak" className="img-fluid" />
            <div className="display-1 text-center text-success my-2 p-5">
              Welcome to Newton's
            </div>
          </div>
        </div>

        {/* section 1 */}
        <div className="row ">
          <div className="col-md-6 bg-primary p-0">
            <div className="display-6 text-center">
              <img src={imga} alt="steak" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 bg-primary">
            <div className="display-6 pt-3 px-3 text-center text-success">
              About Us
            </div>
            <p className="p-3 text-center text-dark">
              At Newton's, we believe in the power of good food to bring people
              closer. Our chefs are passionate about crafting a diverse menu
              that caters to every palate, blending global flavors with locally
              sourced ingredients. <br/> From hearty comfort food to innovative
              culinary creations, our menu is a celebration of taste and
              quality. We invite you to immerse yourself in a world where
              culinary artistry meets architectural finesse—a haven where every
              detail contributes to an unforgettable fine dining experience.
            </p>
          </div>

          <div className="col-md-7 bg-dark">
            <div className="display-6 pt-3 px-3 text-success text-center">
              Menus
            </div>
            <p className="p-3 text-center text-primary">
              Come, join us at Newton's for a culinary adventure that transcends
              the ordinary—a place where exceptional food, warm hospitality, and
              family moments converge in perfect harmony. Our drink menu is more
              than a selection; it's a symphony of flavors, an ode to
              craftsmanship, and a celebration of the art of beverage curation.
              Cheers to a journey of taste and a toast to your unforgettable
              dining experience!
            </p>
            <p className="text-center text-success"><em>Explore Our Menus</em></p>
          </div>
          <div className="col-md-5 bg-primary p-0">
            <div className="display-6 text-center">
              <img src={imgb} alt="steak" className="img-fluid " />
            </div>
          </div>

          <div className="col-md-5 bg-primary p-0">
            <div className="display-6 text-center">
              <img src={area1} alt="steak" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-7 bg-primary">
            <div className="display-6 pt-3 px-3 text-center text-success">
              Locations & Reservations
            </div>
            <p className="p-3 text-center text-dark">
              The interior of Newton's restaurants boasts a palette of muted
              tones, soft lighting, and tasteful decor that exudes understated
              opulence. From the plush upholstery to the carefully chosen
              artwork adorning the walls, each element has been selected to
              create a harmonious visual symphony. Enhancing the ambiance is the
              soft melody of live music, carefully curated to complement the
              dining experience without overpowering conversation. Our live
              musicians add an extra layer of sophistication to your evening.
            </p>
          </div>
        </div>

        {/* section 2 */}
        {/* <div className="row bg-dark py-2">
          <div
            className="col-6 bg-dark"
            style={{
              backgroundImage: `url(${area1})`,
              backgroundSize: "cover",
            }}
          >
            <div className="display-6 text-white text-center m-4 p-5">
              locations
            </div>
          </div>
          <div
            className="col-6 bg-dark"
            style={{
              backgroundImage: `url(${area1})`,
              backgroundSize: "cover",
            }}
          >
            <div className="display-6 text-white text-center m-4 p-5">
              locations
            </div>
          </div>
        </div> */}

        {/* section 3 */}
        <div className="row ">
          <div className="col-4 p-0 bg-primary">
            <div className="display-1">
              <img src={img2} alt="steak" className="img-fluid" />
            </div>
          </div>
          <div className="col-4 p-0 bg-primary">
            <div className="display-1">
              <img src={img1} alt="steak" className="img-fluid" />
            </div>
          </div>
          <div className="col-4 p-0 bg-primary">
            <div className="display-1">
              <img src={img3} alt="steak" className="img-fluid" />
            </div>
          </div>
          <div className="col-4 p-0 bg-primary">
            <div className="display-1">
              <img src={img4} alt="steak" className="img-fluid" />
            </div>
          </div>
          <div className="col-4 p-0 bg-primary">
            <div className="display-1">
              <img src={img6} alt="steak" className="img-fluid" />
            </div>
          </div>
          <div className="col-4 p-0 bg-primary">
            <div className="display-1">
              <img src={img5} alt="steak" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      {/* footer section */}
      <div className="bg-black text-white py-3 display-6">
        <div className="container">footer</div>
      </div>
    </div>
  );
}
