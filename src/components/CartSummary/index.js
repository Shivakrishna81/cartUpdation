import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.array.forEach(element => {
        total += element.price * element.quantity
      })

      return (
        <div className="summary">
          <h1>
            Order Total: <span className="total">Rs {total}/-</span>
          </h1>
          <p>{cartList.length} items in cart</p>
          <button type="button" className="order">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
