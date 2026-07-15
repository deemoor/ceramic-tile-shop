import { cn } from "@/shared/lib/cn";
import Image from "next/image";

type Props = {
  src: string;
  alt?: string;
  size: number;
  withBorder?: boolean;
};

export const Icon = ({ src, alt, size, withBorder = false }: Props) => (
  <Image
    src={src}
    alt={alt ?? 'icon'}
    width={size}
    height={size}
    className={cn(
      "h-full w-full object-cover",
      withBorder && "border-2 border-black rounded-1"
    )}
  />
);