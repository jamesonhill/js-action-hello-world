import core from '@actions/core';
import github from '@actions/github';

try {
  const name = core.getInput('who-to-greet');
  console.log(`Hello ${name}`);
  const time = new Date();
  core.setOutput('time', time.toString());
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log('Event payload: ', payload);
} catch (e) {
  core.setFailed(e.message);
}