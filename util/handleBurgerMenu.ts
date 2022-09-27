interface Props {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function handleBurgerMenu({ setMenuOpen, menuOpen }: Props) {
  setMenuOpen(!menuOpen);
  if (menuOpen) {
    document.body.style.overflow = 'visible';
  } else {
    document.body.style.overflow = 'hidden';
  }
}
