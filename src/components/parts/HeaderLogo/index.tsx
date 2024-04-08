import Image from 'next/image';

const logoUrl = 'https://placehold.co/400x400.png';

const HeaderLogo = () => {
  return (
    <Image
      src={logoUrl}
      alt="Tengen Hekaru"
      width={100}
      height={100}
      className="object-cover rounded-full"
    />
  );
};

export default HeaderLogo;
