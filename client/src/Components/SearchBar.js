import SearchIcon from '@material-ui/icons/Search';
import React from 'react'
import '../StyleSheet/SearchBar.css'

function SearchBar() {
  return (
    <div className='SearchBar__container'>
        <div className='searchBar__fields'>
            <div className='search__textPhrase'>
                <h3>Find Your Ideal Home</h3>
            </div>
            <div className='searchInput'>
                <input type='text' placeholder="Search" />
                <SearchIcon />
            </div>
            <div className='filter'>
                Filter by Province:{' '}
                <select>
                    <option>Western Cape</option>
                    <option>Eastern Cape</option>
                    <option>Linpopo</option>
                    <option>Gauteng</option>
                    <option>Northern Cape</option>
                    <option>Kwazulu Mata</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default SearchBar