/*This is a code snippet in React that defines a functional component called TimeAgo. The
purpose of this component is to display the time elapsed since a given timestamp 
in a human-readable format.

The component uses the parseISO and formatDistanceToNow functions from the date-fns 
library to parse the timestamp and format the time elapsed as a string like
"3 hours ago" or "just now".

Here's how the code works:
The TimeAgo function takes an object called props as its argument. This object
contains a timestamp property, which represents the time to be displayed.
Inside the function, a variable called timeAgo is initialized as an empty string.
If the timestamp property exists, it is first parsed using the parseISO function 
from date-fns.'

This converts the timestamp from an ISO string to a JavaScript Date object.
The formatDistanceToNow function is then used to format the time elapsed since the
timestamp as a human-readable string. This function takes a Date object as its 
argument and returns a string like "3 hours ago" or "just now".

The timeAgo variable is then set to the formatted time elapsed plus the
word "ago".
Finally, the component returns a span element with the title attribute 
set to the original timestamp, and the formatted time elapsed
displayed as italic text.
By using this TimeAgo component, you can easily display the time
elapsed since a given timestamp in a user-friendly way, which can 
be useful in various contexts such as social media feeds, 
comment sections, or notifications.
*/
import { parseISO, formatDistanceToNow } from 'date-fns';

const TimeAgo = ({ timestamp }) => {
    let timeAgo = ''
    if (timestamp) {
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }

    return (
        <span title={timestamp}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    )
}
export default TimeAgo