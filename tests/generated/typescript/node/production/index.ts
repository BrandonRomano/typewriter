/**
 *  This client was automatically generated by Segment Typewriter. ** Do Not Edit **
 */

/**
 * Type definitions for Segment's analytics-node.
 */
export namespace Segment {
	/** A minimal interface for Segment's analytics-node. */
	export interface AnalyticsNode {
		track: (
			message: TrackMessage<Record<string, any>>,
			callback?: Callback
		) => void
	}

	/**
	 * TrackMessage represents a message payload for an analytics `.track()` call.
	 * See: https://segment.com/docs/spec/track/
	 */
	export interface TrackMessage<PropertiesType> extends Record<string, any> {
		/** The ID for this user in your database. */
		userId: string | number
		/** An ID to associated with the user when you don’t know who they are. */
		anonymousId?: string | number
		/** A dictionary of properties for the event. */
		properties?: PropertiesType
		/**
		 * A Javascript date object representing when the track took place.
		 * If the track just happened, leave it out and we’ll use the server’s
		 * time. If you’re importing data from the past make sure you to send
		 * a timestamp.
		 */
		timestamp?: Date
		/**
		 * A dictionary of extra context to attach to the call.
		 * https://segment.com/docs/spec/common/#context
		 */
		context?: Context
		/**
		 * A dictionary of destination names that the message should be sent to.
		 * By default all destinations are enabled. 'All' is a special key that
		 * applies when no key for a specific destination is found.
		 * https://segment.com/docs/spec/common/#integrations
		 */
		integrations?: {
			All?: boolean
			AppsFlyer?: {
				appsFlyerId: string
			}
			[key: string]: boolean | { [key: string]: string } | undefined
		}
	}

	/**
	 * Context is a dictionary of extra information that provides useful context about a datapoint.
	 * @see {@link https://segment.com/docs/spec/common/#context}
	 */
	export interface Context extends Record<string, any> {
		active?: boolean
		app?: {
			name?: string
			version?: string
			build?: string
		}
		campaign?: {
			name?: string
			source?: string
			medium?: string
			term?: string
			content?: string
		}
		device?: {
			id?: string
			manufacturer?: string
			model?: string
			name?: string
			type?: string
			version?: string
		}
		ip?: string
		locale?: string
		location?: {
			city?: string
			country?: string
			latitude?: string
			longitude?: string
			region?: string
			speed?: string
		}
		network?: {
			bluetooth?: string
			carrier?: string
			cellular?: string
			wifi?: string
		}
		os?: {
			name?: string
			version?: string
		}
		page?: {
			hash?: string
			path?: string
			referrer?: string
			search?: string
			title?: string
			url?: string
		}
		referrer?: {
			type?: string
			name?: string
			url?: string
			link?: string
		}
		screen?: {
			density?: string
			height?: string
			width?: string
		}
		timezone?: string
		groupId?: string
		traits?: Record<string, any>
		userAgent?: string
	}

	/** The callback exposed by analytics-node. */
	export type Callback = (err: Error) => void
}

/**
 * Don't do this.
 */
export interface I42TerribleEventName3 {
	/**
	 * Really, don't do this.
	 */
	'0000---terrible-property-name~!3'?: any
	/**
	 * Duplicate key error in Android
	 */
	identifierId?: any
	/**
	 * AcronymStyle bug fixed in v5.0.1
	 */
	identifier_id?: any
}
/**
 * Optional array property
 */
export interface OptionalArray {
	/**
	 * Optional sub-property
	 */
	'optional sub-property'?: string
	/**
	 * Required sub-property
	 */
	'required sub-property': string
}
/**
 * Optional object property
 */
export interface OptionalObject {
	/**
	 * Optional sub-property
	 */
	'optional sub-property'?: string
	/**
	 * Required sub-property
	 */
	'required sub-property': string
}
/**
 * Required array property
 */
export interface RequiredArray {
	/**
	 * Optional sub-property
	 */
	'optional sub-property'?: string
	/**
	 * Required sub-property
	 */
	'required sub-property': string
}
/**
 * Required object property
 */
export interface RequiredObject {
	/**
	 * Optional sub-property
	 */
	'optional sub-property'?: string
	/**
	 * Required sub-property
	 */
	'required sub-property': string
}
/**
 * This event contains all supported variations of properties.
 */
