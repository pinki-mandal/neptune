import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "NIKON",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
    image: "https://3.imimg.com/data3/QJ/SV/MY-8424433/nikon-d300-digital-camera-500x500.jpg"
    
  },
  {
    _id: uuid(),
    categoryName: "CANON",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
    image: "https://static.500px.com/equipments/camera-6.jpg"
    
  },
  {
    _id: uuid(),
    categoryName: "SONY",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    image: "https://c4.wallpaperflare.com/wallpaper/131/520/34/background-camera-sony-a7-wallpaper-preview.jpg"
  },
  {
  _id: uuid(),
  categoryName: "PANASONIC",
  description:
    "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  image: "https://shop.panasonic.com/sites/default/files/styles/product_item_thumb_x2_560x372/public/salsify/product/image/3039252c142af3446d97329c769bf0b031d2e24b.jpg?itok=xjl7FqUX"
},
{
  _id: uuid(),
  categoryName: "SAMSUNG",
  description:
    "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  image: "https://i.pcmag.com/imagery/reviews/06myHqX9ZidCLVl0BwPXiTS-18.fit_scale.size_760x427.v1569471315.jpg"
},
];
