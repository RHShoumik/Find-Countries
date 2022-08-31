import React from 'react';
import style from "./country.module.css";
const Country = (props) => {
    const { name, flags, capital, population, area, maps } = props.country;
    const handleRemove = (name) => {
        props.removeCountry(name);
    }
    return (
      <article className={style.counrty}>
        <div>
          <img src={flags.png} className={style.flag} alt="Country Flag" />
          <div className={style.cardBody}>
            <h2>{name.common}</h2>
            <h3>Population : {population}</h3>
            <h3>Capital : {capital}</h3>
            <h3>Area : {area}</h3>
            <div className={style.footer}>
              <button className={style.btn}>
                <a
                  href={maps.googleMaps}
                  className={style.mapBtn}
                    target="_blank"
                  rel="noreferrer"
                >
                  View on Google Map
                </a>
              </button>
              <button className={style.btn} onClick={() =>{handleRemove(name.common);}}>Remove Country</button>
            </div>
          </div>
        </div>
      </article>
    );
}

export default Country