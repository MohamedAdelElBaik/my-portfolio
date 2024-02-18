export default function Skill({ children }: { children: string }) {
  return (
    <span className="text-sm bg-dark-secondary-l text-dark-secondary-r  justify-self-start rounded-lg px-3 py-1 font-semibold">
      {children}
    </span>
  );
}
