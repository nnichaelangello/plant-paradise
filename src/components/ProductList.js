import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const plants = [
  { id: 1, name: 'Monstera', price: 25, thumbnail: 'https://images.unsplash.com/photo-1612365932948-2e03b182a829?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80', category: 'Tropical' },
  { id: 2, name: 'Fiddle Leaf Fig', price: 35, thumbnail: 'https://images.unsplash.com/photo-1593697909683-2c5991b74119?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80', category: 'Tropical' },
  { id: 3, name: 'Snake Plant', price: 15, thumbnail: 'https://images.unsplash.com/photo-1597071059400-2e9a8eecf863?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80', category: 'Succulent' },
  { id: 4, name: 'Pothos', price: 20, thumbnail: 'https://images.unsplash.com/photo-1593696140825-8570e0e0fa2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80', category: 'Vine' },
  { id: 5, name: 'ZZ Plant', price: 30, thumbnail: 'https://images.unsplash.com/photo-1598984017580-03e57930f068?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80', category: 'Succulent' },
  { id: 6, name: 'Peace Lily', price: 22, thumbnail: 'https://images.unsplash.com/photo-1598986645165-1ec085a4722a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80', category: 'Tropical' },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  const categories = ['Tropical', 'Succulent', 'Vine'];

  return (
    <div className="product-list">
      <h2>Our Plants</h2>
      {categories.map(category => (
        <div key={category} className="category">
          <h3>{category}</h3>
          <div className="plants">
            {plants.filter(plant => plant.category === category).map(plant => {
              const isInCart = cartItems.some(item => item.id === plant.id);
              return (
                <div key={plant.id} className="plant">
                  <img src={plant.thumbnail} alt={plant.name} />
                  <h4>{plant.name}</h4>
                  <p>${plant.price}</p>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart}
                  >
                    {isInCart ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;