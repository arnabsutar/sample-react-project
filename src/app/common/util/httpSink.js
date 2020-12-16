/* eslint-disable no-nested-ternary */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
// import _ from 'lodash-es';

import axios from 'axios';

const axiosInstance = axios.create({
  timeout: 1000,
  headers: {
    // 'sink-type': 'http',
    'content-type': 'application/json',
  },
});
const HttpSinkLevelSwitch = {
  off: 0,
  fatal: 1,
  error: 3,
  warning: 7,
  information: 15,
  debug: 31,
  verbose: 63,
};
class HttpSink {
  /**
   *
   * @param {*} option :
   * {
   *  url : null,
   *  minimumLogLevel: information,
   *  enableRetry: false,
   *  retryCount: 0, // not implemented yet
   *  batchMode: false,
   *  batchSize: 0
   * }
   */
  constructor(options) {
    // if (!options || _.isEmpty(options.url)) {
    //   throw new Error('URL is mandatory');
    // }
    this.url = options.url;
    this.minimumLogLevel = options.minimumLogLevel
      ? options.minimumLogLevel : HttpSinkLevelSwitch.information;
    this.enableRetry = options.enableRetry;
    this.retryCount = options.retryCount;
    this.batchMode = options.batchMode;
    this.batchSize = options.batchSize;
    this.eventQueues = [];

    this._internalEventThreshold = 2;
    if (this.batchMode && this.batchSize > 1) {
      this._internalEventThreshold = this.batchSize;
    }
  }

  emit(events) {
    // update the event queue as per the level switch
    this.eventQueues = [...this.eventQueues, ...events].filter((e) => e);
    console.warn('http sink not ready yet', this.eventQueues);

    this._processLogs();
  }

  flush() {
    // all the pending items needs to be pushed
    this._postEvent(this.eventQueues);
    this.eventQueues.length = 0;
  }

  _processLogs() {
    const logMessages = [];
    let counter = this._internalEventThreshold;
    if (this.eventQueues.length >= this._internalEventThreshold) {
      while (counter > 0 && this.eventQueues.length > 0) {
        logMessages.push(this.eventQueues.pop());
        counter -= 1;
      }
    }
    if (logMessages.length > 0) {
      this._postEvent(logMessages);
    }
  }

  _postEvent(events) {
    const logs = events.map((e) => e);
    logs.map((l) => console.log('From Http Sink : ', l));
    axiosInstance.post(this.url, logs);
  }
}

export { HttpSink, HttpSinkLevelSwitch };
