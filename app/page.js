import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
          Find Your Perfect Yacht Charter
        </h1>
        <p className="text-lg md:text-2xl text-white mb-8">
          Book unforgettable yacht experiences, just like Airbnb—now on the water.
        </p>
        {/* Search Bar */}
        <form
          className="flex flex-col md:flex-row gap-2 justify-center items-center max-w-2xl mx-auto bg-white bg-opacity-90 rounded-lg shadow p-4"
          aria-label="Yacht search"
        >
          <input
            type="text"
            placeholder="Location"
            className="w-full md:w-1/3 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Location"
          />
          <input
            type="date"
            className="w-full md:w-1/3 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Date"
          />
          <input
            type="number"
            min="1"
            placeholder="Guests"
            className="w-full md:w-1/3 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Guests"
          />
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Search
          </button>
        </form>
      </section>

      {/* Featured Yachts */}
      <section className="w-full max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Featured Yachts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Yacht Card */}
          <YachtCard
            name="Sunseeker Predator 60"
            location="Miami Beach, FL"
            price={2200}
            guests={12}
            image="/sample-yacht-1.jpg"
            accessible
          />
          <YachtCard
            name="Azimut 70"
            location="Key Biscayne, FL"
            price={3100}
            guests={14}
            image="/sample-yacht-2.jpg"
          />
          <YachtCard
            name="Princess V55"
            location="Fort Lauderdale, FL"
            price={1850}
            guests={10}
            image="/sample-yacht-3.jpg"
          />
        </div>
      </section>
    </main>
  );
}

// Accessible Yacht Card Component
function YachtCard({
  name,
  location,
  price,
  guests,
  image,
  accessible = false,
}: {
  name: string;
  location: string;
  price: number;
  guests: number;
  image: string;
  accessible?: boolean;
}) {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full" tabIndex={0} aria-label={name}>
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex-1 flex flex-col p-4">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-gray-500 mb-1">{location}</p>
        <p className="text-gray-700 mb-2">${price} / day • {guests} guests</p>
        {accessible && (
          <span className="inline-block bg-green-100 text-green-700 px-2 py-1 text-xs rounded mb-2" aria-label="Accessible yacht">
            Accessible
          </span>
        )}
        <button className="mt-auto w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
          View Details
        </button>
      </div>
    </article>
  );
}
