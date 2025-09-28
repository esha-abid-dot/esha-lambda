// index.js
exports.handler = async (event) => {
    console.log("Lambda deployed from pipeline");
    return {
        statusCode: 200,
        body: JSON.stringify("Hello from Lambda v2!"),
    };
};
