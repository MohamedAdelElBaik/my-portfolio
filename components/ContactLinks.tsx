import GitHubIcon from './svg/GitHubIcon';
import LinkIcon from './svg/LinkIcon';
import MailIcon from './svg/MailIcon';
import TwitterIcon from './svg/TwitterIcon';

export default function ContactLinks() {
  return (
    <>
      <a
        href="https://github.com/MohamedAdelElBaik"
        className="hover:scale-110 transition-transform duration-200"
      >
        <GitHubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/mohamedadelelbaik/"
        className="hover:scale-110 transition-transform duration-200"
      >
        <LinkIcon />
      </a>
      <a
        href="mailto:mohamedadelelbeak@gmail.com"
        className="hover:scale-110 transition-transform duration-200"
      >
        <MailIcon />
      </a>
      <a
        href="https://twitter.com/M_ADEL_SALEH"
        className="hover:scale-110 transition-transform duration-200"
      >
        <TwitterIcon />
      </a>
    </>
  );
}
