import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { productsApi } from '../Features/products/productApi';
import AuthSlice from '../Features/User/AuthSlice';
import { userApi } from '../Features/User/userApi';





const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        auth: AuthSlice

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(productsApi.middleware, userApi.middleware),

})

setupListeners(store.dispatch)

export default store;