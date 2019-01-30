const fastify = require('fastify')({
  logger: false
})

let workstationId = 0;

fastify.get('/', async(request, response) => {
  workstationId += 1
  return workstationId
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0')
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
