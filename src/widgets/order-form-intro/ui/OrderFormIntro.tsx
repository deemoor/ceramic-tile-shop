import { Icon } from "@/shared/ui/icon";


const leftTiles = ['/images/tile_7.png', '/images/tile_3.png', '/images/tile_5.png'];
const rightTiles = ['/images/tile_9.png', '/images/tile_8.png', '/images/tile_4.png'];

export const OrderFormIntro = () => {
  return (
    <section className="flex items-center justify-center gap-6">
      <div className="max-sm:hidden">
        <span className="text-4xl">🏛️</span>
      </div>
    
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold max-md:text-3xl max-2xs:text-2xl">
          Ceramic Tile Order Form
        </h1>
        <div className="flex items-center justify-between gap-2 mt-1">
          <div className="flex gap-1 max-2xs:hidden">
            {leftTiles.map(src => (
              <Icon src={src} size={28} withBorder />
            ))}
          </div>

          <p className="text-lg max-md:text-base">
            The Artisan Kiln
          </p>

          <div className="flex gap-1 max-2xs:hidden">
            {rightTiles.map(src => (
              <Icon src={src} size={28} withBorder />
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