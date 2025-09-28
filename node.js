// index.js
export const handler = async (event) => {
  console.log("Lambda function invoked!", event);
    return {
        statusCode: 200,
        body: JSON.stringify("Hello from Lambda V2!"),
    };
};
