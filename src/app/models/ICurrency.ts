export interface ICurrency {
	result: 'success' | 'error'
	base_code: string
	"conversion_rates": Record<string, number>
	"time_last_update_utc": string

	// not needed but exists
	"documentation": string,
	"terms_of_use": string,
	"time_last_update_unix": number,
	"time_next_update_unix": number,
	"time_next_update_utc": string,
}
