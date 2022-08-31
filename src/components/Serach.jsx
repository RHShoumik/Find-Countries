import React, { useEffect, useState } from 'react';

const Serach = (props) => {
    const [searchText, setSearchText] = useState("");

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }
    useEffect(() => {
        props.onSearch(searchText);
    }, [searchText]);
  return (
      <div>
          <input type="text" value={searchText} placeholder='Search tour Counrty' onChange={handleChange}/>
    </div>
  )
}

export default Serach