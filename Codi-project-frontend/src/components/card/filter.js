import React from 'react'
import { Link } from "react-router-dom";

export default function Filter() {
    return (
    
        <div className="filter_container">
              <div className="filter_catergory">
                  <h2 className="filter_title">
                      Categories
                  </h2>
                  <ul className="category_name">
                      <li><Link to="/category/shoes" className='link'> Shoes</Link></li>
                      <li><Link to="/category/pants" className='link'>Pants</Link></li>
                      <li><Link to="/category/shirts" className="link">T-shirts</Link></li>
                      <li><Link to="/category/jackets" className="link">Jackets</Link></li>
                      <li><Link to="/category/accessories" className="link">Accessories</Link></li>
                      <li><Link to="/category/shorts" className="link">Shorts</Link></li>
                  </ul>
              </div>
              <div className="filter_catergory">
                  <h2 className="filter_title">
                      Brands
                  </h2>
                  <ul className="category_name">
                      <li><Link className='link'>Lacoste</Link></li>
                      <li><Link className='link'>H&M</Link></li>
                      <li><Link className="link">Jack&Jones</Link></li>
                      <li><Link className="link">Adidas</Link></li>
                  </ul>
              </div>
             </div> 
    )
}
