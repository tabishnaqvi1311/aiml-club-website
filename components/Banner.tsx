type BannerProps = {
  title: string,
  subtitle: string
}

const Banner = ({ title, subtitle }: BannerProps) => {
  return (
    <div className="flex justify-center items-center flex-col w-full h-[66vh] banner text-white text-center absolute top-0 -z-10">
      <div className="bg-[#0d2345] opacity-80 h-full z-10 relative w-full xl:pt-80 lg:pt-60 pt-40 px-10 flex justify-center">
        <div className="md:w-1/2">
          <h1 className="md:text-6xl text-4xl font-extrabold tracking-wide mb-4 uppercase">{title}</h1>
          <span className="md:text-xl text-base ">{subtitle}</span>
        </div>
      </div>
    </div>
  )
}

export default Banner;
