import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex justify-between">
      <h1>Mohamed Adel</h1>

      <div className="flex gap-6">
        <ul className="flex gap-2">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
        </ul>
        <button className="bg-dark-primary">
          <Image
            alt="dark mode toggle"
            src="./dark.svg"
            width="40"
            height="40"
          />
        </button>
      </div>
    </nav>
  );
}
