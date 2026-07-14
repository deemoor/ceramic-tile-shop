import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  size: number;
};

export const Icon = ({ src, alt, size }: Props) => (
  <Image
    src={src}
    alt={alt}
    width={size}
    height={size}
    className="h-full w-full object-contain"
  />
);