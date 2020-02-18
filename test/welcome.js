import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/index';

const should = chai.should();

chai.use(chaiHttp);
const { expect } = chai;
describe('Welcome', () => {
  it('should give welcome ', (done) => {
    chai.request(server)
      .get('/api/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.be.a('string');
        done();
      });
  });
});
