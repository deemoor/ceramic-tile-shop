const links = [
  "Terms of service",
  "Privacy policy",
  "Shipping info",
  "Contact us"
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="m-auto mb-4 px-6 max-sm:px-3">
      <div className="grid grid-cols-4 max-sm:grid-cols-2 max-sm:gap-1">
        {links.map(item => (
          <a
            key={item}
            href="#"
            className="
              button px-2 py-0 text-center
              border-r-2 border-black
              [&:nth-child(4)]:border-r-0
              max-sm:[&:nth-child(2)]:border-r-0
            "
          >
            {item}
          </a>
        ))}
      </div>
      <p className="mt-2 text-center">© {currentYear} The Artisan Kiln. All rights reserved.</p>
    </footer>
  );
};