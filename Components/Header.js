import { HeaderIcons } from "./HeaderIcons";
import {
  HomeIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
  BadgeCheckIcon,
} from "@heroicons/react/outline";

export const Header = () => {
  return (
    <header className="flex flex-col justify-between sm:flex-row m-5">
      <div className="flex Flex-grow justify-evenly max-w-2xl">
        <HeaderIcons title="HOME" Icon={HomeIcon} />
        <HeaderIcons title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderIcons title="VARIFIED" Icon={BadgeCheckIcon} />
        <HeaderIcons title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderIcons title="SEARCH" Icon={SearchIcon} />
        <HeaderIcons title="USER" Icon={UserIcon} />
      </div>

      <div className="flex justify-center align-middle">
        <svg
          width="130"
          height="20"
          viewBox="11 8 118 48"
          xmlns="http://www.w3.org/2000/svg"
          className="relative left-0 buttom-0"
        >
          <path
            fill="#f0f1f2"
            d="M84.566 54.801V9.337h11.427V54.8H84.566zm-17.854-13.16V22.975H77.71v19.595c0 7.207-4.118 12.173-10.997 12.173v.057H55.946c-7.468 0-12.52-4.22-12.52-12.23V22.976h10.996V41.64c0 1.654 1.317 2.991 2.946 2.991h6.398c1.629 0 2.946-1.337 2.946-2.99zm61.71-18.665h10.997v19.595c0 7.207-4.118 12.173-10.996 12.173v.057h-10.767c-7.468 0-12.52-4.22-12.52-12.23V22.976h10.998V41.64c0 1.654 1.317 2.991 2.946 2.991h6.397c1.628 0 2.945-1.337 2.945-2.99V22.975zm-106.657.548c6.96 0 12.518 3.199 12.518 11.511v19.766H23.286V36.456a2.939 2.939 0 0 0-2.945-2.937h-6.4a2.942 2.942 0 0 0-2.947 2.937V54.8H0V9.337h10.994v14.852s1.244-.665 3.717-.665h7.054z"
          />
        </svg>
      </div>
    </header>
  );
};