export interface ExampleEvent {
	/**
	 * Optional any property
	 */
	'optional any'?: any
	/**
	 * Optional array property
	 */
	'optional array'?: OptionalArray[]
	/**
	 * Optional array (empty) property
	 */
	'optional array (empty)'?: any[]
	/**
	 * Optional boolean property
	 */
	'optional boolean'?: boolean
	/**
	 * Optional integer property
	 */
	'optional int'?: number
	'optional nullable string'?: string | null
	/**
	 * Optional number property
	 */
	'optional number'?: number
	'optional number or string'?: number | string
	/**
	 * Optional object property
	 */
	'optional object'?: OptionalObject
	/**
	 * Optional object (empty) property
	 */
	'optional object (empty)'?: Record<string, any>
	/**
	 * Optional string property
	 */
	'optional string'?: string
	/**
	 * Optional string regex property
	 */
	'optional string regex'?: string
	/**
	 * Required any property
	 */
	'required any': any
	/**
	 * Required array property
	 */
	'required array': RequiredArray[]
	/**
	 * Required array (empty) property
	 */
	'required array (empty)': any[]
	/**
	 * Required boolean property
	 */
	'required boolean': boolean
	/**
	 * Required integer property
	 */
	'required int': number
	'required nullable string': string | null
	/**
	 * Required number property
	 */
	'required number': number
	'required number or string': number | string
	/**
	 * Required object property
	 */
	'required object': RequiredObject
	/**
	 * Required object (empty) property
	 */
	'required object (empty)': Record<string, any>
	/**
	 * Required string property
	 */
	'required string': string
	/**
	 * Required string regex property
	 */
	'required string regex': string
}

/**
 * Helper to attach metadata on Typewriter to outbound requests.
 * This is used for attribution and debugging by the Segment team.
 */
function withTypewriterContext<P>(
	message: Segment.TrackMessage<P>
): Segment.TrackMessage<P> {
	return {
		...message,
		context: {
			...(message.context || {}),
			typewriter: {
				language: 'ts',
				version: '7.0.0',
			},
		},
	}
}

/** Helper to insert an event name into a track call. */
function withEventName<P>(
	message: Segment.TrackMessage<P>,
	eventName: string
): Segment.TrackMessage<P> {
	return {
		...message,
		event: eventName,
	}
}

export type ValidationErrorHandler = (
	message: Segment.TrackMessage<Record<string, any>>,
	validationErrors: any[]
) => boolean

/** Options to customize the runtime behavior of a Typewriter client. */
export interface TypewriterOptions {
	/**
	 * Handler fired when if an event does not match its spec. Returns a boolean
	 * indicating if the message should still be sent to Segment. This handler
	 * does not fire in production mode, because it requires inlining the full
	 * JSON Schema spec.
	 *
	 * By default, it will throw errors if NODE_ENV = "test" so that tests will fail
	 * if a message does not match the spec. Otherwise, errors will be logged to stderr.
	 * Also by default, invalid messages will be dropped.
	 */
	onValidationError?: ValidationErrorHandler
}

/**
 * A strongly-typed wrapper around analytics-node automatically generated based on your Tracking Plan.
 */
export default class Analytics {
	private analytics: Segment.AnalyticsNode

	/**
	 * Instantiate a wrapper around an analytics-node instance.
	 * @param {Segment.AnalyticsNode} analytics The analytics-node library to wrap
	 * @param {TypewriterOptions} [options] Optional configuration of the Typewriter client
	 * @param {function} [options.onValidationError] Error handler fired when run-time validation errors
	 *     are raised.
	 */
	public constructor(
		analytics: Segment.AnalyticsNode,
		options: TypewriterOptions = {}
	) {
		this.analytics = analytics || { track: () => null }
	}

	/**
	 * Don't do this.
	 */
	public I42TerribleEventName3(
		message: Segment.TrackMessage<I42TerribleEventName3>,
		callback?: Segment.Callback
	): void {
		this.analytics.track(
			withTypewriterContext(
				withEventName(message, '42_--terrible=="event\'++name~!3')
			),
			callback
		)
	}
	/**
	 * This is JSON Schema draft-04 event.
	 */
	public draft04Event(
		message: Segment.TrackMessage<Record<string, any>>,
		callback?: Segment.Callback
	): void {
		this.analytics.track(
			withTypewriterContext(withEventName(message, 'Draft-04 Event')),
			callback
		)
	}
	/**
	 * This is JSON Schema draft-06 event.
	 */
	public draft06Event(
		message: Segment.TrackMessage<Record<string, any>>,
		callback?: Segment.Callback
	): void {
		this.analytics.track(
			withTypewriterContext(withEventName(message, 'Draft-06 Event')),
			callback
		)
	}
	/**
	 * This is an empty event.
	 */
	public emptyEvent(
		message: Segment.TrackMessage<Record<string, any>>,
		callback?: Segment.Callback
	): void {
		this.analytics.track(
			withTypewriterContext(withEventName(message, 'Empty Event')),
			callback
		)
	}
	/**
	 * This event contains all supported variations of properties.
	 */
	public exampleEvent(
		message: Segment.TrackMessage<ExampleEvent>,
		callback?: Segment.Callback
	): void {
		this.analytics.track(
			withTypewriterContext(withEventName(message, 'Example Event')),
			callback
		)
	}
	/**
	 * checkin != check_in bug
	 */
	public checkIn(
		message: Segment.TrackMessage<Record<string, any>>,
		callback?: Segment.Callback
	): void {
		this.analytics.track(
			withTypewriterContext(withEventName(message, 'check_in')),
			callback
		)
	}
	/**
	 * checkin != check_in bug
	 */
	public checkin(
		message: Segment.TrackMessage<Record<string, any>>,
		callback?: Segment.Callback
	): void {
		this.analytics.track(
			withTypewriterContext(withEventName(message, 'checkin')),
			callback
		)
	}
}
