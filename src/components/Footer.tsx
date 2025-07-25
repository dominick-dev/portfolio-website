function Footer() {
  return (
    <footer className="pt-10 pb-60 text-sm text-muted-foreground">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* copyright (left) */}
        <span> {new Date().getFullYear()} © Dominick DeVincenzo</span>

        {/* socials (middle) */}

        {/* toggle light/dark mode (right) */}
      </div>
    </footer>
  );
}

export default Footer;
