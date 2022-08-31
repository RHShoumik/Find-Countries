import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Country from './Country';

import style from "./countries.module.css";

const Countries = (props) => {
  const countries = props.countriesInfo
  return (
    <section className={style.countries}>
      {countries.map((country) => {
        const countryNew = { country,  id: uuidv4()};
        return (<Country key={countryNew.id} {...countryNew} removeCountry={props.removeCountry} />)
      })}
    </section>
  );
}

export default Countries