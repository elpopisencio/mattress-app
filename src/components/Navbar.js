import { assets } from "../assets";

export const Navbar = ({ cartItems }) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div
          className="navbar-brand"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img src={assets.logo} width="180" height="50" alt="saatva" />
          <button className="button is-large" style={{ borderWidth: 0 }}>
            <span className="icon is-large">
              <i className="fas fa-shopping-cart"></i>
            </span>
            <span
              style={{
                position: "absolute",
                backgroundColor: "#c19579",
                fontSize: ".7rem",
                width: "1.2rem",
                height: "1.2rem",
                borderRadius: ".5rem",
                top: ".5rem",
                rigth: "1rem",
                color: "white",
                padding: ".1rem",
              }}
            >
              {cartItems.length}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
