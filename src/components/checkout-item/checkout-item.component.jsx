import { connect } from 'react-redux';
import './checkout-item.styles.scss';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem =({item, clearItemFromCart, addItem, removeItem})=>(
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={item.imageUrl} alt='item'/>
        </div>
        <span className='name'>{item.name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={()=>removeItem(item)}>&#10094;</div>
            <span className='value'>{item.quantity}</span> 
            <div className='arrow' onClick={()=>addItem(item)}>&#10095;</div>
        </span>
        <span className='price'>{item.price}</span>
        <div 
            className='remove-button'
            onClick={()=>clearItemFromCart(item) }>&#10006;</div>
    </div>
)

const mapDespatchToMap=(dispatch)=>({
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
})

export default connect(null, mapDespatchToMap)( CheckoutItem);