import { ShoppingCart } from "lucide-react";

const navigationList = [
  { title: "Home", className: "max-md:hidden" },
  { title: "Shop", className: "" },
  { title: "Collections", className: "" },
  { title: "About Us", className: "max-xs:hidden" },
  { title: "FAQ", className: "max-md:hidden" },
  { title: "Gallery", className: "max-md:hidden" },
  { title: "Blog", className: "max-md:hidden" },
];

export const Header = () => {
  return (
    <header className="flex h-16 items-center px-6 bg-surface max-sm:px-3">
      <nav className="absolute flex justify-center inset-x-6 max-lg:justify-start max-sm:inset-x-3">
        <ul className="flex items-center gap-4">
          {navigationList.map(({ title, className }) => (
            <li key={title} className={className}>
              <a href="#" className="button heading text-lg">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="relative z-10 ml-auto flex items-center gap-4">
        <button type="button" className="button p-2 max-xs:hidden">
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