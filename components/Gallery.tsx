"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export interface IImage {
  src: string, 
  alt: string, 
}

export default function Gallery({ images, orientation } : { images : IImage[], orientation : "portrait" | "landscape" }) {
  const [ modal, setModal ] = useState<number | undefined>();
  const [ isDragging, setDragging ] = useState<boolean>(false);
  const [ width, setWidth ] = useState(5);

  const gallery = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    LimitScroll();
    
    window.addEventListener("resize", LimitScroll, false);

    return () => {
      window.removeEventListener("resize", LimitScroll, false);
    }
  }, [ ]);

  function LimitScroll() {
    // Workaround for scrollWidth delay value update
    // Maybe there is a better solution?
    setTimeout(() => {
      if (!gallery.current) return;
      setWidth(gallery.current?.scrollWidth - gallery.current?.offsetWidth);
    }, 500);
  }
  
  return (
    <>
      <AnimatePresence>
        {
          modal != undefined &&
            <>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.25 }}
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
                            className={`relative flex ${ orientation == "landscape" ? "min-w-[80vw] min-h-[80vh]" : "lg:min-w-[20vw] min-h-[80vh] min-w-[80vw]" }`}
                            layoutId={modal.toString()}
                        >
                            <Image
                                className="rounded-2xl"
                                fill
                                style={{ objectFit: "contain" }}
                                src={images[modal].src}
                                alt={images[modal].alt}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </>
        }
      </AnimatePresence>
      <div className="px-2 py-2" ref={gallery}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragTransition={{ bounceStiffness: 200 }}
          onDragStart={() => setDragging(true)}
          onDragEnd={() => setDragging(false)}
          dragElastic={0.5}
          className="flex flex-row gap-8"
        >
          {
            images.map((img, idx) => (
              <motion.div
                className="flex-shrink-0 drop-shadow-md cursor-pointer"
                onPointerUp={() => {
                  if (isDragging) return;
                  setModal(idx);
                }}
                layoutId={idx.toString()}
                whileHover={{ scale: 1.05 }}
                key={idx}
              >
                <Image
                  src={img.src}
                  className={`w-auto h-auto ${ orientation == "landscape" ? "max-w-[45rem]" : "max-w-[15rem]" } rounded-lg pointer-events-none`}
                  width={orientation == "landscape" ? 770 : 250}
                  height={orientation == "landscape" ? 443 : 444}
                  style={{ objectFit: "contain" }}
                  alt={img.alt}
                  unoptimized
                />
              </motion.div>
            ))
          }
        </motion.div>
      </div>
    </>
  )
    ;
}