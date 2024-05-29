"use client";

export default function Home() {
  return (
    <section className="h-screen flex items-center justify-center text-white w-full">
      <div className="grid grid-cols-2 gap-32 w-full h-full flex items-end text-center max-w-[1024px]">
        <div className="h-full flex items-center">
          <div> 
            <span>HI, I'M LAY</span>
            <div>I'M A FULLSTACK DELEVELOPER</div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="h-[540px] w-[460px] bg-red-800"></div>
          {/* <Image isBlurred src="./images/banner.png" /> */}
          {/* <div className="flex items-center space-x-1">
            <span>Hello! I'm</span>
            <span className="font-semibold">VANN Soklay</span>
            <Button isIconOnly variant="flat" radius="full" className="bg-transparent mt-0.5">
              <Icon fontSize={18} icon="material-symbols:brand-awareness-rounded" />
            </Button>
          </div>
          <label>I'm software engeneer.</label>
          <div className="flex w-full gap-2 mt-2">
            <Chip size="sm">Rust Programming</Chip>
            <Chip size="sm">Typescript & Javascrpt</Chip>
          </div>
          <div className="flex w-full gap-2 mt-2">
            <Chip size="sm">MongoDB</Chip>
            <Chip size="sm">Actix Web</Chip>
            <Chip size="sm">Node Express</Chip>
          </div>
          <div className="mt-2">
            <Chip size="sm">React and Next 14</Chip>
          </div> */}
        </div>
      </div>
    </section>
  );
}
