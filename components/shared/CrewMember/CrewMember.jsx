import React from 'react';
import styles from './CrewMember.module.css';

function CrewMember({ data, onDelete, id }) {
  return (
    <div className={styles.crewMemberContainer}>
      <h1 onClick={() => onDelete(id)}>X</h1>
      <h2>Name: {data.name}</h2>
      <h2>Nickname: {data.nickname}</h2>
      <h2>Email: {data.email}</h2>
    </div>
  );
}

export default CrewMember;
