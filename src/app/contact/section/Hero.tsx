const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="relative flex h-full min-h-[600px] w-full flex-col items-center justify-center gap-[1.38rem] pt-10 text-[1.5rem] leading-[110%] md:pt-16"
      style={{
        background:
          'linear-gradient(170deg, rgba(0, 0, 0, 0.00) 7.51%, rgba(0, 0, 0, 0.80) 92.93%), url(/images/contact/1.webp) center / cover no-repeat',
      }}
    >
      <div className="absolute inset-0 z-0 bg-black/50" />
      <h1 className="font-barlow z-40 w-full text-center text-4xl leading-[80%] text-[#fff] uppercase md:text-[4.75rem]">
        Contact
      </h1>
    </section>
  );
};

export default Hero;
