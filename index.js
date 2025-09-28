export const handler = async (event) => {
  console.log("Lambda invoked!", event);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Lambda " }),
  };
};
