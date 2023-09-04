import EventList from "../components/events/event-list";
import NewsletterRegistration from "../components/input/newsletter-registration";
import Head from "next/head";
import {getFeaturedEvents} from '../helpers/api-utils';
export default function HomePage(props) {
        return (
        <div>
            <Head>
                <title>Next Js Events</title>
                <meta 
                name="description"
                content="Find a lot of great events that allow you too evolve...."
                />
            </Head>
            <NewsletterRegistration />
            <EventList items={props.events} />
        </div>
    )

}

export async function getStaticProps() {
    const featuredEvent = await getFeaturedEvents()
    return {
        props : {
            events: featuredEvent
        },
        revalidate : 1800
    }
}