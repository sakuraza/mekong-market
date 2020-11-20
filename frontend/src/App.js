import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="row">
            <div onclick="openMenu()">
                <button>&#9776;</button>
                <a className="brand" href="/">Mekong Market</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>
        </header>
        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onclick="closeMenu()">x</button>
            <ul>
                <li><a href="">Pants</a></li>
                <li><a href="">Shirts</a></li>
            </ul>

        </aside>
        <main className="main">
          <div className="contain">
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/product/:id" component={ProductScreen} />
          </div>
            <div className="row center">
              <div className="card">
                  <a href="product.html">
                      <img className="medium" src="/images/man-short-sleeves-shirt-fil-lumiere.jpg" alt="product s"/>
                  </a>
                  <div className="card-body">
                      <a href="product.html"><h2>Slim Shirt</h2></a>
                      <div className="rating">
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="fa fa-star-half-alt"></i></span>
                      </div>
                      <div className="price">$60</div>
                  </div>
              </div>
              <div className="card">
                            <a href="product.html">
                                <img className="medium" src="/images/man-short-sleeves-shirt-fil-lumiere.jpg" alt="product s"/>
                            </a>
                            <div className="card-body">
                                <a href="product.html"><h2>Slim Shirt</h2></a>
                                <div className="rating">
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                </div>
                                <div className="price">$60</div>
                            </div>
                        </div>
                        <div className="card">
                            <a href="product.html">
                                <img className="medium" src="/images/man-short-sleeves-shirt-fil-lumiere.jpg" alt="product s"/>
                            </a>
                            <div className="card-body">
                                <a href="product.html"><h2>Slim Shirt</h2></a>
                                <div className="rating">
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="far fa-star"></i></span>
                                </div>
                                <div className="price">$60</div>
                            </div>
                        </div>
                        <div className="card">
                            <a href="product.html">
                                <img className="medium" src="/images/man-short-sleeves-shirt-fil-lumiere.jpg" alt="product s"/>
                            </a>
                            <div className="card-body">
                                <a href="product.html"><h2>Slim Shirt</h2></a>
                                <div className="rating">
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                </div>
                                <div className="price">$60</div>
                            </div>
                        </div>
                        <div className="card">
                            <a href="product.html">
                                <img className="medium" src="/images/man-short-sleeves-shirt-fil-lumiere.jpg" alt="product s"/>
                            </a>
                            <div className="card-body">
                                <a href="product.html"><h2>Slim Shirt</h2></a>
                                <div className="rating">
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star-half-alt"></i></span>
                                    <span><i className="far fa-star"></i></span>
                                    <span><i className="far fa-star"></i></span>
                                </div>
                                <div className="price">$60</div>
                            </div>
                        </div>
                        <div className="card">
                            <a href="product.html">
                                <img className="medium" src="/images/man-short-sleeves-shirt-fil-lumiere.jpg" alt="product s"/>
                            </a>
                            <div className="card-body">
                                <a href="product.html"><h2>Slim Shirt</h2></a>
                                <div className="rating">
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                </div>
                                <div className="price">$60</div>
                            </div>
                        </div>
                        <div className="card">
                            <a href="product.html">
                                <img className="medium" src="/images/man-short-sleeves-shirt-fil-lumiere.jpg" alt="product s"/>
                            </a>
                            <div className="card-body">
                                <a href="product.html"><h2>Slim Shirt</h2></a>
                                <div className="rating">
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="far fa-star"></i></span>
                                </div>
                                <div className="price">$60</div>
                            </div>
                        </div>
                        <div className="card">
                            <a href="product.html">
                                <img className="medium" src="/images/man-short-sleeves-shirt-fil-lumiere.jpg" alt="product s"/>
                            </a>
                            <div className="card-body">
                                <a href="product.html"><h2>Slim Shirt</h2></a>
                                <div className="rating">
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                </div>
                                <div className="price">$60</div>
                            </div>
                        </div>
                        <div className="card">
                            <a href="product.html">
                                <img className="medium" src="/images/man-short-sleeves-shirt-fil-lumiere.jpg" alt="product s"/>
                            </a>
                            <div className="card-body">
                                <a href="product.html"><h2>Men\'s patterned short-sleeves Fil Lumière polo-shirt Kylian</h2></a>
                                <div className="rating">
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star"></i></span>
                                    <span><i className="fa fa-star-half-alt"></i></span>
                                    <span><i className="far fa-star"></i></span>
                                    <span><i className="far fa-star"></i></span>
                                </div>
                                <div className="price">$60</div>
                            </div>
                        </div>
            </div>
        </main>
        <footer className="row center">
            All right reserved.
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
