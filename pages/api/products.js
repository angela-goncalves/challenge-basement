export default function handler(req, res) {
  res.status(200).json([
    {
      id: 0,
      title: "Black t-shirt",
      price: 7.95,
      image: "/../public/products/shirt.png",
    },
    {
      id: 1,
      title: "Black hoodie",
      price: 13,
      image: "/../public/products/hoodie.png",
    },
    {
      id: 2,
      title: "Black cap",
      price: 23,
      image: "/../public/products/cap.png",
    },
  ]);
}
