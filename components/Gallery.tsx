"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {ReactNode, useState} from "react";

export interface IItem {
  src: string, 
  alt: string, 
  type: IGalleryType
}

export enum IGalleryType {
  image = "image",
  video = "video"
}

export default function Gallery({ items, orientation } : { items: IItem[], orientation : "portrait" | "landscape" }) {
  const [ modal, setModal ] = useState<number | undefined>();
  
  function getElementItem(item: IItem) {
    switch (item.type) {
      case IGalleryType.image:
        return (
          <Image
            src={item.src}
            className={`w-auto h-auto ${orientation == "landscape" ? "max-w-[45rem]" : "max-w-[15rem]"} rounded-lg pointer-events-none`}
            width={orientation == "landscape" ? 770 : 250}
            height={orientation == "landscape" ? 443 : 444}
            style={{objectFit: "contain"}}
            alt={item.alt}
            unoptimized
          />
        )
        
      case IGalleryType.video:
        return (
          <iframe
            className="rounded-lg w-[770px] h-[405px] max-h-full max-w-[45rem] pointer-events-none"
            src={`https://www.youtube-nocookie.com/embed/${item.src}`}
            title="YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen/>
        )
    }
  }
  
  function getModalElement(item: IItem) {
    switch (item.type) {
      case IGalleryType.image:
        return (
          <Image
            className="rounded-2xl"
            fill
            style={{ objectFit: "contain" }}
            src={item.src}
            alt={item.alt}
          />
        )

      case IGalleryType.video:
        return (
          <iframe
            className="rounded-2xl w-full"
            src={`https://www.youtube-nocookie.com/embed/${item.src}`}
            title="YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen/>
        )
    }
  }

  return (
    <>
      <AnimatePresence>
        {
          modal != undefined &&
            <>
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{delay: 0.1, duration: 0.25}}
                    className="z-10 fixed top-0 left-0 flex w-screen h-screen bg-black bg-opacity-5 backdrop-blur"
                />
                <motion.div
                  className="fixed z-20 top-0 left-0 flex w-screen h-screen"
                >
                    <motion.div className="flex flex-col m-auto gap-4 text-cocoa">
                        <motion.button
                            className="mx-auto px-8 py-2 bg-dayker-dark rounded-full text-white"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setModal(undefined)}
                        >
                            Close
                        </motion.button>
                        <motion.div
                            /* There must be a better way */
                            className={`relative flex ${ orientation == "landscape" ? "min-w-[80vw] min-h-[80vh]" : "xl:min-w-[20vw] min-h-[80vh] min-w-[80vw]" }`}
                            layoutId={modal.toString()}
                        >
                          { getModalElement(items[modal]) }
                        </motion.div>
                    </motion.div>
                </motion.div>
            </>
        }
      </AnimatePresence>
      <div className="overflow-x-scroll">
        <div className="flex flex-row w-auto my-4 pb-4 gap-8 overflow-y-visible">
          {
            items.map((item, idx) => {
              return (
                <motion.div
                  className={`flex-shrink-0 ${idx == 0 ? "pl-6" : idx == items.length - 1 ? "pr-6" : ""} mx-auto drop-shadow-md cursor-pointer`}
                  onPointerUp={() => {
                    setModal(idx);
                  }}
                  layoutId={idx.toString()}
                  whileHover={{scale: 1.05}}
                  key={idx}
                >
                  { getElementItem(item) }
                </motion.div>
              )
            })
          }
        </div>
      </div>
    </>
  )
    ;
}