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

const initialState: StoreProps[] = [];

export const store = createSlice({
  name: "store",
  initialState,

  reducers: {
    add: (state, action) => {
        //Verificar o estado possui a mesa (idtable)
        //Se tive idtable precisa verificar o order que está recebendo no action
        //Se tiver o idProduct dentro do order vai ter usar o amount +1
        //Caso não tenha idProduct dentro do order vai ter que dar um push no order
        //Se não cair nenhuma condição anterior pode dar o push no estato com toda a action recebida (linha 27)
        state.push(action.payload)
    }    
},
});

export const {add} = store.actions
export default store.reducer
