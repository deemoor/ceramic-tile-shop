import { tiles } from "@/entities/tile";
import { PaletteTile } from "@/features/tile-drag-and-drop";

export const DesignPalette = () => {
  return (
    <aside className="border-l-2 border-text bg-surface">
      <h2 className="border-b-2 border-text px-2 py-2 text-center">
        Design Palette
      </h2>

      <div className="grid grid-cols-2 gap-2 p-2">
        {tiles.map((tile) => (
          <PaletteTile
            key={tile.id}
            tile={tile}
          />
        ))}
      </div>
    </aside>
  );
};