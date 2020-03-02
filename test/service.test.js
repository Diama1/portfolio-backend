import chai from 'chai';
import chaiHttp from 'chai-http';
import { async } from 'regenerator-runtime';
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
const updateMock = {
  title: 'Helloo',
  description: 'We create hellooo',
  image: 'hadhadjahdaa',
};
let newService;


chai.use(chaiHttp);
const { expect } = chai;
describe('Service', () => {
  before(async () => {
    const service = {
      title: 'UX & UI',
      description: 'we develop better UX',
      image: 'dfdddfdwwdw'

    };
    newService = await Service.create(service);
  });
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

  it('should get all services in the db', (done) => {
    chai.request(server)
      .get('/api/service')
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res).to.have.status(200);
        expect(res.body.services).to.be.an('array');
        done();
      });
  });

  it('should update a specific service', (done) => {
    chai.request(server)
      .put(`/api/service/${newService.id}`)
      .send(updateMock)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res).to.have.status(200);
        done();
      });
  });
  it('should delete a specific service', (done) => {
    chai.request(server)
      .delete(`/api/service/${newService.id}`)
      .end((err, res) => {
        expect(res.body.message).to.equal('the service has been deleted successfully');
        expect(res).to.have.status(200);
        done();
      });
  });
});
