const test = require('tape');
const request = require('supertest');
const app = require('./app');

test(' Tape Test', (t) => {
  t.equal(1, 1, 'Should Be Equal!');
  t.end();
});
  


test('All routes should return the expected results', t => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        t.error(err);
        t.end();
      });
  });

  test('All routes should return the expected results', t => {
    const id = [1, 2, 3];
    id.forEach((id, index) =>{
        request(app)   
        .get(`/laptop/${id}`)
        .expect(200)
        .expect('Content-Type', /html/)
        .end((err, res) => {
            t.error(err, 'No error');
            if (id.length - 1 === index) {
                t.end();
              }
        });
    })
   
  });

  
