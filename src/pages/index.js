import EventList from "@/components/EventList";
import { getFeaturedEvents } from "../../dummy-data";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>Featured Events</h1>
      <div>
        <EventList events={featuredEvents} />
      </div>
    </div>
  );
}

export default HomePage;