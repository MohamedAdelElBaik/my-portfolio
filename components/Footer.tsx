import ContactLinks from './ContactLinks';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 justify-between items-center bg-green-900 bg-opacity-5 dark:bg-opacity-10 py-2 md:flex-row md:px-16 md:py-4">
      <h1 className="font-semibold text-lg">Deployed by Mohamed Adel</h1>
      <div className="flex gap-4 items-center">
        <ContactLinks />
      </div>
    </footer>
  );
}
