


import styles from './Navbar.module.css';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Button from '../Button/Button';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <Logo />
      <Search  placeholder="Search a album of your choice"/>
      <Button>Give Feedback</Button>
    </header>
  );
};

export default Navbar;

