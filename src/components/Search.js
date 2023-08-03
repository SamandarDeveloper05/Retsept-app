import React,{useState, useEffect} from 'react'

const Search = ({cb }) => {
    const [value, setValue] = useState('')

    const handleKey = (e) => {
        if(e.key === 'Enter'){
            handleSubmit()
        }
    }
    const handleSubmit = () => {
         cb(value)
    }
  return (
    <div className='row'>
        <div className='input-field col s12'>
            <input
             type="search"
            id='search-file'
            placeholder='Search...'
            onKeyDown={handleKey}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            />
            <button className='btn' style={{position: 'Absolute', top: '0', right: '0'}}
          onClick={handleSubmit}
          >Search</button>
        </div>
    </div>
  )
}

export default Search