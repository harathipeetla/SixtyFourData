import {useState} from 'react'
import './index.css'

const SelectCountry = () => {
  const [selectedCountry, setselectedCountry] = useState('India')
  const [data, setData] = useState({})

  const countriesData = {
    India: {
      date: 'April 0, 2024',
      productionheader: 'Industrial Production',
      cpiInflationhead: 'Cpi Inflation',
      industrialProduction:
        'India Industrial Production Index is at a current level of 102.66, up from 102.26 last month and down from 102.66 one year ago. This is a change of 0.39% from last month and -0.00% from one year ago.',
      cpiInflation:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ',
    },
    USA: {
      date: 'March 3, 2024',
      productionheader: 'Industrial Production',
      cpiInflationhead: 'Cpi Inflation',
      industrialProduction:
        'USA Industrial Production Index is at a current level of 102.66, up from 102.26 last month and down from 102.66 one year ago. This is a change of 0.39% from last month and -0.00% from one year ago.',
      cpiInflation:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    },
    UK: {
      date: 'Nov 04, 2024',
      productionheader: 'Industrial Production',
      cpiInflationhead: 'Cpi Inflation',
      industrialProduction:
        'UK Industrial Production Index is at a current level of 95.40, up from 94.30 last month and up from 94.10 one year ago. This is a change of 1.17% from last month and 1.38% from one year ago.',
      cpiInflation:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    },

    AU: {
      date: 'August 24, 2024',
      productionheader: 'Industrial Production',
      cpiInflationhead: 'Cpi Inflation',
      industrialProduction:
        'AU Industrial Production Index is at a current level of 95.40, up from 94.30 last month and up from 94.10 one year ago. This is a change of 1.17% from last month and 1.38% from one year ago.',
      cpiInflation:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    },
  }

  const handleChange = event => {
    setselectedCountry(event.target.value)
    setData(countriesData[event.target.value])
  }

  return (
    <div className="dropdown-container">
      <div className="top-part">
        <div>
          <h1 className="head">Recent Releases</h1>
        </div>
        <div>
          <select
            value={selectedCountry}
            className="dropdown"
            onChange={handleChange}
          >
            <option value="India" select>
              India
            </option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="AU">AU</option>
          </select>
        </div>
      </div>
      <hr />
      <div className="data">
        <p className="date">{data.date}</p>
        <h1 className="heading">{data.productionheader}</h1>
        <p className="description">{data.industrialProduction}</p>
      </div>
      <div className="data">
        <p className="date">{data.date}</p>
        <h1 className="heading">{data.productionheader}</h1>
        <p className="description">{data.cpiInflation}</p>
      </div>
    </div>
  )
}

export default SelectCountry
