import intervalStrategy from './intervalStrategy';
import workStrategy from './workStrategy';
import loopStrategy from './loopStrategy';
import stopStrategy from './stopStrategy';

const strategies = [loopStrategy, workStrategy, intervalStrategy, stopStrategy];

function getStrategy(store) {
  const strategy = strategies.find((s) => s.isValid(store));
  if (strategy) {
    strategy.process(store);
  }
}

export default {
  getStrategy,
};
