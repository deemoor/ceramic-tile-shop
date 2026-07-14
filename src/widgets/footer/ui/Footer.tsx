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
      <div>
        {links.map((item) => (
          <a
            href="#"
            className="heading button px-3 py-0 border-r-2 border-black last:border-r-0"
            key={item}
          >
            {item}
          </a>
        ))}
      </div>
      <p className="heading m-0.5 text-center">© {currentYear} The Artisan Kiln. All rights reserved.</p>
    </footer>
  );
};