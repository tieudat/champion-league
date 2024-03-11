import Image from "next/image";

const Logo = () => {
  return (
    <div className="h-full min-w-[150px] flex items-center">
      <Image src="/next.svg" alt="Logo Football" height="80" width="80" />
    </div>
  );
};

export default Logo;
