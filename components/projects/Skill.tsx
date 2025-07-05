export default function Skill({ children }: { children: string }) {
  return (
    <span className="text-xs bg-secondary/50 text-secondary  justify-self-start rounded-lg w-full text-center py-1 font-medium">
      {children}
    </span>
  );
}
