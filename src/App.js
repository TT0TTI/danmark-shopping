import React from "react";
import "./App.css";

const App = () => {
  return (
    <>
      <header id="header">
        <h1>
          <a href="#" className="logo">
            <img src="https://via.placeholder.com/186x18" />
          </a>
        </h1>

        <nav className="buttons">
          <ul>
            <li>
              <a href="#" className="menu-button">
                <img src="https://via.placeholder.com/22x20" />
              </a>
            </li>

            <li>
              <a href="#" className="menu-button">
                <img src="https://via.placeholder.com/22x20" />
              </a>
            </li>

            <li>
              <a href="#" className="menu-button">
                <img src="https://via.placeholder.com/22x20" />
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main role="main" className="main-content">
        <ul className="product-group">
          <li>
            <a href="#" className="product-group-list">
              <article>
                <h2 className="line-text"></h2>
                <img src="https://via.placeholder.com/1000x563" />
              </article>
            </a>
          </li>

          <li>
            <a href="#" className="product-group-list">
              <article>
                <h2 className="line-text"></h2>
                <img src="https://via.placeholder.com/1000x563" />
              </article>
            </a>
          </li>

          <li>
            <a href="#" className="product-group-list">
              <article>
                <h2 className="line-text"></h2>
                <img src="https://via.placeholder.com/1000x563" />
              </article>
            </a>
          </li>

          <li>
            <a href="#" className="product-group-list">
              <article>
                <h2 className="line-text"></h2>
                <img src="https://via.placeholder.com/1000x563" />
              </article>
            </a>
          </li>
        </ul>
      </main>

      <footer id="footer">

        <nav className="left-nav">
          <ul>
            <li><a href="#">Terms and conditions</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </nav>

        <nav className="right-methods">
          <h3>Payment Methods</h3>
          <ul>
            <li><span className="payment-icon one">h</span></li>
            <li><span className="payment-icon two">e</span></li>
            <li><span className="payment-icon three">l</span></li>
            <li><span className="payment-icon four">l</span></li>
            <li><span className="payment-icon five">o</span></li>
          </ul>
        </nav>

        <a href="#" className="to-top-button"></a>

      </footer>
    </>
  );
}

export default App;
