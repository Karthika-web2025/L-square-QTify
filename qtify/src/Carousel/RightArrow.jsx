import styles from "./Arrow.module.css";

const RightArrow = () => {
  return (
    <button className={`swiper-next ${styles.arrow}`}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M9 6l6 6-6 6" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    </button>
  );
};

export default RightArrow;
