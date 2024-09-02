import CustomSwiper from "./components/CustomSwiper";

export default function Home() {
  return (
    <main>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Stay Ahead of the Game with Our Soccer Calendar!</h1>
            <p className="py-6">
              Never miss a match again with our intuitive and comprehensive soccer calendar. 
              Whether you're a player, coach, or fan, our platform delivers real-time updates, 
              detailed game schedules, and seamless integration with your favorite teams.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <CustomSwiper />
      <div className="divider bg-base-200"></div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold">Stay Connected with Your Favorite Teams</h2>
            <p className="py-6">
              Our platform makes it easy to follow your favorite teams. 
              Get real-time updates on match schedules, player stats, and team news. 
              Never miss a beat with our comprehensive soccer calendar.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>

    </main>
  );
}
