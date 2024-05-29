import { Image } from "@nextui-org/react";

export default function About() {
    return (
        <section className="h-screen">
            <div>
                <div className="text-white/90 text-lg flex justify-center text-center pt-24">
                    Life's coding wih adventure in my dream.
                </div>
                <div className="gap-2 grid grid-cols-5 grid-rows-2 container lg:px-72 pt-8">
                    <Image isBlurred radius="none" src="/images/img-2.jpg" className="h-full w-full object-contain " />
                    <Image isBlurred radius="none" src="/images/img-1.jpg" className="h-full w-full object-contain " />
                    <Image isBlurred radius="none" src="/images/img-11.jpg" className="h-full w-full object-contain " />
                    <Image isBlurred radius="none" src="/images/img-9.jpg" className="h-full w-full object-contain " />
                    <Image isBlurred radius="none" src="/images/img-5.jpg" className="h-full w-full object-contain" />
                    <Image isBlurred radius="none" src="/images/img-10.jpg" className="h-full w-full object-contain" />
                    <Image isBlurred radius="none" src="/images/img-7.jpg" className="h-full w-full object-contain" />
                    <Image isBlurred radius="none" src="/images/img-6.jpg" className="h-full w-full object-contain" />
                </div>
            </div>
        </section>
    );
}
