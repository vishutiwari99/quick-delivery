import LandingPageIcon from "@/icons/LandingPageIcon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div className="w-[100%] ">
        <div className="bg-secondary">
          <Image
            src="/assets/landing-img.png"
            width={100}
            height={100}
            alt={"landing logo "}
            className="w-full"
          />
          {/* <LandingPageIcon /> */}
        </div>
        <div className="mx-8 mt-8 text-center">
          <h2 className="text-3xl font-bold ">
            Best Package Delivery just for you
          </h2>
          <p className="leading-7 mt-4">
            The king, seeing how much happier his subjects were, realized the
            error of his ways and repealed the joke tax.
          </p>
        </div>
        <Link href="/login" className="flex w-full px-8">
          <Button className="w-full mt-8 text-base">Get Started</Button>
        </Link>
      </div>
    </main>
  );
}
