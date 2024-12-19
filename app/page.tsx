import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center z-10 w-full">
      <Hero/>
      <Hero2/>
    </div>
  );
}
