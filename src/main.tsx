import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import App from './components/App/App';

import './styles/index.scss';
import store from './store';
import Collections from './components/Collection/Collections';
import SingleCollection from './components/Collection/SingleCollection';
import SingleCollectionEdit from './components/Collection/SingleCollectionEdit';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchSingleCollection } from './store/reducers/collectionsReducer';
import Error from './components/Error/Error';
import axios from 'axios';
import Subscribe from './components/Subscribe/Subscribe';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      //Todo : ajouter un errorElement //Todo : ajouter les routes Collections,
      Object, Catégories, User, Mentions...
      <Route path="/categories" />
      <Route path="/category/:id" />
      <Route path="/collections" element={<Collections />} />
      <Route
        path="/collection/:id"
        element={<SingleCollection />}
        loader={({ params }) => {
          const token = JSON.parse(localStorage.getItem('jwt'));
          const promise = axios(
            `http://64ed31429cbded49acab4281.cloud.lan/Apothéose/collexion/projet-12-collexion-back/public/api/collection/${params.id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          return promise;
        }}
        // errorElement={<Error />}
      />
      <Route
        path='/collection/:id/edit'
        element={<SingleCollectionEdit />}
      />
      <Route path='/subscribe' element={<Subscribe />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
