import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'

function Header() {

    const [{ cart }, dispatch] = useStateValue()

    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''/>
            </Link>

            <div className='header__search'>
                <input className='header__searchInput' type='text'/>
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className='header__nav'>
                <div className='header__option'>
                    <span className='option__lineOne'>Hello Guest</span>
                    <span className='option__lineTwo'>SignIn</span>
                </div>
                <div className='header__option'>
                    <span className='option__lineOne'>Returns</span>
                    <span className='option__lineTwo'>Orders</span>
                </div>
                <div className='header__option'>
                    <span className='option__lineOne'>Your</span>
                    <span className='option__lineTwo'>Prime</span>
                </div>

                <Link to='/checkout'>
                    <div className='header__optionCart'>
                        <ShoppingBasketIcon />
                        <span className='option__lineTwo header__cartCount'>{cart?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
