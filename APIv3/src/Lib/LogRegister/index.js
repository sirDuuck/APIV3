import RequestPost from "../../api/RequestPost/index.js";

const LogRegister = async (data) => {
    const url = "/registro";
    const check = await RequestPost(url, {
        user: data.user,
        clienteId: data.clienteId,
        clienteTel: data.clienteTel,
        clienteName: data.clienteName,
        clienteValor: data.clienteValor,
        error: data.error,
    });

    return check;
};

export default LogRegister 