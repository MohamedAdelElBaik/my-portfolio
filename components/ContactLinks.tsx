import GitHubIcon from './svg/GitHubIcon';
import LinkIcon from './svg/LinkIcon';
import MailIcon from './svg/MailIcon';
import TwitterIcon from './svg/TwitterIcon';

export default function ContactLinks() {
  return (
    <>
      <a href="" className="hover:scale-110 transition-transform duration-200">
        <GitHubIcon />
      </a>
      <a href="" className="hover:scale-110 transition-transform duration-200">
        <LinkIcon />
      </a>
      <a href="" className="hover:scale-110 transition-transform duration-200">
        <MailIcon />
      </a>
      <a href="" className="hover:scale-110 transition-transform duration-200">
        <TwitterIcon />
      </a>
    </>
  );
}
