import './App.css';
import minus from './assets/minus.png'
import check from './assets/check.png'
import calculateSoldTvs from "./helpers/calculateSoldTvs.js";
import calculatePurchasedTvs from "./helpers/calculatePurchasedTvs.js";
import calculateTvsInStock from "./helpers/calculateTvsInStock.js";
import generateStringTvInfo from "./helpers/generateStringTvInfo.js";
import generatePrice from "./helpers/generatePrice.js";
import generateScreenSizeString from "./helpers/generateScreenSize.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import {productTypes} from "./constants/Deel2-Opdr1-Arrays.js";
function App() {

  return (
      <>
          <main className="outer-container">
            <h1>Tech it easy dashboard</h1>
            <section>
              <h2>Verkoopoverzicht</h2>
              <div className="inner-container">
                  <article className="dashboard-item dashboard-sold">
                      <h3>Aantal verkochte producten</h3>
                      <h2>{calculateSoldTvs(inventory)}</h2>
                  </article>
                  <article className="dashboard-item dashboard-purchased">
                      <h3>Aantal ingekochte producten</h3>
                      <h2>{calculatePurchasedTvs(inventory)}</h2>
                  </article>
                  <article className="dashboard-item dashboard-stock">
                      <h3>Aantal te verkopen producten</h3>
                      <h2>{calculateTvsInStock(inventory)}</h2>
                  </article>
              </div>
            </section>
            <section className="inner-container">

                <article className="product product-best-seller">
                    <h2>Best verkochte tv</h2>

                    <div className="product-information">
                        <div className="product-image">
                            <img src={bestSellingTv.sourceImg} alt="Afbeelding van het product"/>
                        </div>
                        <h3>{generateStringTvInfo(bestSellingTv)}</h3>
                        <h2>{generatePrice(bestSellingTv)}</h2>
                        <p>{generateScreenSizeString(bestSellingTv.availableSizes)}</p>
                        <ul className="specs-list">
                            <li><img className="icon" src={check} alt=""/>wifi</li>
                            <li><img className="icon" src={minus} alt=""/>speech</li>
                            <li><img className="icon" src={minus} alt=""/>speech</li>
                            <li><img className="icon" src={check} alt=""/>hdr</li>
                            <li><img className="icon" src={check} alt=""/>bluetooth</li>
                            <li><img className="icon" src={minus} alt=""/>ambilight</li>
                        </ul>
                    </div>
                </article>
            </section>
              <div>{productTypes}</div>
{/*
              <section>
                  <h2>                  </h2>
                  <button type="button" onClick={}>

                  </button>
              </section>
*/}


          </main>
      </>

  )
}

export default App
