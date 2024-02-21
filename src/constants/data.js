import { cities } from "../assets/images";

export const restaurantsList = [
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
// Menu lists
export const menuList1 = [
  {
    title: "Starters",
    items: [
      {
        id: 1,
        item: "Grilled Shrimp Skewers | 175",
        ingredients: "Jumbo shrimp, garlic, lemon, herbs.",
      },
      {
        id: 2,
        item: "Bacon-Wrapped Jalapeño Poppers | 98",
        ingredients: "Jalapeños, cream cheese, bacon, spices.",
      },
      {
        id: 3,
        item: "Smoked Chicken Wings | 90",
        ingredients: "Chicken wings, hickory smoke, BBQ glaze.",
      },
      {
        id: 4,
        item: "Grilled Portobello Mushrooms | 124",
        ingredients: "Portobello mushrooms, balsamic glaze, thyme.",
      },
      {
        id: 5,
        item: "BBQ Brisket Sliders | 100",
        ingredients: "Slow-cooked brisket, slider buns, coleslaw.",
      },
      {
        id: 6,
        item: "Charred Corn Salad | 145",
        ingredients: "Grilled corn, cherry tomatoes, cilantro, lime.",
      },
      {
        id: 8,
        item: "Fire-Grilled Artichoke Hearts | 132",
        ingredients: "Artichoke hearts, garlic butter, Parmesan.",
      },
      {
        id: 9,
        item: "Spicy BBQ Shrimp Tacos | 160",
        ingredients: "Spicy shrimp, avocado, slaw, chipotle mayo.",
      },
      {
        id: 10,
        item: "Grilled Halloumi Skewers | 187",
        ingredients: "Halloumi cheese, bell peppers, zucchini.",
      },
      {
        id: 11,
        item: "Smoked Salmon Crostini | 137",
        ingredients: "Smoked salmon, cream cheese, capers, dill.",
      },
    ],
  },
  {
    title: "Mains Meals",
    items: [
      {
        id: 12,
        item: "Signature BBQ Ribs | 257",
        ingredients: "Baby back ribs, house BBQ sauce, coleslaw.",
      },
      {
        id: 13,
        item: "Tuscan Grilled Chicken | 325",
        ingredients: "Herb-marinated chicken, sun-dried tomatoes, olives.",
      },
      {
        id: 14,
        item: "Grilled Swordfish Steak | 420",
        ingredients: "Swordfish steak, lemon herb marinade.",
      },
      {
        id: 15,
        item: "Chimichurri Steak | 435",
        ingredients: "Grilled sirloin, chimichurri sauce, roasted potatoes.",
      },
      {
        id: 16,
        item: "Maple Glazed Cedar Plank Salmon | 298",
        ingredients: "Cedar plank salmon, maple glaze, roasted vegetables.",
      },
      {
        id: 17,
        item: "Vegetarian Grilled Portobello Burger | 192",
        ingredients: "Grilled portobello, red pepper, goat cheese.",
      },
      {
        id: 18,
        item: "Smoked Pulled Pork Sandwich | 336",
        ingredients: "Slow-smoked pulled pork, BBQ sauce, pickles.",
      },
      {
        id: 19,
        item: "Grilled Vegetable Kabobs | 329",
        ingredients: "Mixed vegetables, balsamic marinade.",
      },
      {
        id: 20,
        item: "Cajun Grilled Shrimp Pasta | 287",
        ingredients: "Cajun-spiced shrimp, linguine, creamy garlic sauce.",
      },
      {
        id: 21,
        item: "BBQ Jackfruit Tacos (Vegetarian) | 225",
        ingredients: "BBQ jackfruit, tortillas, avocado, lime.",
      },
      {
        id: 22,
        item: "Cherry Balsamic Glazed Quail | 325",
        ingredients: "Grilled quail, cherry balsamic glaze, wild rice.",
      },
      {
        id: 23,
        item: "Garlic Butter Lobster Tail | 179",
        ingredients: "Lobster tail, garlic butter, parsley.",
      },
      {
        id: 24,
        item: "Grilled Lamb Chops | 415",
        ingredients: "Marinated lamb chops, rosemary, red wine reduction.",
      },
      {
        id: 25,
        item: "Honey Mustard Glazed Chicken Thighs | 265",
        ingredients: "Chicken thighs, honey mustard glaze.",
      },
      {
        id: 26,
        item: "Grilled Vegetable Lasagna (Vegetarian) | 250",
        ingredients: "Grilled veggies, lasagna noodles, marinara, mozzarella.",
      },
      {
        id: 27,
        item: "Teriyaki Glazed Grilled Tofu (Vegan) | 262",
        ingredients: "Tofu, teriyaki glaze, pineapple.",
      },
      {
        id: 28,
        item: "Kansas City BBQ Burnt Ends | 236",
        ingredients: "Burnt ends, Kansas City BBQ sauce.",
      },
      {
        id: 29,
        item: "Surf and Turf Platter | 345",
        ingredients: "Filet mignon, lobster tail, garlic herb butter.",
      },
    ],
  },
];
export const menuList2 = [
  {
    title: "Desserts",
    items: [
      {
        id: 30,
        item: "Grilled Pineapple with Vanilla Ice Cream | 145",
        ingredients: "Fresh pineapple, vanilla ice cream, caramel drizzle.",
      },
      {
        id: 31,
        item: "S'mores Fondue | 163",
        ingredients: "Chocolate, marshmallows, graham crackers.",
      },
      {
        id: 32,
        item: "Grilled Peach Cobbler | 134",
        ingredients: "Grilled peaches, cinnamon, streusel topping.",
      },
      {
        id: 33,
        item: "Chocolate Espresso Grilled Banana Boat | 169",
        ingredients: "Bananas, chocolate chips, espresso glaze.",
      },
      {
        id: 34,
        item: "Grilled Berry Shortcakes | 155",
        ingredients: "Mixed berries, shortcakes, whipped cream.",
      },
      {
        id: 35,
        item: "Smoked Chocolate Mousse | 154",
        ingredients: "Smoked chocolate, whipped cream.",
      },
      {
        id: 36,
        item: "Grilled Apple Tart | 176",
        ingredients: "Sliced apples, puff pastry, cinnamon.",
      },
      {
        id: 37,
        item: "Caramelized Pineapple Upside-Down Cake | 197",
        ingredients: "Caramelized pineapple, vanilla cake.",
      },
      {
        id: 38,
        item: "Grilled Mango Sorbet | 190",
        ingredients: "Grilled mango, coconut milk, lime.",
      },
      {
        id: 39,
        item: "Bourbon Pecan Pie | 172",
        ingredients: "Pecans, bourbon-infused filling, flaky crust.",
      },
      {
        id: 40,
        item: "Grilled Lemon Pound Cake | 156",
        ingredients: "Grilled lemon slices, pound cake, citrus glaze.",
      },
      {
        id: 41,
        item: "Raspberry Balsamic Grilled Peaches | 192",
        ingredients: "Grilled peaches, raspberry balsamic reduction.",
      },
    ],
  },
  {
    title: "Drinks",
    items: [
      {
        id: 42,
        item: "Smoky Bourbon Maple Smash | 132",
        ingredients: "Bourbon, maple syrup, smoked rosemary.",
      },
      {
        id: 43,
        item: "Grilled Pineapple Mojito | 174",
        ingredients: "Pineapple, mint, rum.",
      },
      {
        id: 44,
        item: "Blackberry Basil Lemonade | 132",
        ingredients: "Blackberries, basil, fresh lemonade.",
      },
      {
        id: 45,
        item: "Cucumber Jalapeño Margarita | 162",
        ingredients: "Cucumber, jalapeño, tequila, lime.",
      },
      {
        id: 46,
        item: "Charred Orange Old Fashioned | 132",
        ingredients: "Charred orange peel, bourbon, bitters.",
      },
      {
        id: 47,
        item: "Grilled Watermelon Sparkler | 174",
        ingredients: "Grilled watermelon, sparkling water, vodka.",
      },
      {
        id: 48,
        item: "Minty Grilled Peach Iced Tea | 162",
        ingredients: "Grilled peaches, mint, black tea.",
      },
      {
        id: 49,
        item: "Blueberry Lavender Gin Fizz | 174",
        ingredients: "Blueberries, lavender, gin, soda.",
      },
      {
        id: 50,
        item: "Spiced Apple Rum Punch | 162",
        ingredients: "Spiced apple cider, dark rum, cinnamon.",
      },
      {
        id: 51,
        item: "Coconut Pineapple Rum Splash | 132",
        ingredients: "Coconut water, pineapple juice, white rum.",
      },
      {
        id: 52,
        item: "Grilled Grapefruit Paloma | 174",
        ingredients: "Grilled grapefruit, tequila, grapefruit soda.",
      },
      {
        id: 53,
        item: "Vanilla Chai Espresso Martini | 132",
        ingredients: "Vanilla chai syrup, espresso, vodka.",
      },
      {
        id: 54,
        item: "Strawberry Basil Smash | 156",
        ingredients: "Strawberries, basil, gin.",
      },
      {
        id: 55,
        item: "Cayenne Mango Margarita | 156",
        ingredients: "Cayenne-infused mango puree, tequila, lime.",
      },
      {
        id: 56,
        item: "Ginger Lemongrass Sparkling Mocktail | 224",
        ingredients: "Ginger, lemongrass, sparkling water.",
      },
      {
        id: 57,
        item: "Pomegranate Rosemary Spritzer | 156",
        ingredients: "Pomegranate juice, rosemary, soda.",
      },
      {
        id: 58,
        item: "Hibiscus Mint Iced Tea | 224",
        ingredients: "Hibiscus tea, fresh mint, agave.",
      },
      {
        id: 59,
        item: "Coconut Lavender Lemon Fizz | 156",
        ingredients: "Coconut milk, lavender syrup, lemon, soda.",
      },
      {
        id: 60,
        item: "Grilled Peach Basil Sangria | 224",
        ingredients: "Grilled peaches, basil, white wine.",
      },
      {
        id: 61,
        item: "Cherry Vanilla Bourbon Smash | 156",
        ingredients: "Cherries, vanilla, bourbon, soda.",
      },
    ],
  },
];
export const menuList3 = [
  {
    title: "Sushi Platters",
    items: [
      {
        id: 62,
        item: "Assorted Nigiri Platter | 417",
        ingredients:
          "Chef's selection of traditional nigiri sushi showcasing fresh fish and seafood atop hand-pressed rice.",
        platter: [
          "Salmon Nigiri",
          "Tuna Nigiri",
          "Yellowtail Nigiri",
          "Shrimp Nigiri",
          "Tamago (Sweet Japanese omelet) Nigiri",
        ],
      },
      {
        id: 63,
        item: "Sashimi Delight Platter | 524",
        ingredients:
          "An exquisite selection of sashimi featuring thinly sliced fresh fish, artistically arranged.",
        platter: [
          "Sliced Tuna",
          "Salmon Sashimi",
          "Whitefish Sashimi",
          "Scallop Sashimi",
          "Octopus Sashimi",
        ],
      },
      {
        id: 64,
        item: "Signature Maki Roll Platter | 545",
        ingredients:
          "Innovative maki rolls with a fusion of flavors and textures,hand-rolled to perfection.",
        platter: [
          "Dragon Roll: Eel, avocado, cucumber, and tobiko.",
          "Spicy Tuna Roll: Tuna, spicy mayo, cucumber, and scallions.",
          "Rainbow Roll: Crab, avocado, and assorted sashimi on top.",
          "Volcano Roll: Baked scallops, spicy mayo, and avocado.",
        ],
      },
      {
        id: 65,
        item: "Vegetarian Sushi Sampler | 618",
        ingredients:
          "A delightful selection of vegetarian sushi options, perfect for those seeking a plant-based experience.",
        platter: [
          "Avocado and Cucumber Roll",
          "Sweet Potato Tempura Roll",
          "Vegetable Dragon Roll",
          "Mango and Asparagus Nigiri",
          "Inari Sushi (Sweet tofu pouch filled with sushi rice)",
        ],
      },
    ],
  },
  {
    title: "Sushi Platter Additions (Optional)",
    items: [
      {
        id: 66,
        item: "Soy Sauce, Pickled Ginger, and Wasabi | 90",
        ingredients:
          "Accompany your sushi platters with traditional soy sauce, pickled ginger, and wasabi for an authentic experience.",
      },
      {
        id: 67,
        item: "Edamame Pods | 78",
        ingredients:
          "Steamed soybean pods lightly salted, a refreshing and nutritious addition to your sushi feast.",
      },
      {
        id: 68,
        item: "Miso Soup | 124",
        ingredients:
          "A classic Japanese miso soup with tofu, seaweed, and green onions to start your meal.",
      },
      {
        id: 69,
        item: "Green Tea Ice Cream | 160",
        ingredients:
          "Conclude your dining experience with a scoop of green tea ice cream, a perfect balance of sweet and earthy flavors.",
      },
    ],
  },
];
