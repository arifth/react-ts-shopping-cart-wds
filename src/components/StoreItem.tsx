import { Card } from 'react-bootstrap'

type storeItemProps= {
  id: number,
  name: string,
  price: number,
  imgUrl: string,
}

export function StoreItem ( {id, name, price, imgUrl }:storeItemProps){
  return (
  <Card>
    <Card.Img 
    variant="top" 
    src={imgUrl} 
    height="200px"
   //this is for maintaining aspect ratio 
    style={{ objectFit: 'cover'}}
    />
    <Card.Body className="d-flex flex-column">
      <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4">
       <span>{name}</span>
      </Card.Title>
    </Card.Body>
  </Card>
  )
}
