import {AiOutlineShoppingCart} from 'react-icons/ai'
import './index.css'

const Header = props => {
  const {cartCount} = props
  return (
    <div className="header-container">
      <h1 className="header-container-heading">E-Commerce</h1>
      <div className="cart-data-container">
        <AiOutlineShoppingCart size={20} className="cart-icon" />
        <p className="cart-count">{cartCount}</p>
      </div>
    </div>
  )
}
export default Header
