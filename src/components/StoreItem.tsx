import { Card ,Button } from 'react-bootstrap'
import { currencyFormater } from '../utilities/currencyFormater'
import { useShoppingCart } from '../context/shoppingCartContext';

type storeItemProps= {
  id: number,
  name: string,
  price: number,
  imgUrl: string,
}

export function StoreItem ( {id, name, price, imgUrl }:storeItemProps){
  
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity , removeFromCart } = useShoppingCart();
  
  const quantity = 0

  return (
  <Card className="h-100">
    <Card.Img 
    variant="top" 
    src={imgUrl} 
    height="200px"
   //this is for maintaining aspect ratio 
    style={{ objectFit: 'cover'}}
    />
    <Card.Body className="d-flex flex-column">
      <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
       <span className="fs-2">{name}</span>
       <span className="ms-2 text-muted">{ currencyFormater(price)}</span>
      </Card.Title>
      <div className="mt-auto">
        {quantity === 0 ?(<Button className="w-100">add To cart </Button>): null }
      </div>
    </Card.Body>
  </Card>
  )
}
