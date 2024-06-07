import { Image as ImageType } from "@/types";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import GalleryTab from "./gallery-tab";
import Image from "next/image";

interface GalleryImageProps {
  images: ImageType[];
}

const Gallery = ({ images }: GalleryImageProps) => {
  return <TabGroup as="div" className={"flex flex-col-reverse"}>
    <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
      <TabList className={"grid grid-cols-4 gap-6"}>
        {
          images.map((image)=>(
            <GalleryTab
            key={image.id}
            image={image}
            />
          ))
        }
      </TabList>
    </div>
    <TabPanels className={"aspect-square w-full"}>
        {
          images.map((image)=>(
            <TabPanel key={image.id}>
              <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                <Image
                alt="Image"
                fill
                src={image.url}
                className="object-cover object-center"
                />
              </div>
            </TabPanel>
          ))
        }
    </TabPanels>
  </TabGroup>;
};

export default Gallery;