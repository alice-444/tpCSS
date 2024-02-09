import Image from "next/image";

const SideImage = () => {
  return (
    <div className="mx-4 grid grid-cols-1">
      <div className="border-2 border-black p-5 rounded-xl relative bg-gray-100">
        <div className="flex items-center justify-center">
          <Image src="/image.svg" width={175} height={175} alt="/Image" />
        </div>
      </div>
    </div>
  );
};

export default SideImage;
