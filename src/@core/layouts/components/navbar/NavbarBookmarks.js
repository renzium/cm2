// ** React Imports
import { Link } from 'react-router-dom'
import { Fragment, useEffect } from 'react'

// ** Third Party Components
import * as Icon from 'react-feather'

// ** Custom Component
import Autocomplete from '@components/autocomplete'

// ** Reactstrap Imports
import {
  NavItem,
  NavLink,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledTooltip,
  UncontrolledDropdown
} from 'reactstrap'

// ** Store & Actions
import { useDispatch } from 'react-redux'
import { getBookmarks} from '@store/navbar'

const NavbarBookmarks = props => {
  // ** Props
  const { setMenuVisibility } = props

  // ** State

  // ** Store Vars
  const dispatch = useDispatch()

  // ** ComponentDidMount
  useEffect(() => {
    dispatch(getBookmarks())
  }, [])

  // ** Loops through Bookmarks Array to return Bookmarks
 

  // ** If user has more than 10 bookmarks then add the extra Bookmarks to a dropdown

  // ** Removes query in store

  // ** Loops through Bookmarks Array to return Bookmarks
 

  // ** Function to toggle Bookmarks

  // ** Function to handle Bookmarks visibility
 

  // ** Function to handle Input change
  

  // ** Function to handle external Input click

  // ** Function to clear input value
  
  return (
    <Fragment>
      <ul className='navbar-nav d-xl-none'>
        <NavItem className='mobile-menu me-auto'>
          <NavLink className='nav-menu-main menu-toggle hidden-xs is-active' onClick={() => setMenuVisibility(true)}>
            <Icon.Menu className='ficon' />
          </NavLink>
        </NavItem>
      </ul>
     
    </Fragment>
  )
}

export default NavbarBookmarks
