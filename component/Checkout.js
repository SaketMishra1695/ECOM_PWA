function Checkout() {
  return React.createElement("div",null,
    React.createElement("h2",null,"Checkout"),
    React.createElement("input",{placeholder:"Name"}),
    React.createElement("input",{placeholder:"Address"}),
    React.createElement("button",{onClick:()=>alert("Order placed")},"Place Order")
  );
}