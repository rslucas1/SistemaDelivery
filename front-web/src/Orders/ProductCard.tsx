import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { Product } from './types';

type Props = {
  product: Product;

}

function FormatPrice(price: number){
  const formatter = new Intl.NumberFormat('pt-BR',{
    style: 'currency',
    currency: 'BRL'
  })

  return formatter.format(price);
}

function ProductCar({product} : Props) {
  return (
      <div className="order-card-container">
        <h3 className="order-card-title">
            {product.name}
        </h3>
        <img src={product.imageUri} className="order-card-image" alt={product.name}
        />
        <h3 className="order-card-price">
         {FormatPrice(product.price)}
        </h3>
        <div className="order-card-description">
            <h3>Descrição</h3>
            <p>{product.description}</p>
        </div>
      </div>
   
    
  )

}

export default ProductCar;