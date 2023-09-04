import { Fragment } from "react";
import EventSearch from "../../components/event-detail/event-search";
import EventList from "../../components/events/event-list"
import { getAllEvents } from "../../helpers/api-utils"
import { useRouter } from "next/router";
import Head from "next/head";
export default function AllEventsPage(props) {
    const router = useRouter();
    const {events} = props;
    
    function findEventHandler(year, month) {
        const fullpath =  `events/${year}/${month}`;
        router.push(fullpath)
    }
    return (
        <Fragment>
            <Head>
                <title>All Events</title>
                <meta 
                name="description"
                content="Find a lot of great events that allow you too evolve...."
                />
            </Head>
            <EventSearch onSearch={findEventHandler} />
            <EventList items={events} />
        </Fragment>
    )
}

export async function getStaticProps() {
    const events = await getAllEvents()
    return {
        props : {
            events : events
        },
        revalidate: 60
    }
}