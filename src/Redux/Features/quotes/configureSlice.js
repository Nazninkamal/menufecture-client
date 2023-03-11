import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    configure: [],

}



const configureSlice = createSlice({
    name: "configure",
    initialState,
    reducers: {
        createConfigure: (state, { payload }) => {

            if (payload.material) {
                const exist = state.configure.find(con => con.id === payload.id);

                if (!exist) {
                    state.configure.push(payload)
                } else if (exist) {
                    state.configure = state.configure.filter(con => con.id !== payload.id)
                    state.configure.push(payload);

                    localStorage.setItem('configure', JSON.stringify(state?.configure));
                }


            }

            if (!payload.material && !payload.price && payload.id) {
                state.configure = state.configure.filter(con => con.id !== payload.id);
                /*    localStorage.setItem('configure', JSON.stringify(state?.configure));
   
                   state.configure = JSON?.parse(localStorage?.getItem("configure")) */



            }




        }

    },



});

export const { createConfigure } = configureSlice.actions;
export default configureSlice.reducer;