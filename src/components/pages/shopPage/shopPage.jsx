import React from "react";
import CollectionPreview from "./collectionPreview/collectionPreview";
class ShopPage extends React.Component {
  state = {
    sections: [
      {
        id: 1,
        title: "Hats",
        routeName: "hats",
        items: [
          {
            id: 1,
            name: "hat#1",
            imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
            price: 25,
            quantity: 0,
          },
          {
            id: 2,
            name: "hat#2",
            imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
            price: 18,
            quantity: 0,
          },
          {
            id: 3,
            name: "hat#3",
            imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
            price: 35,
            quantity: 0,
          },
          {
            id: 4,
            name: "hat#4",
            imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
            price: 25,
          },
          {
            id: 5,
            name: "hat#5",
            imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
            price: 18,
          },
          {
            id: 6,
            name: "hat#6",
            imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
            price: 14,
          },
          {
            id: 7,
            name: "hat#7",
            imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
            price: 18,
          },
        ],
      },
      {
        id: 2,
        title: "Sneakers",
        routeName: "sneakers",
        items: [
          {
            id: 10,
            name: "Sneakers#1",
            imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
            price: 220,
          },
          {
            id: 11,
            name: "Sneakers#2",
            imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
            price: 280,
          },
          {
            id: 12,
            name: "Sneakers#3",
            imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
            price: 110,
          },
          {
            id: 13,
            name: "Sneakers#4",
            imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
            price: 160,
          },
          {
            id: 14,
            name: "Sneakers#5",
            imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
            price: 160,
          },
          {
            id: 15,
            name: "Sneakers#6",
            imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
            price: 160,
          },
          {
            id: 16,
            name: "Sneakers#7",
            imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
            price: 190,
          },
        ],
      },
      {
        id: 3,
        title: "Jackets",
        routeName: "jackets",
        items: [
          {
            id: 18,
            name: "Jacket#1",
            imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
            price: 125,
          },
          {
            id: 19,
            name: "Jacket#2",
            imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
            price: 90,
          },
          {
            id: 20,
            name: "Jacket#3",
            imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
            price: 90,
          },
          {
            id: 21,
            name: "Jacket#4",
            imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
            price: 165,
          },
          {
            id: 22,
            name: "Jacket#5",
            imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
            price: 185,
          },
        ],
      },
      {
        id: 4,
        title: "Womens",
        routeName: "womens",
        items: [
          {
            id: 23,
            name: "Top",
            imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
            price: 25,
          },
          {
            id: 24,
            name: "Blouse",
            imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
            price: 20,
          },
          {
            id: 25,
            name: "Dress",
            imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
            price: 80,
          },

          {
            id: 27,
            name: "Sweater",
            imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
            price: 45,
          },
          {
            id: 28,
            name: " Suit",
            imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
            price: 135,
          },
        ],
      },
      {
        id: 5,
        title: "Mens",
        routeName: "mens",
        items: [
          {
            id: 31,
            name: "T-shirt",
            imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
            price: 20,
          },
          {
            id: 32,
            name: "Longsleeve",
            imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
            price: 25,
          },
          {
            id: 33,
            name: "T-shirt#2",
            imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
            price: 25,
          },
          {
            id: 34,
            name: "Jeans Shirt",
            imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
            price: 40,
          },
          {
            id: 35,
            name: "Shirt",
            imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
            price: 25,
          },
        ],
      },
    ],
  };
  render() {
    return (
      <div className="shoppage">
        {this.state.sections.map((section) => {
          return (
            <CollectionPreview
              key={section.id}
              items={section.items}
              title={section.title}
            />
          );
        })}
      </div>
    );
  }
}
export default ShopPage;
