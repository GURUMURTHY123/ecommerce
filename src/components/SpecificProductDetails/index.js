import './index.css'
import {AiOutlinePlusCircle} from 'react-icons/ai'

const SpecificProductDetails = props => {
  const {details, updateCartCount} = props
  const {id, name, image, price, weight} = details

  const changeCartCount = () => {
    updateCartCount()
  }

  return (
    <li key={id} className="product-information-container">
      <div
        style={{
          display: 'flex',
          backgroundImage: `url(${image})`,
          width: '100px',
          height: '100px',
          justifyContent: 'flex-end',
          backgroundSize: 'cover',
        }}
      >
        <AiOutlinePlusCircle
          size={40}
          style={{color: 'green', alignSelf: 'flex-end'}}
          onClick={changeCartCount}
        />
      </div>
      <p>{price}</p>
      <p>{name}</p>
      <p>{weight}</p>
    </li>
  )
}

export default SpecificProductDetails
