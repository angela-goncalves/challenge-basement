export default function handler(req, res) {
  res.status(200).json([
    {
      id: 0,
      title: "Black t-shirt",
      price: 7.95,
      description: "Unisex Basic Softstyle T-Shirt",
      image: "/../public/products/shirt.png",
    },
    {
      id: 1,
      title: "Black hoodie",
      price: 13,
      description: "Unisex Basic Softstyle Black hoodie",
      image: "/../public/products/hoodie.png",
    },
    {
      id: 2,
      title: "Black cap",
      price: 23,
      description: "Unisex Basic Softstyle Black Cap",
      image: "/../public/products/cap.png",
    },
  ]);
}
