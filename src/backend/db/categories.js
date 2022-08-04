import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    category: "NIKON",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
    image: "https://m.media-amazon.com/images/I/81WtQ64-SOL._SX355_.jpg"
    
  },
  {
    _id: uuid(),
    category: "CANON",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
    image: "https://static.500px.com/equipments/camera-6.jpg"
    
  },
  {
    _id: uuid(),
    category: "SONY",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    image: "https://5.imimg.com/data5/XC/PF/MY-11567295/sony-a7-dslr-camera-500x500.jpg"
  },
  {
  _id: uuid(),
  category: "PANASONIC",
  description:
    "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  image: "https://i5.walmartimages.com/asr/98e09420-3f99-4f99-9781-232e5972be74_1.e412824c4791a4cc60d1d9e283937923.jpeg"
},
{
  _id: uuid(),
  category: "SAMSUNG",
  description:
    "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  image: "https://www.bhphotovideo.com/images/images2500x2500/samsung_galaxy_nx_mirrorless_digital_985342.jpg"
},
];
