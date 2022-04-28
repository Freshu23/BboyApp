import React from 'react';
import styles from './UserRoleCard.module.css';
import clsx from 'clsx';

const UserRoleCard = ({ icon, title, subtitle, checked, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={clsx({ [styles.container]: true, [styles.checked]: checked })}>
      {icon}
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </div>
  );
};

export default UserRoleCard;
