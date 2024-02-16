import { Link } from 'react-router-dom';
import { ICategory } from '../../types/types';

export default function Gallery({ categories }: { categories: ICategory[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link key={category.id} to={`/category/${category.id}`}>
          <div className="card h-auto max-w-full bg-base-100 shadow hover:contrast-50">
            <figure>
              <img className="" src={category.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h3 className="card-title justify-center">{category.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}