import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import minus from './assets/minus.png'
import check from './assets/check.png'
import calculateSoldTvs from "./helpers/calculateSoldTvs.js";
import calculatePurchasedTvs from "./helpers/calculatePurchasedTvs.js";
import calculateTvsInStock from "./helpers/calculateTvsInStock.js";
import generateStringTvInfo from "./helpers/generateStringTvInfo.js";
import generatePrice from "./helpers/generatePrice.js";
import generateScreenSizeString from "./helpers/generateScreenSize.js";
import sortBestseller from "./helpers/arrayMethodsButtons/sortBestseller.js";
import sortCheapestFirst from "./helpers/arrayMethodsButtons/sortCheapestFirst.js";
import {productTypes} from "./constants/Deel2-Opdr1-Arrays.js";
import sortSportTv from "./helpers/arrayMethodsButtons/sortSportTv.js";

function App() {


    return (
        <>
            <main className="main-container">
                <h1>Tech it easy dashboard</h1>
                <section>
                    <h2>Verkoopoverzicht</h2>
                    <div className="dashboard-container">
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
                <section className="bestseller-container">
                    <h2>Best verkochte tv</h2>
                    <article className="product product-best-seller">
                    <span className="product-image">
                        <img src={bestSellingTv.sourceImg} alt="Afbeelding van het product"/>
                    </span>
                        <div className="product-info">
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
                <section>
                    <h2>Merkenlijst</h2>
                    <ul>
                        {inventory.map((tv) => {
                            return <li>{tv.brand}</li>
                        })}
                    </ul>
                </section>
                <section>
                    <h2>Alle tv's</h2>
                    <button type="button" onClick={sortBestseller}>
                        Meest verkochte eerst
                    </button>
                    <button type="button" onClick={sortCheapestFirst}>
                        Goedkoopste eerst
                    </button>
                    <button type="button" onClick={sortSportTv} >
                        Meest geschikt voor sport eerst
                    </button>
                    {inventory.map((tv) => {
                        return (
                            <article className="product" key={tv.type}>
                            <span className="product-image">
                                <img src={tv.sourceImg} alt="Afbeelding van het product"/>
                            </span>
                                <div className="product-info">
                                    <h3>{generateStringTvInfo(tv)}</h3>
                                    <h2>{generatePrice(tv)}</h2>
                                    <p>{generateScreenSizeString(tv.availableSizes)}</p>
                                    <ul className="specs-list">
                                        {tv.options.map((option) => {
                                            if (option.applicable === true) {
                                                return (
                                                    <li key={tv.type}><img className="icon" src={check} alt=""/>{option.name}</li>
                                                )
                                            } else {
                                                return (
                                                    <li key={tv.type}><img className="icon" src={minus} alt=""/>{option.name}</li>)
                                            }
                                        })}
                                    </ul>
                                </div>
                            </article>
                        )})}
                </section>
            </main>
        </>
    )
}

export default App
