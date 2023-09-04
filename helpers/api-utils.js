export async function getAllEvents() {
    const response = await fetch('https://next-05-4f70a-default-rtdb.firebaseio.com/events.json');
    const data = await response.json();
    const events = []
    for (const key in data) {
        events.push({
            id : key,
            ...data[key]
        })
    
    }
    
    return events
}
export async function getFeaturedEvents() {
    const AllEvents = await getAllEvents()
    return AllEvents.filter((event) => event.isFeatured);
  }
export async function getEventById(id) {
    const AllEvents = await getAllEvents()
    return AllEvents.find((event) => event.id === id);
  }

export async function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
    const AllEvents = await getAllEvents()
    let filteredEvents = AllEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }