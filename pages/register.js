import styles from "../styles/Register.module.css";
import { useState } from "react";
import SharedForm from "../components/shared/SharedForm/SharedForm";
import UserRoleCard from "../components/Register/UserRoleCard/UserRoleCard";
import Image from "next/image";
import { Calendar, ArrowLeft } from "react-feather";
import Link from "next/link";
import Button from "../components/shared/Button/Button";
import BackArrow from "../components/shared/BackArrow/BackArrow";

export default function Register() {
  const [registerStep, setRegisterStep] = useState(1);
  const [registerType, setRegisterType] = useState("");
  return (
    <>
      {registerStep === 1 ? (
        <div className={styles.firstStepContainer}>
          <Link passHref href="/login">
            <ArrowLeft className={styles.backArrow} />
          </Link>
          <h3>BBOYAPP</h3>
          <h1>How are you planning to use BboyApp?</h1>
          <div className={styles.cardsContainer}>
            <UserRoleCard
              onClick={() => setRegisterType("dancer")}
              checked={registerType === "dancer"}
              icon={
                <Image
                  width={50}
                  height={50}
                  alt="bboy"
                  src={"/icons/Bboy.svg"}
                />
              }
              title="I'm a dancer"
              subtitle="Looking for some dope events"
            />
            <UserRoleCard
              onClick={() => setRegisterType("organizer")}
              checked={registerType === "organizer"}
              icon={<Calendar width={50} height={50} />}
              title="I'm an event organizer"
              subtitle="Planning to create an unique event"
            />
          </div>
          <Button
            onClick={() => setRegisterStep(2)}
            style={{ width: 200, marginTop: 50 }}
            text="Next"
          />
        </div>
      ) : (
        <div className={styles.secondStepContainer}>
          <ArrowLeft
            onClick={() => setRegisterStep(1)}
            className={styles.backArrow}
          />
          <div className={styles.registerLeft}>
            <SharedForm type={registerType} />
          </div>
          <div
            className={styles.registerRight}
            style={{ backgroundImage: "url(./images/register-bg.png)" }}
          ></div>
        </div>
      )}
    </>
  );
}
