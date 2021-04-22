import React from 'react';
import styles from './DescriptionContainer.module.css';
import { DescriptionContainerType } from './DescriptionContainer.type';

const DescriptionContainer: React.FC<DescriptionContainerType> = () => (
  <div className={styles.DescriptionContainer} data-testid="DescriptionContainer">
    DescriptionContainer Component
  </div>
);

export default DescriptionContainer;
