const add = require('./index');

test('adds 1 + 2 to equal 4', () => {
  expect(add(1, 2)).toBe(4);
});




// sudo docker run -d \
//   --name=drone \
//   --network=drone \
//   -p 8080:80 \
//   -e DRONE_GITHUB_CLIENT_ID=Ov23liN4YUQmj4WvrZMk \
//   -e DRONE_GITHUB_CLIENT_SECRET=1a6f41c98997376ab57303506e16be620d68924a \
//   -e DRONE_RPC_SECRET=supersecret \
//   -e DRONE_SERVER_HOST=drone:8080 \
//   -e DRONE_SERVER_PROTO=http \
//   drone/drone:latest

// sudo docker run -d \
//   --name=drone-runner \
//   --network=drone \
//   -e DRONE_RPC_PROTO=http \
//   -e DRONE_RPC_HOST=drone \
//   -e DRONE_RPC_SECRET=supersecret \
//   -e DRONE_RUNNER_CAPACITY=2 \
//   -v /var/run/docker.sock:/var/run/docker.sock \
//   drone/drone-runner-docker:latest