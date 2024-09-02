import Navbar from "./components/Navbar";
import CustomSwiper from "./components/CustomSwiper";

export default function Home() {
  return (
    <main>
      <Navbar />
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
      
    </main>
  );
}
