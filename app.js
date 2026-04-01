const e = React.createElement;
function App(){
  const [page,setPage]=React.useState("home");
  const [cart,setCart]=React.useState([]);
  const [search,setSearch]=React.useState("");
  const [selectedProduct,setSelectedProduct]=React.useState(null);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  const addToCart = p => setCart([...cart,p]);
  const removeFromCart = i => {
    let c=[...cart]; c.splice(i,1); setCart(c);
  };
  return e("div",null,
    e(Navbar,{setPage,cart,search,setSearch}),
    page==="home" &&
      e("div",null,
        e("div",{className:"grid"},
          filtered.map(p =>
            e(ProductCard,{p,addToCart,setPage,setSelectedProduct})
          )
        )
      ),
    page==="detail" &&
      e(ProductDetail,{product:selectedProduct,addToCart,setPage}),
    page==="cart" &&
      e(Cart,{cart,removeFromCart,setPage}),
    page==="checkout" &&
      e(Checkout)
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(e(App));