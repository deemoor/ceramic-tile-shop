const leftTiles = ['bg-blue-800', 'bg-amber-600', 'bg-emerald-700'];
const rightTiles = ['bg-blue-900', 'bg-orange-700', 'bg-yellow-600'];

export const OrderFormIntro = () => {
  return (
    <section className="flex items-center justify-center gap-6">
      <div className="max-sm:hidden">
        <span className="text-4xl">🏛️</span>
      </div>
    
      <div>
        <h1 className="heading text-3xl max-md:text-2xl font-bold">
          Ceramic Tile Order Form
        </h1>
        <div className="flex items-center justify-between gap-2 mt-1">
          <div className="flex gap-1">
            {leftTiles.map(bg => (
              <div key={bg} className={`w-7 h-7 ${bg}`} />
            ))}
          </div>

          <p className="heading text-lg max-md:text-sm">
            The Artisan Kiln
          </p>

          <div className="flex gap-1">
            {rightTiles.map(bg => (
              <div key={bg} className={`w-7 h-7 ${bg}`} />
            ))}
          </div>
        </div>
      </div>

      <div className="max-sm:hidden">
        <span className="text-4xl">🔥</span>
      </div>
    </section>
  );
};