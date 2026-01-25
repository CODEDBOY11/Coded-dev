import Container from "./Container";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur border-b border-white/10">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <span className="text-lg font-bold tracking-tight">
            CODED<span className="text-accent">_DEV</span>
          </span>

          <nav className="hidden md:flex gap-8 text-sm text-white/70">
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
