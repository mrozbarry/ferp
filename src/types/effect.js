class Effect extends Promise {
  static none() {
    return Effect.map([]);
  }

  static map(effects) {
    return (dispatch) => Promise.all(effects.map((effect) => effect.then(dispatch)));
  }

  static immediate(message) {
    return new Effect((done) => done(message));
  }
}

module.exports = {
  Effect,
};