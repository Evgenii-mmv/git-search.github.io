import { useAppSelector } from "../hooks/redux";
import FavouriteCard from "../components/FavouriteCard";

function FavouritesPage() {
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length === 0) {
    return <p className="text-bold text-center">No favourites repo.</p>;
  }

  return (
    <div className="flex justify-center pt-10 mx-auto">
      <ul className="list-none">
        {favourites.map((favourite) => {
          return <FavouriteCard favourite={favourite} key={favourite} />;
        })}
      </ul>
    </div>
  );
}

export default FavouritesPage;
