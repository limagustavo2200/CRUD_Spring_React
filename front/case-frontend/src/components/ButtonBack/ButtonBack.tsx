import styles from './ButtonBack.module.css';

const useScrollToTop = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return scrollToTop;
  };
  
  const BackToTopButton = () => {
    const scrollToTop = useScrollToTop(); 
    return (
      <button
        className={styles.backToTopButton}
        onClick={scrollToTop} 
        aria-label="Voltar ao topo" 
      >
        ↑
      </button>
    );
  };
  
  export default BackToTopButton;