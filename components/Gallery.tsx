import {
  AnimatePresence,
  motion,
} from "motion/react";
import { useState } from "react";

export interface IItem {
  src:  string,
  alt:  string,
  type: IGalleryType,
}

export enum IGalleryType {
  image = "image",
  video = "video"
}

export default function Gallery({ items, orientation }: { items: IItem[], orientation: "portrait" | "landscape", }) {
  const [ modal, setModal ] = useState<number | undefined>();

  function getElementItem(item: IItem) {
    switch (item.type) {
      case IGalleryType.image:
        return (
          <img
            src={ item.src }
            className={ `w-auto h-auto max-w-[80vw] ${orientation == "landscape" ? "lg:max-w-[45rem]" : "lg:max-w-[15rem]"} rounded-lg pointer-events-none` }
            width={ orientation == "landscape" ? 770 : 250 }
            height={ orientation == "landscape" ? 443 : 444 }
            style={{ objectFit: "contain" }}
            alt={ item.alt }
          />
        );

      case IGalleryType.video:
        return (
          <iframe
            className="rounded-lg w-[770px] h-[405px] max-h-full max-w-[45rem] pointer-events-none"
            src={ `https://www.youtube-nocookie.com/embed/${item.src}` }
            title="YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        );
    }
  }

  function getModalElement(item: IItem) {

    return (
      <motion.div
        className={ "relative flex mx-auto }" }
        layoutId={ item.src.toString() }
      >
        {
          item.type == IGalleryType.image ?
          <img
            className="rounded-2xl max-h-[80vh] drop-shadow-2xl"
            style={{ objectFit: "contain" }}
            src={ item.src }
            alt={ item.alt }
          /> :
          item.type == IGalleryType.video ?
            <iframe
              className="rounded-2xl w-[80vw] h-[30vh] md:w-[80vw] md:h-[40vh] lg:w-[80vw] lg:h-[70vh] drop-shadow-2xl"
              src={ `https://www.youtube-nocookie.com/embed/${item.src}` }
              title="YouTube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            : <></>
        }
      </motion.div>
    );
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
              className="z-10 fixed top-0 left-0 flex w-screen h-screen bg-black/5 backdrop-blur"
            />
            <motion.div
              className="fixed z-20 top-0 left-0 flex w-screen h-screen"
            >
              <motion.div className="flex flex-col m-auto gap-4 text-cocoa">
                <motion.button
                  className="mx-auto px-8 py-2 bg-dayker-dark rounded-full text-white cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={ () => setModal(undefined) }
                >
                  Close
                </motion.button>
                { getModalElement(items[modal]) }
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
                  className={ `flex-shrink-0 ${idx == 0 ? "pl-6" : idx == items.length - 1 ? "pr-6" : ""} mx-auto drop-shadow-md cursor-pointer` }
                  onPointerUp={ () => { setModal(idx); } }
                  layoutId={ item.src.toString() }
                  whileHover={{ scale: 1.05 }}
                  key={ idx }
                >
                  { getElementItem(item) }
                </motion.div>
              );
            })
          }
        </div>
      </div>
    </>
  );
}
