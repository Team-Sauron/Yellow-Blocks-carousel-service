import React from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import styles from '../styles/styles.css';
import ImageEntry from './ImageEntry';

const ImageBar = ({ images, onClick }) => (
  <div className={styles.ImageHolder}>
    <button className={styles.ScrollUp} type="button">
      <FaChevronUp size="18px" />
    </button>
    {images.map((image, key) => (
      <ImageEntry
        key={key}
        number={key}
        image={image}
        onClick={(e) => onClick(e)}
      />
    ))}
    <button className={styles.ScrollDown} type="button">
      <FaChevronDown size="18px" />
    </button>
  </div>
);

export default ImageBar;
