const Footer = () => {
  return (
    <footer className="py-8 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          Copyright © {new Date().getFullYear()} Hassan Tech
          <br />
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
