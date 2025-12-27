import styles from "./Arrow.module.css";

const LeftArrow = () => {
  return (
    <button className={`swiper-prev ${styles.arrow}`}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M15 6l-6 6 6 6" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    </button>
  );
};

export default LeftArrow;
