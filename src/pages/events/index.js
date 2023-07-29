import EventList from "@/components/EventList";
import { getAllEvents } from "../../../dummy-data";

function EventsPage() {
  const allEvents = getAllEvents();

  return (
    <div>
      <h1>All Events</h1>
      <div>
        <EventList events={allEvents} />
      </div>
    </div>
  );

}

export default EventsPage;