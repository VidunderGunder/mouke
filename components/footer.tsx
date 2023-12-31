import Container from "./container";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <span>
            <h5>brought to you by</h5>
            <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
              <Link href="/" className="hover:underline">
                MOUKE Magazines
              </Link>
            </h3>
          </span>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            {/* <span className="mx-3 font-bold">
              <Link href="/" className="hover:underline">
                back to MOUKE
              </Link>
              .
            </span> */}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
