import React from "react";
import { useActions } from "../hooks/actions";

interface Props {
  favourite: string;
}

function FavouriteCard({ favourite }: Props) {
  const { removeFavourite } = useActions();
  const removeFromFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(favourite);
    e.preventDefault();
    removeFavourite(favourite);
  };

  return (
    <div className="justify-between flex items-center border py-3 px-5 rounded mb-2 hover:shadow-md transition-all gap-5">
      <li>
        <a href={favourite} target="_blank">
          {favourite}
        </a>
      </li>
      <button
        className="px py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
        onClick={removeFromFavourite}
      >
        Remove
      </button>
    </div>
  );
}

export default FavouriteCard;
