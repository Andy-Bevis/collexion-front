import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import GalleryCategories from '../Gallery/GalleryCategories';
import CarrouselCategories from '../Carrousel/CarrouselCategories';
import Background from '../Background/Background';
import { fetchCategories } from '../../store/reducers/categoriesReducer';

export default function Categories() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.categories.list);
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <div>
      <div className="relative">
        <Background />
        <div>
          <h1 className="md:h-20 p-5 text-center text-2xl font-bold text-white bg-gradient-to-r from-customred to-customorange">
            Catégories
          </h1>
          <h2 className="font-bold text-2xl text-customred mt-10">
            Catégories à la une
          </h2>
          <CarrouselCategories />
          <h2 className="font-bold text-2xl text-customred mt-10 mb-8">
            Toutes les catégories
          </h2>
          <GalleryCategories categories={data} />
        </div>
      </div>
    </div>
  );
}