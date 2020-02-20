import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/index';
import db from '../src/sequelize/models';

const { Service } = db;

// eslint-disable-next-line no-unused-vars
const should = chai.should();
const serviceMock = {
  title: 'Hello',
  description: 'We create hello',
  image: 'hadhadjahda',
};

chai.use(chaiHttp);
const { expect } = chai;
describe('Create Service', () => {
  it('should create the service', (done) => {
    chai.request(server)
      .post('/api/service')
      .send(serviceMock)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body.message).to.be.a('string');
        done();
      });
  });
});
