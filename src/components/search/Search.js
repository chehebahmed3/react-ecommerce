import React, { useContext } from 'react'
import { AppContext } from '../../App'

function Search() {
    const {appSearch,changingSrarchData}=useContext(AppContext)
  return (
    <div>
      <input
      className='search__input'
      type='text'
      placeholder="Enter product name"
      value={appSearch}
      onChange={changingSrarchData}
      >
      </input>
    </div>
  )
}

export default Search