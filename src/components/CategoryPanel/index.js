import './index.css'

const CategoryPanel = props => {
  const {productName} = props
  return (
    <div className="category-container">
      <p style={{fontweight: 500}}>{productName}</p>
    </div>
  )
}

export default CategoryPanel
