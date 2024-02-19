export default function MailFly() {
  return (
    <span className="fixed -rotate-90 bottom-40 -left-48 px-2 md:-left-40 flex gap-10 items-center transition hover:-translate-y-6 duration-500">
      <div className="w-32 h-0.5 bg-light-primary-l dark:bg-dark-primary-l"></div>
      <a
        href="mailto:mohamedadelelbeak@gmail.com"
        className="text-base text-light-primary-r dark:text-dark-primary-r hover:text-dark-primary-r font-mono font-semibold"
      >
        MohamedAdelElbeak@gmail.com
      </a>
    </span>
  );
}
