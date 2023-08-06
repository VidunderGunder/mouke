import { CMS_NAME } from "../lib/constants";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:items-end md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none md:pr-8 mb-0 pb-0">
        MOUKE.
      </h1>

      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 mb-0 pb-0 leading-10">
        Fashion-Forward Feathers Flaunts Together{" "}
      </h4>
    </section>
  );
};

export default Intro;
