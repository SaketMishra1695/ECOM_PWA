function ProductCard({p, addToCart, setPage, setSelectedProduct}) {
  return React.createElement("div",{className:"card"},
    React.createElement("img",{
      src:p.img,
      onClick:()=>{
        setSelectedProduct(p);
        setPage("detail");
      }
    }),
    React.reateElement("h3",null,p.name),
    React.createElement("p",null,"₹"+p.price),
    React.createElement("button",{className:"btn", onClick:()=>addToCart(p)},"Add to Cart")
  );
}
