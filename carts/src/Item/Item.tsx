import Button from '@material-ui/core/Button';
// Types
import { CartItemType } from '../App';
// Styles

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <div className='flex justify-between flex-col w-full  border border-blue-200 rounded-[20px] h-full'>
    <img src={item.image} alt={item.title} className='max-h-64 object-cover rounded-md     ' />
    <div className='font-sans p-4 h-full'>
      <h3 className='font-bold'>{item.title}</h3>
      <p>{item.description}</p>
      <h3 className='font-bold'>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}  className='rounded-md font-semibold '>
        Add to cart
        </Button>
  </div>
);

export default Item;