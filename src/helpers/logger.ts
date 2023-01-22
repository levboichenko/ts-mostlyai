import tracer from 'tracer';
import fs from 'fs';

export const logger = tracer.colorConsole({
  level: process.env.LOGLEVEL || 'info',
  format: '{{timestamp}} | {{title}} | {{file}}:{{line}} | {{message}}',
  dateformat: 'HH:MM:ss.l',
});

export const logToFile = tracer.console({
  transport: function (data) {
    fs.appendFile('./test-results/trace.log', data.rawoutput + '\n', (err) => {
      if (err) throw err;
    });
  },
});
