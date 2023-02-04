import { useEffect, useMemo, useState, useCallback } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import Image from "next/image";
import { AnimatePresence, motion, Reorder } from "framer-motion";

type Photos = {
  src: string;
  alt: string;
};

type ProductPhotoViewer = {
  photos: Photos[];
};

export const ProductPhotoViewer = (props: ProductPhotoViewer) => {
  const [photos, setPhotos] = useState<Photos[]>(props.photos);
  const [currentPhoto, setCurrentPhoto] = useState<Photos>(props.photos[0]);

  useEffect(() => {
    setPhotos(props.photos.slice(1, props.photos.length));
    setCurrentPhoto(props.photos[0]);
  }, [props.photos]);

  const handleClick = (selectedPhoto: Photos) => {
    setPhotos((ph) => [...ph, currentPhoto]);
    setPhotos((ph) => ph.filter((item) => item.alt !== selectedPhoto.alt));
    setCurrentPhoto(selectedPhoto);
  };

  return (
    <div className={st.product_viewer_wrap}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={st.product_viewer_main_wrapper}
      >
        <Image
          src={currentPhoto.src}
          alt={currentPhoto.alt}
          width={1920}
          height={1080}
          className={st.photo}
        />
      </motion.div>
      <div className={st.product_viewer_other_wrapper}>
        <Reorder.Group
          as="ul"
          className={st.other_list}
          onReorder={setPhotos}
          values={photos}
        >
          <AnimatePresence mode="popLayout">
            {photos.map((item, idx) => (
              <Reorder.Item
                initial={{ opacity: 0, scale: 0 }}
                exit={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.25, 0.5, 0.75, 1],
                  scale: 1,
                }}
                transition={{ duration: 0.32 }}
                viewport={{ once: true }}
                onClick={() => handleClick(item)}
                className={st.other_item}
                value={item}
                key={item.alt}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={400}
                  className={st.photo}
                />
              </Reorder.Item>
            ))}
          </AnimatePresence>
        </Reorder.Group>
      </div>
    </div>
  );
};
