import { cn } from "@/lib/utils";
import { Image as ImageType} from "@/types";
import { Tab } from "@headlessui/react";
import Image from "next/image";

interface GalleryTabProps {
    image:ImageType
}

const GalleryTab = ({image}:GalleryTabProps) => {
  return <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
    <div>
      <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
        <Image
          fill
          alt="Image"
          src={image.url}
          className="object-cover object-center"
        />
      </span>
      <span
        className={cn(
          "absolute inset-0 rounded-md ring-2 ring-offset-2"
        )}
      />
    </div>
</Tab>

};

export default GalleryTab;
