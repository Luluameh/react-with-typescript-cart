import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../App';
// Styles

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
    <div className="flex justify-between font-Arial border-b-1 border-lightblue pb-20">

<div className=''>
      <h3>{item.title}</h3>
      <div className='flex-1'>
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className='flex-1'>
        <Button
          size='small'
          disableElevation
          variant='contained'
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          size='small'
          disableElevation
          variant='contained'
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </div>
    </div>
    <img src={item.image} alt={item.title} className='max-w-80 object-cover ml-40 ' />
  </div>
);

export default CartItem;