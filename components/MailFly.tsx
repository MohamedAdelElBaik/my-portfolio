export default function MailFly() {
  return (
    <span className="fixed -rotate-90 bottom-40 -left-48 px-2 md:-left-40 flex gap-10 items-center transition hover:-translate-y-6 duration-500">
      <div className="w-32 h-0.5 bg-primary/50"></div>
      <a
        href="mailto:mohamedadelelbeak@gmail.com"
        className="text-base text-primary dark:text-primary hover:text-primary font-mono font-semibold"
      >
        MohamedAdelElbeak@gmail.com
      </a>
    </span>
  );
}
