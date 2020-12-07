/**
 * Main EventNative tracker interface. Exposed via eventN constant
 * (e.g. import eventN from '@ksense/eventnative'
 */
export type Tracker = {
  logger: Logger
  /**
   * Sends a third-party event (event intercepted from third-party system, such as analytics.js or GA). Should
   * not be called directly
   * @param typeName event name of event
   * @param payload third-party payload
   * @param type event-type
   */
  _send3p: (typeName: string, payload: any, type?: string) => void
  /**
   * Sends a track event to server
   * @param name event name
   * @param payload event payload
   */
  track: (typeName: string, payload?: any) => void
  /**
   * Sets a user data
   * @param userData user data (as map id_type --> value, such as "email": "a@bcd.com"
   * @param doNotSendEvent if true (false by default), separate "id" event won't be sent to server
   */
  id: (userData: Record<string, any>, doNotSendEvent?: boolean) => void
  /**
   * Initializes tracker. Must be called
   * @param initialization options
   */
  init: (opts: TrackerOptions) => void
  /**
   * Explicit call for intercepting segment's analytics.
   * @param analytics window.analytics object
   */
  interceptAnalytics: (analytics: any) => void
}

declare const eventN: Tracker;

export default eventN;

/**
 * Configuration options of EventNative
 */
export type TrackerOptions = {
  /**
   * Cookie domain that will be used to identify
   * users. If not set, location.hostname will be used
   */
  cookie_domain?: string
  /**
   * Tracking host (where API calls will be sent). If not set,
   * we'd try to do the best to "guess" it. Last resort is t.jitsu.com.
   *
   * Though this parameter is not required, it's highly recommended to set is explicitely
   */
  tracking_host?: string

  /**
   * Name of id cookie. __eventn_id by default
   */
  cookie_name?: string
  /**
   * API key. It's highly recommended to explicitely set it. Otherwise, the code will work
   * in some cases (where server is configured with exactly one client key)
   */
  key?: string
  /**
   * If google analytics events should be intercepted. Read more about event interception
   * at https://docs.eventnative.org/sending-data/javascript-reference/events-interception
   *
   * @default false
   */
  ga_hook?: boolean
  /**
   * If google analytics events should be intercepted. Read more about event interception
   * at https://docs.eventnative.org/sending-data/javascript-reference/events-interception
   *
   * @default false
   */
  segment_hook?: boolean
  /**
   * If URL of API server call should be randomize to by-pass adblockers
   *
   * @default false
   */
  randomize_url?: boolean

  /**
   * If eventNative should capture third-party cookies: either array
   * of cookies name or false if the features should be disabled
   *
   * @default GA/Segment/Fb cookies: ['_ga': '_fbp', '_ym_uid', 'ajs_user_id', 'ajs_anonymous_id']
   */
  capture_3rd_party_cookies?: string[] | false;

};

/* ==========================================================
 * FURTHER SECTION CONTAINS DEFINITIONS OF INTERNAL TYPES,
 * WHICH ARE NOT EXPOSED WITH API
 * ========================================================== */


/**
 * Interface for logging. Plugins might use it
 * internally
 */
export type Logger = {
  debug: (...args: any) => void
  info: (...args: any) => void
  warn: (...args: any) => void
  error: (...args: any) => void
}

/**
 * User properties (ids)
 */
interface UserProps {
  anonymous_id: string        //anonymous is (cookie based),
  //id: string                  //user id (non anonymous). If not set, first known id (from propName below) will be used
  [propName: string]: any     //any other forms of ids
}


/**
 * Ids for third-party tracking systems
 */
interface ThirdpartyIds {
  [id: string]: string
}


/**
 * Internal structure of Event Context
 */
export interface EventCtx {
  event_id: string                 //unique event id
  user: UserProps                  //user properties
  ids?: ThirdpartyIds              //user ids from external systems
  user_agent: string               //user
  utc_time: string                 //current UTC time in ISO 8601
  local_tz_offset: number          //local timezone offset (in minutes)
  referer: string                  //document referer
  url: string                      //current url
  page_title: string               //page title
  utm: Record<string, string>      //utm tags (without utm prefix, e.g key will be "source", not utm_source. See
                                   //see UTM_TYPES for all supported utm tags
  click_id: Record<string, string> //all external click ids (passed through URL). See CLICK_IDS for supported all supported click ids
  [propName: string]: any          //context is extendable, any extra properties can be added here
}

export type Event = {
  api_key: string                  //JS api key
  src: string                      //src
  event_type: string               //event type: eventn if event is coming directly from EventNative tracking code
                                   //or id of 3rdparty source (so far ajs | ga for google analytics)

  eventn_ctx: EventCtx             //Context of event (see above)
}

export type EventnEvent = Event & {
  eventn_data: any
  src: 'eventn'
}

export type TrackerPlugin = (t: Tracker) => void;
