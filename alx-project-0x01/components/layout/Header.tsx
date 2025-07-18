import Link from 'next/link'; 

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h3 className="font-bold text-2xl">
     <Link href="/" className="no-underline ">Daily Contents</Link>
  </h3>
        <nav>
          <ul className="flex">
            <li className="hover:underline list-none">
              <Link href="/posts" className="no-underline">Posts</Link>
            </li>
            <li className="hover:underline">
              <Link href="/users" className="no-underline ">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;