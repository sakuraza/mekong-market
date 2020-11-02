
import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function ProductScreen(props) {
  const product = data.products.find(x=>x._id === props.match.params.id);
  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt="product"></img>
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              <a href="#reviews">{product.rating} stars ({product.numReviews + ' reviews'} reviews)
              </a>
            </li>
            <li>
              Price: <b>${product.price}</b>
            </li>
            <li>
              Description:
              <div>{product.description}</div>
            </li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>Price: {product.price}</li>
            <li>
              Status:
              
            </li>
            <li>
              Qty:
              <select>              
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
              </select>
            </li>
            <li>
                <button className="button primary">
                  Add to Cart
                </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ProductScreen;
