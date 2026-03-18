const add = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

// sudo docker run -d \
//   --name=drone \
//   -p 8080:80 \
//   -e DRONE_GITHUB_CLIENT_ID=Ov23liN4YUQmj4WvrZMk \
//   -e DRONE_GITHUB_CLIENT_SECRET=1a6f41c98997376ab57303506e16be620d68924a \
//   -e DRONE_RPC_SECRET=supersecret \
//   -e DRONE_SERVER_HOST=localhost:8080 \
//   -e DRONE_SERVER_PROTO=http \
//   drone/drone:latest

// docker run -d \
//   --name=drone \
//   -p 8080:80 \
//   -e DRONE_GITHUB_CLIENT_ID=YOUR_ID \
//   -e DRONE_GITHUB_CLIENT_SECRET=YOUR_SECRET \
//   -e DRONE_RPC_SECRET=supersecret \
//   -e DRONE_SERVER_HOST=host.docker.internal:8080 \
//   -e DRONE_SERVER_PROTO=http \
//   drone/drone:latest

// docker run -d \
//   --name=drone-runner \
//   -p 3000:3000 \
//   -e DRONE_RPC_PROTO=http \
//   -e DRONE_RPC_HOST=host.docker.internal:8080 \
//   -e DRONE_RPC_SECRET=supersecret \
//   drone/drone-runner-docker:latest