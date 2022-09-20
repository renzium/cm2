import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { selectThemeColors } from '@utils'
import '@styles/react/libs/react-select/_react-select.scss'

function CountrySelector() {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

  return <Select theme={selectThemeColors} className='react-select' options={options} value={value} onChange={changeHandler} />
}

export default CountrySelector