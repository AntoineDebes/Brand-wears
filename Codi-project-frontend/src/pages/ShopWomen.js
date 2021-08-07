import React from 'react'
import ShopHeader from '../components/card/shopheader'
import Filter from '../components/card/filter'
import WomenCard from '../components/card/WomenCard'



export default function ShopWomen(props) {
    return (
        <div className="shopmen_section">
        <ShopHeader title="Women" />
         <div className="shop_men--container">
           <Filter />
           <div className="products_container">
             <WomenCard />
           </div>
         </div>
       </div>
    )
}
