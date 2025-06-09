// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	namespace Model {
		type TripStatus = 'planned' | 'accepted' | 'in_progress' | 'completed' | 'canceled';
		interface TimeStamp {
			created_at?: string
			updated_at?: string
		}
		interface Destination extends TimeStamp {
			id: number
			code: string
			name: string
			
		}
		interface TripPoint extends TimeStamp {
			name: string
			time: string
			destination_id: number
			destination?: Destination
			status: TripStatus
			id: string
		}
		interface Trip extends TimeStamp {
			id: string
			name: string
			trip_points: TripPoint[]
			
		}
	}
}

export {};
