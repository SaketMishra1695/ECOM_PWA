function Navbar({setPage, cart, wishlist, search, setSearch}) {
  return React.createElement("div",{className:"navbar"},
    React.createElement("div",{className:"logo", onClick:()=>setPage("home")},"Royal Pens"),
    React.createElement("div",{className:"search-box"},
      React.createElement("input",{
        placeholder:"Search luxury pens...",
        value:search,
        onChange:(e)=>setSearch(e.target.value)
      }),
      React.createElement("span",{className:"material-icons"},"search")
    ),
    React.createElement("div",{className:"nav-actions"},
      React.createElement("button",{onClick:()=>alert("Login soon")},"Login"),
      React.createElement("span",{className:"material-icons"},"favorite"),
      React.createElement("span",{className:"material-icons", onClick:()=>setPage("cart")},"shopping_cart"),
      React.createElement("span",null,"("+cart.length+")")
    )
  );
}
