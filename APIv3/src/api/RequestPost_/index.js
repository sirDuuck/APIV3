import "dotenv/config";

const RequestPost = async (url, data) => {
  return await makeRequest("post", url, data);
};

export default RequestPost