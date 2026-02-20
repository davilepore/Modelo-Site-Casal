import Navbar from "@/_components/_ui/Navbar";
import Firstscreen from "@/_components/Firstscreen";
import Momentsscreen from "@/_components/Momentsscreen";
import Timescreen from "@/_components/Timescreen";

export default function Home() {
  return (
    <div>
      <Navbar />

      <Firstscreen />

      <Timescreen />

      <Momentsscreen />
    </div>
  );
}
