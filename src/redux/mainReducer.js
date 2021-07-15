import Quad from '../../assets/Quad.png';
import Quad2 from '../../assets/Quad2.png';
import Quad3 from '../../assets/Quad3.png';

const SORT_BY = 'SORT_BY';

const initialState = {
  items: [
    {
      id: 1,
      image: Quad,
      name: 'DJI Air 2S',
      price: '1424 $',
      rating: '4.2',
      speed: 1,
    },
    {
      id: 2,
      image: Quad2,
      name: 'DJI Mavic Mini',
      price: '990.90 $',
      rating: '4.5',
      speed: 2,
    },
    {
      id: 3,
      image: Quad3,
      name: 'DJI’s Matrice 200',
      price: '2780.30 $',
      rating: '3.8',
      speed: 3,
    },
  ],
  selectedSort: 'All',
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY:
      return {
        ...state,
        selectedSort: action.payload,
      };
    default:
      return state;
  }
};

export let setSortBy = (payload) => {
  return { type: SORT_BY, payload };
};

export default mainReducer;
