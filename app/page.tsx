import Image from "next/image";
import Link from "next/link";
import Logo from '../assets/logo.svg';
import LandingImg from '../assets/main.svg';
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <header className='max-w-6xl mx-auto px-4 sm:px-8 py-6'>
        <Image src={Logo} alt="logo"/>
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-col-[1fr,400px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            job <span className="text-primary">tracking</span> app
          </h1>
          <p className="leading-loose max-w-md mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident suscipit placeat ipsam mollitia tenetur neque ad dicta, officia magni itaque tempora eos asperiores sint rem, explicabo quos at veniam aspernatur.
          </p>
          <Button asChild className="mt-4">
            <Link href='/dashboard/add-job'>
              Get Started
            </Link>
          </Button>
        </div>
        <Image 
          src={LandingImg} 
          alt='landing'
          className="hidden lg:block"
        />
      </section>
    </main>
  );
}