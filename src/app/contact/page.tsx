import { Button, Input, Textarea, Image } from "@nextui-org/react";

export default function Contact() {
  return (
    <section className="h-screen flex items-center justify-center text-white w-full">
      <div className="grid grid-cols-2 gap-32 w-full flex items-center text-center max-w-[1024px]">
        <div className="col-span-1">
          <div className="w-full text-start pb-6">
            <h1 className="text-3xl font-bold pb-2">Contact Us</h1>
            <p className="text-sm">Email, call or completed the form to learn how Snappy can solve your message problem.</p>
          </div>
          <div className="grid gap-3">
            <Input
              isRequired
              type="email"
              label="Email"
              className="max-w-full"
              radius="sm"
            />
            <Input
              type="number"
              label="Phone Number"
              className="max-w-full"
              radius="sm"
            />
            <Textarea
              radius="sm"
              isRequired
              label="Write something"
              className="max-w-full"
            />
            <Button radius="sm" type="submit" size="lg" variant="shadow" color="secondary">Submit</Button>
          </div>
        </div>
        <div className="h-full flex items-end justify-end">
          <Image isBlurred src="/images/programmer.png" className="h-96" />
        </div>
      </div>
    </section>
  );
}
