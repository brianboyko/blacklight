const port = process.env.PORT || 3000;
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

export default (server, app) => {

  server.listen(port, () => {
    console.log('Server is listening on port ' + port);
  });
  app.use(cors());
  app.use(bodyParser.json({
    limit: '100mb'
  }));
  app.use(bodyParser.urlencoded({
    limit: '100mb',
    extended: true
  }));

  // to serve the pages.
  app.use('/', express.static('./'));
  app.use('/dist', express.static('./dist'));
  app.use('/jeopardy', express.static('./'));
  // just a test endpoint.
  // just a test endpoint.
  app.get('/api/test', (req, res) => {
    console.log(req.body);
    res.send("We got this as your body: \n" + JSON.stringify(req.body));
  });
};
