var item1 = {
    id: 0,
    name: "test",
    image: "assets/images/products/p5.jpg",
    des1: "ABC",
    des2: "abcd",
    price1: "$100",
    price2: "$200",
    review: "(14 reviews)",
    image2:["assets/images/products/p5.jpg","assets/images/products/p5.jpg","assets/images/products/p5.jpg","assets/images/products/p5.jpg"]
}

var json = JSON.stringify(item1)

localStorage.setItem(item1.id, json);