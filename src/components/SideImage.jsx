import Image from "next/image";

const SideImage = () => {
  return (
    <div className="mx-4 grid grid-cols-1">
      <div>
        <div className="group block overflow-hidden border border-accent border-opacity-10 rounded-xl bg-gray-100">
          <div className="border-2 border-black border-opacity-20 p-4">
            <p className="flex items-center justify-center">
              <Image src="/image.svg" width={150} height={150} alt="/Image" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideImage;
