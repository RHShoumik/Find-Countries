import React, { useEffect, useState } from 'react';

const Serach = (props) => {
    const [searchText, setSearchText] = useState("");
    const { onSearch } = props;

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }
    useEffect(() => {
        onSearch(searchText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchText]);
  return (
      <div>
          <input type="text" value={searchText} placeholder='Search your Counrty' onChange={handleChange}/>
    </div>
  )
}

export default Serach