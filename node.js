// index.js
exports.handler = async (event) => {
    console.log("Event Received:", event);
    return {
        statusCode: 200,
        body: JSON.stringify("Hello from Lambda Function!"),
    };
};
