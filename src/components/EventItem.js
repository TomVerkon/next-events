import Link from "next/link";
import classes from './EventItem.module.css';


function EventItem(props) {
  const { id, title, location, date, image } = props.event;
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: "long",
    year: "numeric"
  });

  const formattedAddress = location.replace(', ', '\n');

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={`/events/${id}`}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;