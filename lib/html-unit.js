const suite = new Suite();

describe = describe.bind(null, suite);
it = it.bind(null, suite, 'ExpectationFailure');

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'interactive') {
    setTimeout(() => {
      const report = suite.run();
      document.getElementById('test-results').innerHTML = report;
    }, 1000);
  }
});
