import axios, { AxiosResponse } from 'axios';
import { LoaderFunction, Params, json } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import Error from '../components/Error/Error';

const storedToken = localStorage.getItem('jwt');
const token = storedToken ? JSON.parse(storedToken) : '';

const storedUserId = localStorage.getItem('uid');
const userId = storedUserId ? JSON.parse(storedUserId) : '';

export function singleCollectionLoader({ params }: { params: Params }): any {
  if (params.id) {
    const promise = axios.get(
      `${import.meta.env.VITE_API_PATH}collection/${params.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return promise;
  }
}

export function collectionsLoader(): Promise<AxiosResponse<any, any>> {
  const promise = axios.get(`${import.meta.env.VITE_API_PATH}collections`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return promise;
}

export function singleObjectLoader({ params }: { params: Params }): any {
  if (params.id) {
    const promise = axios.get(
      `${import.meta.env.VITE_API_PATH}object/${params.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return promise;
  }
}

export function userLoader({ params }: { params: Params }): any {
  if (params.id) {
    const promise = axios.get(
      `${import.meta.env.VITE_API_PATH}user/${params.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return promise;
  }
}

export function userEditLoader({ params }: { params: Params }): any {
  if (params.id) {
    const promise = axios.get(
      `${import.meta.env.VITE_API_PATH}user/${params.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return promise;
  } 
}
