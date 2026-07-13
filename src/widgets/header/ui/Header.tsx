import { ShoppingCart } from "lucide-react";

const navigationList = [
  "Home",
  "Shop",
  "Collections",
  "About Us",
  "FAQ",
  "Gallery",
  "Blog"
];

export const Header = () => {
  return (
    <header className="flex h-16 items-center px-6 bg-surface">
      <nav className="absolute flex justify-center inset-x-0">
        <ul className="flex items-center gap-4">
          {navigationList.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="button heading text-lg"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="relative z-10 ml-auto flex items-center gap-4">
        <button type="button" className="button p-2">
          <ShoppingCart size={24} strokeWidth={2} />
        </button>

        <button
          type="button"
          className="button-primary"
        >
          Log In
        </button>
      </div>
    </header>
  );
};