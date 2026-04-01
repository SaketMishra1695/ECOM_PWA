function ProductDetail({product, addToCart, setPage}) {
  return React.createElement("div",null,
    React.createElement("h2",null,product.name),
    React.createElement("img",{src:product.img, style:{width:"300px"}}),
    React.createElement("p",null,"₹"+product.price),
    React.createElement("button",{className:"btn", onClick:()=>addToCart(product)},"Add to Cart"),
    React.createElement("button",{className:"btn", onClick:()=>setPage("home")},"Back")
  );
}