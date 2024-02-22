import React from "react";
import { aboutHero } from "../../assets/images";

const AboutUs = () => {
  return (
    <div className="container p-0">
      <div className="row ">
        <div className="col-12 bg-dark p-0">
          <div
            className="bgHeroImg"
            style={{
              backgroundImage: `url(${aboutHero})`,
              height: "80vh",
            }}
          >
            <div className="display-1 text-center text-secondary">
              About
              <br />
              Newton's Restaurant
            </div>
          </div>
        </div>
        <div className="col-12 bg-dark">
          <p className="p-5 text-primary">
            At Newton's, we believe in the power of good food to bring people
            closer. Our chefs are passionate about crafting a diverse menu that
            caters to every palate, blending global flavors with locally sourced
            ingredients. From hearty comfort food to innovative culinary
            creations, our menu is a celebration of taste and quality. We invite
            you to immerse yourself in a world where culinary artistry meets
            architectural finesse—a haven where every detail contributes to an
            unforgettable fine dining experience. Step into our elegant dining
            space, where the ambiance is as inviting as the aroma wafting from
            our kitchens. Our commitment to excellence extends beyond just the
            plate; it's in the meticulous attention to ambiance, service, and
            presentation. Whether you're enjoying a romantic evening for two or
            hosting a gathering of friends and family, our dedicated staff
            ensures that every moment is marked by warmth and hospitality.
            <br />
            <br />
            Indulge in our thoughtfully curated wine selection, expertly paired
            to complement the flavors of our dishes, enhancing your culinary
            journey with every sip. From crisp whites to bold reds, our cellar
            holds treasures waiting to be discovered, elevating your dining
            experience to new heights.
            <br />
            And for those special occasions, our private dining options offer an
            intimate setting for celebrations and corporate gatherings alike.
            Let us tailor every detail to your desires, ensuring an
            unforgettable event that reflects your unique taste and style.
            <br />
            <hr />
            <br />
            At Newton's, dining isn't just about nourishment—it's about creating
            memories that linger long after the last bite. Join us, and let's
            savor the joys of exquisite cuisine, shared with those who matter
            most.
            <br />
            As you step through the doors of Newton's, you're greeted not just
            by the tantalizing aroma of expertly prepared dishes, but by an
            atmosphere that whispers of elegance and sophistication. Each corner
            of our establishment tells a story of culinary passion and
            dedication to excellence.
            <br />
            Our chefs, masters of their craft, are constantly pushing boundaries
            and exploring new flavors to delight your senses. Whether it's the
            comforting familiarity of a perfectly seared steak or the
            adventurous thrill of an avant-garde fusion creation, every dish on
            our menu is a work of art, meticulously crafted to ignite your taste
            buds and leave you craving more.
            <br />
            <br />
            But it's not just about the food—it's about the experience. From the
            moment you're seated to the final farewell, every interaction with
            our staff is infused with warmth and genuine hospitality. We take
            pride in ensuring that every guest feels welcomed, valued, and well
            cared for.
            <br />
            And let's not forget about the setting itself. Nestled in the heart
            of the city, our restaurant exudes charm and sophistication, with
            stylish décor and ambient lighting that sets the stage for an
            unforgettable dining experience. Whether you're enjoying a romantic
            dinner for two or hosting a lavish celebration, our versatile space
            can accommodate your needs with ease and grace.
            <br />
            So come, join us at Newton's, and let us take you on a journey of
            culinary delights and unforgettable moments. Because here, good food
            isn't just a meal—it's a celebration of life, love, and the joy of
            sharing it all with those who matter most.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
