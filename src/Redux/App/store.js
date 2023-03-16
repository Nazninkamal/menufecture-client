import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { productsApi } from '../Features/products/productApi';
import { projectsApi } from '../Features/projects/projectsApi';
import { quotesApi } from '../Features/quotes/quotesApi';
import AuthSlice from '../Features/User/AuthSlice';
import createQuoteSlice from '../Features/quotes/quotesSlice';
import { userApi } from '../Features/User/userApi';
import configureSlice from '../Features/quotes/configureSlice';
import { materialApi } from '../Features/Material/matarialAPI';





const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [projectsApi.reducerPath]: projectsApi.reducer,
        [quotesApi.reducerPath]: quotesApi.reducer,
        [materialApi.reducerPath]: materialApi.reducer,
        auth: AuthSlice,
        quote: createQuoteSlice,
        configure: configureSlice

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(productsApi.middleware, userApi.middleware, projectsApi.middleware, quotesApi.middleware, materialApi.middleware),

})

setupListeners(store.dispatch)

export default store;