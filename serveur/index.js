const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const countries = [
  {
    name: "France",
    cities: [
      {
        id: 1,
        name: "Paris",
        image: "https://example.com/paris.jpg",
        activity: "Visit the Eiffel Tower",
        description:
          "Paris is known as the City of Love, and it is a wonderful place to visit. One of the most popular things to do in Paris is to visit the Eiffel Tower.",
        link: "https://example.com/paris",
      },
      {
        id: 2,
        name: "Marseille",
        image: "https://example.com/marseille.jpg",
        activity: "Explore the Old Port",
        description:
          "Marseille is a beautiful city in the south of France. One of the best things to do in Marseille is to explore the Old Port, which is full of restaurants, bars and shops.",
        link: "https://example.com/marseille",
      },
      {
        id: 3,
        name: "Lyon",
        image: "https://example.com/lyon.jpg",
        activity: "Visit the Basilica of Notre-Dame de Fourvière",
        description:
          "Lyon is a historic city in the east of France. One of the top attractions in Lyon is the Basilica of Notre-Dame de Fourvière, which offers stunning views of the city.",
        link: "https://example.com/lyon",
      },
      {
        id: 4,
        name: "Nice",
        image: "https://example.com/nice.jpg",
        activity: "Relax on the Promenade des Anglais",
        description:
          "Nice is a popular destination on the French Riviera. One of the best things to do in Nice is to relax on the Promenade des Anglais, which is a beautiful waterfront promenade.",
        link: "https://example.com/nice",
      },
      {
        id: 5,
        name: "Bordeaux",
        image: "https://example.com/bordeaux.jpg",
        activity: "Visit the Musée d'Aquitaine",
        description:
          "Bordeaux is a city in southwestern France known for its wine. One of the top attractions in Bordeaux is the Musée d'Aquitaine, which showcases the history and culture of the region.",
        link: "https://example.com/bordeaux",
      },
    ],
  },
  {
    name: "Japan",
    cities: [
      {
        id: 1,
        name: "Tokyo",
        image: "https://example.com/tokyo.jpg",
        activity: "Visit the Tokyo Skytree",
        description:
          "Tokyo is the capital city of Japan and a popular tourist destination. One of the most popular things to do in Tokyo is to visit the Tokyo Skytree, which is the tallest tower in the world.",
        link: "https://example.com/tokyo",
      },
      {
        id: 2,
        name: "Kyoto",
        image: "https://example.com/kyoto.jpg",
        activity: "Visit the Fushimi Inari Shrine",
        description:
          "Kyoto is a historic city in Japan with many temples and shrines. One of the top attractions in Kyoto is the Fushimi Inari Shrine, which features thousands of torii gates.",
        link: "https://example.com/kyoto",
      },
      {
        id: 3,
        name: "Osaka",
        image: "https://example.com/osaka.jpg",
        activity: "Visit Universal Studios Japan",
        description:
          "Osaka is a city in western Japan known for its food and nightlife. One of the top attractions in Osaka is Universal Studios Japan, which features rides and attractions based on popular movies and TV shows.",
        link: "https://example.com/osaka",
      },
      {
        id: 4,
        name: "Hiroshima",
        image: "https://example.com/hiroshima.jpg",
        activity: "Visit the Hiroshima Peace Memorial Park",
        description:
          "Hiroshima is a city in western Japan that was destroyed by an atomic bomb in 1945. One of the top attractions in Hiroshima is the Peace Memorial Park, which commemorates the victims of the bombing.",
        link: "https://example.com/hiroshima",
      },
      {
        id: 5,
        name: "Sapporo",
        image: "https://example.com/sapporo.jpg",
        activity: "Visit the Sapporo Snow Festival",
        description:
          "Sapporo is a city in northern Japan known for its snow and ice festivals. One of the top attractions in Sapporo is the Snow Festival, which features giant snow sculptures and ice slides.",
        link: "https://example.com/sapporo",
      },
    ],
  },
  {
    name: "Spain",
    cities: [
      {
        id: 1,
        name: "Madrid",
        image: "https://example.com/madrid.jpg",
        activity: "Visit the Royal Palace of Madrid",
        description:
          "Madrid is the capital city of Spain and home to many historic landmarks. One of the top attractions in Madrid is the Royal Palace, which is the official residence of the Spanish royal family.",
        link: "https://example.com/madrid",
      },
      {
        id: 2,
        name: "Barcelona",
        image: "https://example.com/barcelona.jpg",
        activity: "Visit the Park Guell",
        description:
          "Barcelona is a vibrant city in northeastern Spain with a rich artistic and cultural heritage. One of the top attractions in Barcelona is the Park Guell, which is a beautiful park with Gaudi-designed architecture and panoramic views of the city.",
        link: "https://example.com/barcelona",
      },
      {
        id: 3,
        name: "Seville",
        image: "https://example.com/seville.jpg",
        activity: "Visit the Alcazar of Seville",
        description:
          "Seville is a historic city in southern Spain with many beautiful landmarks. One of the top attractions in Seville is the Alcazar, which is a palace complex that showcases Mudéjar architecture and beautiful gardens.",
        link: "https://example.com/seville",
      },
      {
        id: 4,
        name: "Valencia",
        image: "https://example.com/valencia.jpg",
        activity: "Visit the City of Arts and Sciences",
        description:
          "Valencia is a port city on the southeastern coast of Spain with a rich history and culture. One of the top attractions in Valencia is the City of Arts and Sciences, which is a modern architectural complex that houses a science museum, aquarium, and performing arts center.",
        link: "https://example.com/valencia",
      },
      {
        id: 5,
        name: "Granada",
        image: "https://example.com/granada.jpg",
        activity: "Visit the Alhambra",
        description:
          "Granada is a city in southern Spain known for its Moorish heritage and architecture. One of the top attractions in Granada is the Alhambra, which is a palace and fortress complex that features stunning Islamic art and architecture.",
        link: "https://example.com/granada",
      },
    ],
  },
  {
    name: "Turkey",
    cities: [
      {
        id: 1,
        name: "Istanbul",
        image: "https://example.com/istanbul.jpg",
        activity: "Visit the Hagia Sophia",
        description:
          "Istanbul is the largest city in Turkey and a cultural and economic center. One of the top attractions in Istanbul is the Hagia Sophia, a historic church-turned-mosque with impressive Byzantine architecture.",
        link: "https://example.com/istanbul",
      },
      {
        id: 2,
        name: "Cappadocia",
        image: "https://example.com/cappadocia.jpg",
        activity: "Take a hot air balloon ride",
        description:
          "Cappadocia is a region in central Turkey known for its unique landscape of rock formations and cave dwellings. One of the top things to do in Cappadocia is to take a hot air balloon ride over the stunning scenery.",
        link: "https://example.com/cappadocia",
      },
      {
        id: 3,
        name: "Antalya",
        image: "https://example.com/antalya.jpg",
        activity: "Visit the Old Town",
        description:
          "Antalya is a city on the Mediterranean coast of Turkey known for its beaches and historic sites. One of the top things to do in Antalya is to visit the Old Town, which features narrow streets, traditional architecture, and a picturesque harbor.",
        link: "https://example.com/antalya",
      },
      {
        id: 4,
        name: "Ephesus",
        image: "https://example.com/ephesus.jpg",
        activity: "Explore the ancient city ruins",
        description:
          "Ephesus is an ancient city in western Turkey that was once a major port and commercial center. Today, visitors can explore the well-preserved ruins of the city, including the Library of Celsus and the Great Theatre.",
        link: "https://example.com/ephesus",
      },
      {
        id: 5,
        name: "Pamukkale",
        image: "https://example.com/pamukkale.jpg",
        activity: "Visit the hot springs and travertine terraces",
        description:
          "Pamukkale is a town in western Turkey known for its hot springs and travertine terraces. Visitors can take a dip in the warm waters and admire the stunning natural formations.",
        link: "https://example.com/pamukkale",
      },
    ],
  },
  {
    name: "Dubai",
    cities: [
      {
        id: 1,
        name: "Burj Khalifa",
        image: "https://example.com/burj-khalifa.jpg",
        activity: "Visit the Burj Khalifa",
        description:
          "Burj Khalifa is the tallest tower in the world, located in the heart of Dubai. The tower offers stunning views of the city and visitors can enjoy a variety of experiences such as the At The Top observation deck and the sky lounge.",
        link: "https://example.com/burj-khalifa",
      },
      {
        id: 2,
        name: "Dubai Mall",
        image: "https://example.com/dubai-mall.jpg",
        activity: "Shop at the Dubai Mall",
        description:
          "Dubai Mall is one of the largest shopping centers in the world, located next to the Burj Khalifa. Visitors can find a variety of luxury brands and shops, as well as entertainment options such as an aquarium, ice rink, and cinema.",
        link: "https://example.com/dubai-mall",
      },
      {
        id: 3,
        name: "Palm Jumeirah",
        image: "https://example.com/palm-jumeirah.jpg",
        activity: "Visit the Palm Jumeirah",
        description:
          "Palm Jumeirah is an artificial island in Dubai, shaped like a palm tree. It is home to luxury hotels, restaurants, and residences, and visitors can enjoy activities such as water sports and beach clubs.",
        link: "https://example.com/palm-jumeirah",
      },
      {
        id: 4,
        name: "Dubai Miracle Garden",
        image: "https://example.com/dubai-miracle-garden.jpg",
        activity: "Visit the Dubai Miracle Garden",
        description:
          "Dubai Miracle Garden is a stunning botanical garden with over 45 million flowers. It is home to a variety of flower sculptures and installations, making it a popular spot for photography and sightseeing.",
        link: "https://example.com/dubai-miracle-garden",
      },
      {
        id: 5,
        name: "Dubai Creek",
        image: "https://example.com/dubai-creek.jpg",
        activity: "Take an Abra ride on Dubai Creek",
        description:
          "Dubai Creek is a saltwater creek that runs through the heart of Dubai. Visitors can take an Abra, a traditional boat, for a ride along the creek and enjoy views of the city's skyline and historic buildings.",
        link: "https://example.com/dubai-creek",
      },
    ],
  },
  {
    name: "Italy",
    cities: [
      {
        id: 1,
        name: "Rome",
        image: "https://example.com/rome.jpg",
        activity: "Visit the Colosseum",
        description:
          "Rome is the capital city of Italy and a popular tourist destination. One of the most popular things to do in Rome is to visit the Colosseum, which is an ancient amphitheater and one of the most iconic landmarks in the city.",
        link: "https://example.com/rome",
      },
      {
        id: 2,
        name: "Florence",
        image: "https://example.com/florence.jpg",
        activity: "Visit the Uffizi Gallery",
        description:
          "Florence is a city in central Italy known for its art and architecture. One of the top attractions in Florence is the Uffizi Gallery, which features a collection of Renaissance masterpieces.",
        link: "https://example.com/florence",
      },
      {
        id: 3,
        name: "Venice",
        image: "https://example.com/venice.jpg",
        activity: "Take a gondola ride",
        description:
          "Venice is a city in northeastern Italy known for its canals and bridges. One of the top things to do in Venice is to take a gondola ride, which offers a unique perspective of the city.",
        link: "https://example.com/venice",
      },
      {
        id: 4,
        name: "Milan",
        image: "https://example.com/milan.jpg",
        activity: "Visit the Duomo di Milano",
        description:
          "Milan is a city in northern Italy known for its fashion and design. One of the top attractions in Milan is the Duomo di Milano, which is a massive cathedral with a beautiful façade and intricate interiors.",
        link: "https://example.com/milan",
      },
      {
        id: 5,
        name: "Naples",
        image: "https://example.com/naples.jpg",
        activity: "Visit Pompeii",
        description:
          "Naples is a city in southern Italy known for its rich history and cuisine. One of the top attractions near Naples is Pompeii, an ancient Roman city that was destroyed by the eruption of Mount Vesuvius in AD 79.",
        link: "https://example.com/naples",
      },
    ],
  },
  {
    name: "Mexico",
    cities: [
      {
        id: 1,
        name: "Mexico City",
        image: "https://example.com/mexico-city.jpg",
        activity: "Visit the National Museum of Anthropology",
        description:
          "Mexico City is the capital of Mexico and a cultural hub of the country. One of the top attractions in Mexico City is the National Museum of Anthropology, which showcases the history and culture of Mexico's indigenous peoples.",
        link: "https://example.com/mexico-city",
      },
      {
        id: 2,
        name: "Cancun",
        image: "https://example.com/cancun.jpg",
        activity: "Relax on the beach",
        description:
          "Cancun is a popular beach destination in Mexico, known for its crystal-clear waters and white sand beaches. Visitors can relax on the beach or participate in water activities such as snorkeling and scuba diving.",
        link: "https://example.com/cancun",
      },
      {
        id: 3,
        name: "Guadalajara",
        image: "https://example.com/guadalajara.jpg",
        activity: "Visit the Hospicio Cabañas",
        description:
          "Guadalajara is a city in western Mexico known for its rich history and architecture. One of the top attractions in Guadalajara is the Hospicio Cabañas, a UNESCO World Heritage site that features beautiful murals and a unique blend of Gothic and Neoclassical architecture.",
        link: "https://example.com/guadalajara",
      },
      {
        id: 4,
        name: "Playa del Carmen",
        image: "https://example.com/playa-del-carmen.jpg",
        activity: "Visit the Xcaret Park",
        description:
          "Playa del Carmen is a coastal resort town in Mexico known for its nightlife and outdoor activities. One of the top attractions in Playa del Carmen is the Xcaret Park, which features cultural performances, natural attractions, and water activities.",
        link: "https://example.com/playa-del-carmen",
      },
      {
        id: 5,
        name: "Oaxaca",
        image: "https://example.com/oaxaca.jpg",
        activity: "Visit the Monte Albán ruins",
        description:
          "Oaxaca is a city in southern Mexico known for its indigenous culture and cuisine. One of the top attractions in Oaxaca is the Monte Albán ruins, a UNESCO World Heritage site that was once the capital of the Zapotec civilization.",
        link: "https://example.com/oaxaca",
      },
    ],
  },
  {
    name: "South Korea",
    cities: [
      {
        id: 1,
        name: "Séoul",
        image: "https://example.com/seoul.jpg",
        activity: "Visiter le palais de Gyeongbokgung",
        description:
          "Séoul est la capitale de la Corée du Sud et une ville dynamique avec une culture riche. L'un des sites les plus populaires à Séoul est le palais de Gyeongbokgung, un palais royal datant de la dynastie Joseon.",
        link: "https://example.com/seoul",
      },
      {
        id: 2,
        name: "Busan",
        image: "https://example.com/busan.jpg",
        activity: "Visiter la plage de Haeundae",
        description:
          "Busan est la deuxième plus grande ville de Corée du Sud et une destination populaire pour les vacances à la plage. La plage de Haeundae est l'une des plus célèbres de Busan, avec une belle vue sur l'océan et une vie nocturne animée.",
        link: "https://example.com/busan",
      },
      {
        id: 3,
        name: "Jeju",
        image: "https://example.com/jeju.jpg",
        activity: "Explorer le cratère du volcan Hallasan",
        description:
          "Jeju est une île située au sud de la Corée du Sud et une destination populaire pour les vacances. Le cratère du volcan Hallasan est l'une des attractions les plus populaires de l'île, avec des sentiers de randonnée pour explorer les paysages naturels.",
        link: "https://example.com/jeju",
      },
      {
        id: 4,
        name: "Gyeongju",
        image: "https://example.com/gyeongju.jpg",
        activity: "Visiter les tombes royales de la dynastie Silla",
        description:
          "Gyeongju est une ville historique en Corée du Sud qui était la capitale de la dynastie Silla. Les tombes royales de la dynastie Silla sont une attraction populaire à Gyeongju, avec des tombes de rois et de reines ornées de sculptures en pierre.",
        link: "https://example.com/gyeongju",
      },
      {
        id: 5,
        name: "Daegu",
        image: "https://example.com/daegu.jpg",
        activity: "Explorer le marché de Seomun",
        description:
          "Daegu est la quatrième plus grande ville de Corée du Sud et une ville dynamique avec une scène culinaire animée. Le marché de Seomun est l'une des attractions les plus populaires de Daegu, avec des vendeurs vendant des produits frais, de la nourriture et des souvenirs.",
        link: "https://example.com/daegu",
      },
    ],
  },
];

app.get("/cities", (req, res) => {
  res.json(countries.cities);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
