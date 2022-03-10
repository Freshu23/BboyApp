import React from 'react';
import { useState } from 'react';
import Chip from '../Chip/Chip';
import styles from './RegisterEventForm.module.css';
import BboyInfoForm from '../BboyInfoForm/BboyInfoForm';
import TextField from '@mui/material/TextField';
import Button from '../Button/Button';
import CrewMember from '../CrewMember/CrewMember';

const RegisterEventForm = ({ event }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [form1v1, setForm1v1] = useState({});
  const [form2v2, setForm2v2] = useState({});
  const [formCrewBattle, setFormCrewBattle] = useState({});
  const [crewMember, setCrewMember] = useState([]);
  const [crewMembers, setCrewMembers] = useState([]);
  const handleChipClick = value => {
    selectedCategories.includes(value)
      ? setSelectedCategories(selectedCategories.filter(val => val !== value))
      : setSelectedCategories([...selectedCategories, value]);
  };

  const handleForms = category => {
    switch (category) {
      case '1v1':
        return <BboyInfoForm title={'1v1 registration'} />;
      case 'Top rock':
        return <BboyInfoForm title={'Top rock registration'} />;
      case '2v2':
        return (
          <div style={{ display: 'flex', width: '100%' }}>
            <BboyInfoForm title={'2v2 First person'} />
            <BboyInfoForm title={'2v2 Second person'} />
          </div>
        );
      case 'Crew battle':
        return (
          <div style={{ padding: 15 }}>
            <h2>Crew battle registration</h2>
            <BboyInfoForm onChange={handleCrewMember} />
            <Button
              onClick={() =>
                setCrewMembers([
                  ...crewMembers,
                  { ...crewMember, id: Math.random() },
                ])
              }
              text={'Add crew member'}
            />
            <div className={styles.membersContainer}>
              {crewMembers.map(member => (
                <CrewMember
                  data={member}
                  key={Math.random()}
                  id={member.id}
                  onDelete={deleteMember}
                />
              ))}
            </div>
          </div>
        );
    }
  };
  const deleteMember = id => {
    console.log(id);
    setCrewMembers(crewMembers.filter(member => member.id != id));
  };
  const handleCrewMember = e => {
    setCrewMember(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={styles.formContainer}>
      <h1>Register</h1>
      <h2 style={{ textAlign: 'center' }}>
        Choose categories you want to register for
      </h2>
      <div className={styles.categoriesContainer}>
        {event.categories.map(category => (
          <Chip
            onClick={() => handleChipClick(category)}
            key={Math.random()}
            value={category}
            isActive={selectedCategories.includes(category)}
          />
        ))}
      </div>
      <div className={styles.formWrapper}>
        {selectedCategories.map(category => handleForms(category))}
      </div>
      {selectedCategories.length > 0 ? (
        <Button
          style={{ width: '40%', fontSize: '17px', marginBottom: '25px' }}
          text={'Register'}
        />
      ) : null}
    </div>
  );
};

export default RegisterEventForm;
