import { createSlice } from "@reduxjs/toolkit";

type StoreProps = {
  idTable: number;
  order: [
    {
      idProduct: number;
      comment: string;
      amount: number;
    }
  ];
};
let initialState: StoreProps[] = [];

export const store = createSlice({
  name: "store",
  initialState,
  reducers: {
    add: (state, action) => {
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
        } else {
          const data = {
            idProduct: action.payload.idProduct,
            comment: action.payload.comment,
            amount: action.payload.amount,
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
            },
          ],
        };

        state.push(data);
      } 
      },     
  },
});

// // enviar dados para o redux
// const idTable = await localStorage.getItem("@restaurante/idTable")
// if (!idTable) {
//   return alert()
// }

// dispatch(
//   add({
//     idTable,
//     idProduct: 99,
//     comment: "",
//     amount: 1,
//   })
// );

// // setar a mesa ao acessar o qrCode
// localStorage.setItem("@restaurante/idTable", JSON.stringify(state));

  
        //Verificar o estado possui a mesa (idtable)
        //Se tive idtable precisa verificar o order que está recebendo no action
        //Se tiver o idProduct dentro do order vai ter usar o amount +1
        //Caso não tenha idProduct dentro do order vai ter que dar um push no order
        //Se não cair nenhuma condição anterior pode dar o push no estato com toda a action recebida (linha 27)
       

export const {add} = store.actions
export default store.reducer
