import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

type ColumnProps = {
  title: string;
  links: Array<string>;
};

const FooterColum = ({ title, links }: ColumnProps) => (
  <div className="footer_columm">
    <h4 className="font-semibold mb-5">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image
            src="/logo-purple.svg"
            alt="Flexibble"
            width={115}
            height={38}
          />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Flexibble is a showcase platform for designers, developers, and
            makers to share their work and discover the latest work.
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-12">
          {footerLinks.map((column) => (
            <FooterColum
              key={column.title}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>
      </div>
      <div className="flexBetween footer_copyright">
        <p>© 2023 Flexibble. All rights reserved. Made with ❤️ in Pakistan.</p>
        <p className="text-gray ">
          <span className="text-black font-semibold">10,000 +</span>
          projects shared
        </p>
      </div>
    </footer>
  );
};

export default Footer;
