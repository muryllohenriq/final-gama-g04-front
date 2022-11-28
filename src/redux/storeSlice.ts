import { createSlice } from "@reduxjs/toolkit";

type StoreProps = {
  idTable: number;
  order: [
    {
      idProduct: number;
      comment: string;
      amount: number;
      name:string;
      price: number;
      image: string;
    }
  ];
};
let initialState: StoreProps[] = [];

export const store = createSlice({
  name: "store",
  initialState,
  reducers: {
    add: (state, action) => {
      // setar a mesa ao acessar o qrCode
      localStorage.setItem("@restaurante/idTable", JSON.stringify(state));
      const indexTable = state.findIndex(
        (item) => Number(item.idTable) === Number(action.payload.idTable)
      );     

      if (indexTable >= 0) {
        const indexOrder = state[indexTable].order.findIndex(
          (item) => Number(item.idProduct) === Number(action.payload.idProduct)
        );

        if (indexOrder >= 0) {
          state[indexTable].order[indexOrder].comment = action.payload.comment;
          state[indexTable].order[indexOrder].amount =
          state[indexTable].order[indexOrder].amount + action.payload.amount;
          state[indexTable].order[indexOrder].name = action.payload.name;
        } else {
          const data = {
            idProduct: action.payload.idProduct,
            comment: action.payload.comment,
            amount: action.payload.amount,
            name:action.payload.name,
            price: action.payload.price,
            image: action.payload.image,
          };

          state[indexTable].order.push(data);
        }
      } else {
        const data: StoreProps = {
          idTable: action.payload.idTable,
          order: [
            {
              idProduct: action.payload.idProduct,
              comment: action.payload.comment,
              amount: action.payload.amount,
              name: action.payload.name,
              price: action.payload.price,
              image: action.payload.image,
            },
          ],
        };

        state.push(data);
      } 
    },
    remove: (state, action) => {
      const index = state.findIndex((item) => item.order.find((order) => order) === action.payload);
      state.splice(index);
    },
      },     
},      
);

// // enviar dados para o redux
// const idTable = await localStorage.getItem("@restaurante/idTable")
// if (!idTable) {
//   return alert()
// }

export const { add, remove } = store.actions;
export default store.reducer;
