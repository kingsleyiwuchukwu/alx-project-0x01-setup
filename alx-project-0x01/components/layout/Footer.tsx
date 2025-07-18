const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 text-center py-4">
      <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
    </footer>
  );
};

export default Footer;