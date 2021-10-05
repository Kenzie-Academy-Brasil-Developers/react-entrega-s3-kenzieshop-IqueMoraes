import { ADD_PRODUCT, SUB_PRODUCT } from './actionTypes';

const CartReducer = (state = [{
    id: 2,
    name: "Bola Suiça Pilates 65cm Com Bomba Yoga",
    price: 67.0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_637490-MLB25969258735_092017-O.webp",
  },
  {
    id: 3,
    name: "Bola Society Penalty Se7e Pro Ko X",
    price: 269.9,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_654700-MLB40502553738_012020-O.webp",
  },
  {
    id: 4,
    name: "Bolinhas De Piscina Infantil Excelente Qualidade 100 Unidad",
    price: 47.99,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_654247-MLB45481036640_042021-O.webp",
  },
  {
    id: 5,
    name: "Bola Brinquedo Interativo Caes Com Fendas Porta Ração Petiscos",
    price: 2.99,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_982765-MLB45638407650_042021-O.webp",
  }], action ) =>{
    switch (action.type){
        case ADD_PRODUCT:
            alert('foi');
            return [...state, action.ball]

        case SUB_PRODUCT:
                return state.filter(item => item.id !== action.ball.id)

        default:
            return state

    }
}

export default CartReducer;