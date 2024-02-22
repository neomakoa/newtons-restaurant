import { cities } from "../../assets/images";

const restaurantsList = [
  {
    id: 1,
    location: "Waterfall Corner",
    city: "Midrand",
    tel: "(011) 345 6768",
    email: "waterfallcorner@newtons.co.za",
    bg: cities[0],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.362823530499!2d28.085455671198357!3d-26.021682106128566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957218a654179d%3A0x2e759bfc2115e78d!2sWaterfall%20Corner!5e0!3m2!1sen!2sza!4v1702999535908!5m2!1sen!2sza",
    coordinates: { lat: -26.021513434859585, lng: 28.09014419690288 },
  },
  {
    id: 2,
    location: "Menlyn Park",
    city: "Pretoria",
    tel: "(011) 345 4568",
    email: "menlynpark@newtons.co.za",
    bg: cities[1],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.63521061073!2d28.27148228885498!3d-25.782610000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9560c074684203%3A0x58d7d72eb19ca8f3!2sShop%20No.%20G12%2C%20Menlyn%20Park%2C%20Atterbury%20Rd%2C%20Menlo%20Park%2C%20Pretoria%2C%200063!5e0!3m2!1sen!2sza!4v1704108571729!5m2!1sen!2sza",
    coordinates: { lat: -25.78253473228365, lng: 28.274767695037106 },
  },
  {
    id: 3,
    location: "Oceans Mall",
    city: "Umhlanga",
    tel: "(011) 345 1068",
    email: "oceansmall@newtons.co.za",
    bg: cities[2],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.8229725481915!2d31.080991372215042!3d-29.724886761447536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef70fd43ef4d2cd%3A0xb3272b3febe498d7!2sOceans%20Mall!5e0!3m2!1sen!2sza!4v1704109150437!5m2!1sen!2sza",
    coordinates: { lat: -29.7246771816699, lng: 31.08562625290736 },
  },
  {
    id: 4,
    location: "V&A Waterfront",
    city: "Cape Town",
    tel: "(011) 345 2968",
    email: "waterfront@newtons.co.za",
    bg: cities[3],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13245.418663209393!2d18.41356754377755!3d-33.90627041244294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc6750cf9544a5%3A0x1dc3860578bb4780!2sV%26A%20Waterfront!5e0!3m2!1sen!2sza!4v1704109278304!5m2!1sen!2sza",
    coordinates: { lat: -33.90733268437153, lng: 18.41990450841291 },
  },
  {
    id: 5,
    location: "Mimosa Mall",
    city: "Bloemfontein",
    tel: "(011) 345 3868",
    email: "mimosamall@newtons.co.za",
    bg: cities[4],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111539.41472647441!2d26.117867247085687!3d-29.11729023332182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8fc530b5eb2ca3%3A0x2a1c0cfb774fc66f!2sMimosa%20Mall%20Bloemfontein!5e0!3m2!1sen!2sza!4v1704109452637!5m2!1sen!2sza",
    coordinates: { lat: -29.108754043418127, lng: 26.20221173981232 },
  },
  {
    id: 6,
    location: "Sun Central",
    city: "Sun City",
    tel: "(011) 345 4768",
    email: "suncentral@newtons.co.za",
    bg: cities[5],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4141.9397228445105!2d27.0936788933809!3d-25.345570323529344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebdd41dd74fd87d%3A0xe02fe684484a0a7!2sSun%20Central!5e0!3m2!1sen!2sza!4v1704109709717!5m2!1sen!2sza",
    coordinates: { lat: -25.34549911655312, lng: 27.09638307781684 },
  },
];
export default restaurantsList;
