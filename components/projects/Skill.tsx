export default function Skill({ children }: { children: string }) {
  return (
    <span className="text-xs bg-dark-secondary-l text-dark-secondary-r  justify-self-start rounded-lg w-full text-center py-1 font-medium">
      {children}
    </span>
  );
}
