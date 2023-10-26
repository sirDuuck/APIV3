import "dotenv/config";

const RequestPut = async (url, data) => {
  return await makeRequest("put", url, data);
};

export default RequestPut