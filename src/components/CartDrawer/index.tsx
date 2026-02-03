import "./styles.css";
import { useCart } from "../../contexts/CartContext";

type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, increase, decrease, remove, total } = useCart();

  return (
    <>
      {/* overlay */}
     <div
     className={`drawer-overlay ${open ? "open" : ""}`}
     onClick={onClose}
  />

      {/* drawer */}
      <aside className={`drawer ${open ? "open" : ""}`}>
        <div className="drawer-header">
          <h2>Carrinho</h2>
          <button className="drawer-close" onClick={onClose}>
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <p className="drawer-empty">Seu carrinho está vazio.</p>
        ) : (
          <>
            <div className="drawer-items">
              {items.map((item) => (
                <div key={item.product.id} className="drawer-item">
                  <img
                    className="drawer-item-image"
                    src={item.product.image}
                    alt={item.product.name}
                  />

                  <div className="drawer-item-info">
                    <strong className="drawer-item-name">{item.product.name}</strong>
                    <span className="drawer-item-price">
                      R$ {item.product.price.toFixed(2)}
                    </span>

                    <div className="drawer-qty">
                      <button onClick={() => decrease(item.product.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increase(item.product.id)}>+</button>
                    </div>

                    <button
                      className="drawer-remove"
                      onClick={() => remove(item.product.id)}
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="drawer-footer">
              <div className="drawer-total">
                <span>Total</span>
                <strong>R$ {total.toFixed(2)}</strong>
              </div>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
