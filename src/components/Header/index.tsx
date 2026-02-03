import { useState } from "react";
import { Link } from "react-router-dom";
import { CartDrawer } from "../CartDrawer";
import { useCart } from "../../contexts/CartContext";
import "./styles.css";

export function Header() {
  const [open, setOpen] = useState(false);
  const { items } = useCart();

  const itemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          Mini E-commerce
        </Link>

        <button className="cart" onClick={() => setOpen(true)} aria-label="Abrir carrinho">
          🛒
          <span className="cart-badge">{itemsCount}</span>
        </button>
      </header>

      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
