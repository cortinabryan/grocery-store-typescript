import React from "react";
import Logo from "../images/logo-transparent.png";

const Navbar = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 5;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        {/* <a className="btn btn-ghost normal-case text-xl">Whatever Shop</a> */}
        <a className="logo btn btn-ghost normal-case text-xl">
          <img src={Logo} alt="" />
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">0</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <h2 className="font-bold text-xl">Cart Items</h2>
              <div>{cartItems.length === 0 && <div> Cart is empty </div>}</div>
              {cartItems.map((item) => (
                <div key={item.id} className="row">
                  <div className="text-lg col-2 italic">{item.name}</div>
                  <div className="col-2">
                    <button
                      onClick={() => onAdd(item)}
                      className="text-lg btn btn-sm bg-emerald-700 mt-2 mr-1 add"
                    >
                      +
                    </button>
                    <button
                      onClick={() => onRemove(item)}
                      className="text-lg btn btn-sm bg-red-700 mt-2 ml-1 remove"
                    >
                      -
                    </button>
                  </div>
                  <div className="col-2 text-right text-lg">
                    {item.qty} x ${item.price.toFixed(2)}
                  </div>
                </div>
              ))}
              {cartItems.length !== 0 && (
                <>
                  <hr></hr>
                  <span className="font-bold text-lg">0 Items</span>
                  <div className="row">
                    <div className="col-2">Items Price</div>
                    <div className="col-1 text-right">
                      ${itemsPrice.toFixed(2)}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">Tax Price</div>
                    <div className="col-1 text-right">
                      ${taxPrice.toFixed(2)}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">Shipping Price</div>
                    <div className="col-1 text-right">
                      ${shippingPrice.toFixed(2)}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <strong>Total Price</strong>
                    </div>
                    <div className="col-1 text-right">
                      <strong>${totalPrice.toFixed(2)}</strong>
                    </div>
                  </div>
                </>
              )}
              {/* <span className="font-bold text-lg">0 Items</span>
              <span className="text-info">Subtotal: $0</span> */}
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// <div className="Nav-Container bg-sky-600 border-8 border-emerald-700">
//   Navbar
// </div>
