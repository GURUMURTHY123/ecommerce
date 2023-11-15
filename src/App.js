import {Component} from 'react'
import './App.css'
import {FaGreaterThan} from 'react-icons/fa'
import Header from './components/Header'
import CategoryPanel from './components/CategoryPanel'
import SpecificProductDetails from './components/SpecificProductDetails'

class App extends Component {
  state = {productsData: [], cartCount: 0}

  componentDidMount() {
    this.getProductsdata()
  }

  updateCartCount = () => {
    this.setState(prevState => ({
      cartCount: prevState.cartCount + 1,
    }))
  }

  getProductsdata = async () => {
    const url = 'https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d'
    const options = {
      method: 'GET',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
    const response = await fetch(url, options)
    const responseData = await response.json()
    this.setState({productsData: responseData.categories})
  }

  render() {
    const {productsData, cartCount} = this.state
    return (
      <>
        <Header cartCount={cartCount} />
        <div className="product-body-container">
          <div className="category-panel-container">
            {productsData.map(eachProduct => (
              <CategoryPanel productName={eachProduct.name} />
            ))}
          </div>
          <div className="products-details-container">
            {productsData.map(eachProduct => (
              <>
                <div className="specific-product-container">
                  <div className="product-name-icon-container">
                    <h1 style={{marginRight: '10px'}}>{eachProduct.name}</h1>
                    <FaGreaterThan size={20} style={{marginTop: '5px'}} />
                  </div>
                  <ul className="specific-products-container">
                    {eachProduct.products.map(eachProductDetail => (
                      <SpecificProductDetails
                        details={eachProductDetail}
                        updateCartCount={this.updateCartCount}
                      />
                    ))}
                  </ul>
                </div>
              </>
            ))}
          </div>
        </div>
      </>
    )
  }
}

export default App
