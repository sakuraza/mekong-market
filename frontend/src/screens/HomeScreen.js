import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen(props) {
  return (
  <div className="row center">
  {
    data.products.map((product) =>
      (
        <div key={product._id} className="card">
          <a href="product.html">
              <Link to={'/product/' + product._id}>
                <img className="medium" src={product.image} alt="product"/>
              </Link>
          </a>
          <div className="card-body">
          <Link to={'/product/' + product._id}><h2>{product.name}</h2></Link>
              <div className="rating">
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star-half-alt"></i></span>
                  <span><i class="far fa-star"></i></span>
                  <span><i class="far fa-star"></i></span>
              </div>
              <div className="price">${product.price}</div>
          </div>
        </div>
      )
    )
  }
</div>
  );
}
export default HomeScreen;
