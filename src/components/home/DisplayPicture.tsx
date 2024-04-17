import React from 'react';
import Image from 'next/image'
import styles from './styles/DisplayPicture.module.scss';

export default function DisplayPicture() {
  return (
    <div className={styles.displayPictureWrapper}>
      <div className={styles.displayImage}>
        <Image
          src="https://res.cloudinary.com/dtqxwjmwn/image/upload/v1702287653/sudippau/IMG_20221027_142854.jpg"
          alt="Sudip Paudel"
          width={450}
          height={450}
        />
      </div>
    </div>
  )
}
