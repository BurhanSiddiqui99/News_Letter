// This code is for getServerSideProps

// import { useRouter } from "next/router"
// import { getFilteredEvents } from "../../helpers/api-utils";
// import EventList from "../../components/events/event-list";
// import ResultsTitle from "../../components/results-title/results-title";
// import { Fragment } from "react";
// import Button from "../../components/ui/button";
// import ErrorAlert from "../../components/error-alert/error-alert";
// export default function FilteredEventsPage(props) {
//     const router = useRouter();
//     if (props.hasError) {
//         return <Fragment>
//             <ErrorAlert>
//             <p>Invalid Filter. Please provide valid values</p>
//             </ErrorAlert>
//             <div className="center">
//             <Button link="/events">Show All Events</Button></div>
//         </Fragment>
//     }
//     const filteredEvents = props.events
//     if (!filteredEvents || filteredEvents.length === 0) {
//         return <Fragment>
//             <ErrorAlert>
//             <p>No Events found for the choosen filtered</p>
//             </ErrorAlert>
//             <div className="center">
//             <Button link="/events">Show All Events</Button>
//             </div>
//         </Fragment>
//     }
//     const date = new Date(props.date.year, props.date.month - 1);
//     return (
//         <Fragment>
//             <ResultsTitle date={date} />
//             <EventList items={filteredEvents} />
//         </Fragment>
//     )
// }

// export async function getServerSideProps(context) {
//     const { params } = context;
//     const filterData = params.slug;
//     const filteredYear = filterData[0];
//     const filteredMonth = filterData[1];
//     const numYear = +filteredYear;
//     const numMonth = +filteredMonth;
//     if (isNaN(numYear) ||
//     isNaN(numMonth) ||
//     numYear > 2030 ||
//     numYear < 2021 ||
//     numMonth > 12 ||
//     numMonth < 1) {
//         return {
//             props : {hasError : true}
//         }
//     }
//     const filteredEvents = await getFilteredEvents({
//         year:numYear,
//         month:numMonth
//     });
    
//     return {
//         props : {
//             events : filteredEvents,
//             date : { 
//                 year : numYear,
//                 month : numMonth
//             }
//         }
//     }
// }