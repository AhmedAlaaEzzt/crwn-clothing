import './cart-dropdown.styles.scss'
import CustomButton  from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';

const CartDropdown =({cartItems})=>{
    return(<div className='cart-dropdown'>
       
        <div className='cart-items'>
        {cartItems.map(item => <CartItem item={item}/>)}
        </div>
        
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>)
}

const mapStateToProps =(state)=>({
    cartItems: state.cartReducer.cartItems
})

export default connect(mapStateToProps)( CartDropdown);