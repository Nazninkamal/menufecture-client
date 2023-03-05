import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { productsApi } from '../Features/products/productApi';
import { projectsApi } from '../Features/projects/projectsApi';
import { quotesApi } from '../Features/quotes/quotesApi';
import AuthSlice from '../Features/User/AuthSlice';
import { userApi } from '../Features/User/userApi';





const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [projectsApi.reducerPath]: projectsApi.reducer,
        [quotesApi.reducerPath]: quotesApi.reducer,
        auth: AuthSlice

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(productsApi.middleware, userApi.middleware, projectsApi.middleware, quotesApi.middleware),

})

setupListeners(store.dispatch)

export default store;