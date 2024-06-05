const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET;
module.exports = { JWT_TOKEN_SECRET };
const StatusCode = {
  CONTINUE: 100,
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NON_AUTH_INFO: 203,
  NO_CONTENT: 204,
  MULTIPLECHOICE: 300,
  BAD_REQUEST: 400,
  NOTFOUND: 404,
  SERVER_ERROR: 500,
};

module.exports = { StatusCode };