const { expect } = require('chai');
const { fetch } = require('../index');

describe('fetch', () => {
  it('peforms a get of JSON via https implicitly', async () => {
    const result = await fetch({ hostname: 'api.publicapis.org', path: '/entries?title=cata' });
    expect(result).to.have.property('count').that.is.a('number');
  });
  it('peforms a get of JSON via https explicitly', async () => {
    const result = await fetch({
      hostname: 'api.publicapis.org',
      path: '/entries?title=cata',
      port: 443,
    });
    expect(result).to.have.property('count').that.is.a('number');
  });
  it('peforms a get implicitly', async () => {
    const result = await fetch({
      hostname: 'api.publicapis.org',
      type: 'txt',
    });
    expect(result).to.be.a('string');
  });
  it('peforms a get explicitly', async () => {
    const result = await fetch({
      hostname: 'api.publicapis.org',
      type: 'txt',
      method: 'GET',
    });
    expect(result).to.be.a('string');
  });
  it('errors with invalid url', async () => {
    let isErrorThrown = false;
    await fetch({
      hostname: 'appppi.publicapis.org',
    }).catch((err) => {
      isErrorThrown = true;
      expect(err).to.have.property('message').that.is.a('string');
      expect(err.message).to.match(/ENOTFOUND/);
    });
    expect(isErrorThrown).to.be.true;
  });
});
