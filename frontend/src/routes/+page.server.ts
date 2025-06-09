import type { PageServerLoad } from "./$types";


let dummy_trips: Model.Trip[] = [
    {
        id: "1",
        name: "Trip to the mountains",
        trip_points: [
            {
                id: "1",
                name: "Start Point",
                time: "2023-10-01T10:00:00Z",
                destination_id: 1,
                status: "completed",
                destination: {
                    id: 1,
                    code: "MNT",
                    name: "Mountain Base"
                },
                created_at: "2023-09-30T12:00:00Z",
                updated_at: "2023-09-30T12:00:00Z"
            },
            {
                id: "2",
                name: "Mid Point",
                time: "2023-10-01T12:00:00Z",
                destination_id: 2,
                status: "planned",
                destination: {
                    id: 2,
                    code: "MNT2",
                    name: "Mountain Peak"
                },
                created_at: "2023-09-30T12:00:00Z",
                updated_at: "2023-09-30T12:00:00Z"
            }
        ],
        created_at: "2023-09-30T12:00:00Z",
        updated_at: "2023-09-30T12:00:00Z"
    },
    {
        id: "2",
        name: "City Tour",
        trip_points: [
            {
                id: "3",
                name: "Start City",
                time: "2023-10-02T09:00:00Z",
                destination_id: 3,
                status: "planned",
                destination: {
                    id: 3,
                    code: "CITY1",
                    name: "City Center"
                },
                created_at: "2023-09-30T12:00:00Z",
                updated_at: "2023-09-30T12:00:00Z"
            }
        ],
        created_at: "2023-09-30T12:00:00Z",
        updated_at: "2023-09-30T12:00:00Z"
    },
    {
        id: "3",
        name: "Beach Vacation",
        trip_points: [
            {
                id: "4",
                name: "Beach Start",
                time: "2023-10-03T08:00:00Z",
                destination_id: 4,
                status: "planned",
                destination: {
                    id: 4,
                    code: "BEACH1",
                    name: "Sunny Beach"
                },
                created_at: "2023-09-30T12:00:00Z",
                updated_at: "2023-09-30T12:00:00Z"
            }
        ],
        created_at: "2023-09-30T12:00:00Z",
        updated_at: "2023-09-30T12:00:00Z"
    }
];

export let load: PageServerLoad = async () => {

    return {
        trips: dummy_trips
    };
}