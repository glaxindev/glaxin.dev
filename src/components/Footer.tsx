const Footer = () => {
  return (
    <footer className="py-8 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-md font-normal self-stretch text-zinc-400 dark:text-zinc-500">
          Copyright © {new Date().getFullYear()} Glaxin Dev
          <br />
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
