import React from 'react'
import './App.scss'

class SearchListEntry extends React.Component {
  render () {
    return (
      <div className='search-container'>
        <h3>Results</h3>
        <div style={{ width: '90%', margin: '0 auto', border: 'solid 1px black' }}>
          <img className='image-container' src='http://www.freeiconspng.com/uploads/male-icon-4.jpg' />
          <p className='user-info' style={{ float: 'right' }}>
            Name: Bob<br />
            Compatibility: 80%
          </p>
        </div>
      </div>
    )
  }
}

export default SearchListEntry
