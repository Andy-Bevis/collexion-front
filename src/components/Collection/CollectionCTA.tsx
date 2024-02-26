import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useAppDispatch } from '../../hooks/redux';
import { resetCurrentCollection } from '../../store/reducers/collectionsReducer';

export default function CollectionCTA() {
  const dispatch = useAppDispatch();

  return (
    <div className="relative">
      <div
        className="hero min-h-fit my-6"
        style={{
          backgroundImage:
            'url(https://images.caradisiac.com/images/6/7/0/0/196700/S0-the-collection-paris-718138.jpg)',
          // 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
        }}
      >
        <div className="hero-overlay bg-opacity-60" />
        <div className="hero-content text-center text-neutral-content text-gray-100 p-8">
          <div className="max-w-md">
            <h3 className="mb-5 text-3xl font-bold">
              Créez vos propres collections !
            </h3>
            <p className="mb-5">
              Vous avez également des objets de collection dont vous êtes
              fier(e) ? Publiez-la sur Collexion pour enchanter toute la
              communauté de collectionneurs en quête d'inspiration !
            </p>
            <Link
              to="/collection/new"
              onClick={() => dispatch(resetCurrentCollection())}
            >
              <Button text={'Je crée ma collection !'} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
