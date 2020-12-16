import { configure, ConsoleSink } from './app/common/libs/structured-log/structured-log';
import { HttpSink } from './app/common/util/httpSink';

const logger = configure()
  .writeTo(new ConsoleSink({
    includeTimestamps: true,
    // includeProperties: true,
  }))
  .writeTo(new HttpSink({ url: 'http://localhost:8080' }))
  .enrich(window.SERVER_DATA)
  .create();

export default logger;
