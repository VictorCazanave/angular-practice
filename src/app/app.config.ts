import { Injectable } from '@angular/core';

// This is a very basic implementation.
// TIPS: Can be improved with multi-environment config.
// https://gist.github.com/fernandohu/122e88c3bcd210bbe41c608c36306db9
@Injectable()
export class AppConfig {

	// TIPS: Hide API keys on GitHub
	// https://gist.github.com/aloisdg/38a6a09b614d8455b6d1e685a77a5eba
	readonly IGBD_API_KEY = 'Write here your IGBD API key';
};
