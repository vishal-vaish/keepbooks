import {motion} from "framer-motion";

type Props = {
  isOpen: boolean;
  setIsOpen: (open: (prev: boolean) => boolean) => void;
  isScrolled: boolean;
}

const ToggleButton = ({setIsOpen, isOpen, isScrolled}: Props) => {
  const toggleIcon = () => {
    setIsOpen((prev) => !prev)
  }

  const iconVariants = {
    opened: {rotate: 90, scale: 1.2},
    closed: {rotate: 0, scale: 1},
  }

  const pathVariants = {
    opened: {d: 'M6 18L18 6M6 6L18 18', strokeWidth: 2},
    closed: {d: 'M4 6H20M4 12H20M4 18H20', strokeWidth: 2},
  }

  return (
    <button
      onClick={toggleIcon}
      className={`p-2 focus:outline-none focus:border-none transition-all duration-300 ${
        isScrolled
          ? "text-primary"
          : isOpen
            ? "text-primary"
            : "text-primary-foreground"
      }`}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        variants={iconVariants}
        animate={isOpen ? 'opened' : 'closed'}
        transition={{duration: 0.3, ease: 'easeInOut'}}
      >
        <motion.path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
          initial="closed"
          animate={isOpen ? 'opened' : 'closed'}
          transition={{duration: 0.3}}
        />
      </motion.svg>
    </button>
  );
};

export default ToggleButton;
