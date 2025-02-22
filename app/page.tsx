import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex-grow h-screen">
      <Image
        src="https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />
      <Link href={"book-now"}>
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-1 rounded-md text-sm font-semibold border-2 border-white">
          Book Now
        </button>
      </Link>
    </main>
  );
}
