import { SearchBar } from "./_components/SearchBar";
import { UserDetails } from "./_components/UserDetails";

function Home() {
  return (
    <main className="bg-[#141D2F] min-h-screen p-48">
      <div className="flex flex-col items-start w-full mb-5">
        <h1 className="text-3xl font-bold text-white">devfinder</h1>
      </div>
      <SearchBar />
      <UserDetails />
    </main>
  );
}
export default Home;
