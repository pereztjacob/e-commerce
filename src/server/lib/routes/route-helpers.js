export const respond = asyncFn => {
  return (req, res, next) => {

    asyncFn(req)
      .then(data => {
        if(req.id && !data) {
          throw {
            status: 404,
            error: `id ${req.id} does not exist`
          };
        }
        else {
          res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
          res.json(data);
        }
      })
      .catch(next);
  };
};