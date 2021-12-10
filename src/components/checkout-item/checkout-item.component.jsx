import { connect } from 'react-redux';
import './checkout-item.styles.scss';
import { removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem =({item, removeItem})=>(
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={item.imageUrl} alt='item'/>
        </div>
        <span className='name'>{item.name}</span>
        <span className='quantity'>{item.quantity}</span>
        <span className='price'>{item.price}</span>
        <div 
            className='remove-button'
            onClick={()=>removeItem(item) }>&#10006;</div>
    </div>
)

const mapDespatchToMap=(dispatch)=>({
    removeItem: (item) => dispatch(removeItem(item))
})

export default connect(null, mapDespatchToMap)( CheckoutItem);