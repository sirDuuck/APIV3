import axios from "axios";

const ConsultarCNPJ = {
  getCNPJ: async (cnpj) => {
    try {
      const response = await axios.get(`https://sua-api/cnpj/${cnpj}`);
      const empresa = response.data;
      return {
        razao: empresa.razao_social,
        porte: empresa.porte.descricao,
        simples: empresa.simples?.simples || "",
        nome_fantasia: empresa.estabelecimento.nome_fantasia,
        end: `${empresa.estabelecimento.tipo_logradouro} ${empresa.estabelecimento.logradouro}`,
        numero: empresa.estabelecimento.numero,
        complemento: empresa.estabelecimento.complemento,
        bairro: empresa.estabelecimento.bairro,
        cep: empresa.estabelecimento.cep,
        tel: `${empresa.estabelecimento.ddd1}${empresa.estabelecimento.telefone1}`,
        tel2: `${empresa.estabelecimento.ddd2}${empresa.estabelecimento.telefone2}`,
        email: empresa.estabelecimento.email,
        cnae: empresa.estabelecimento.atividade_principal.subclasse,
        cnae_descricao: empresa.estabelecimento.atividade_principal.descricao,
        pais: empresa.estabelecimento.pais.nome,
        uf: empresa.estabelecimento.estado.sigla,
        cidade: empresa.estabelecimento.cidade.nome,
        ie: empresa.estabelecimento.inscricoes_estaduais[0]?.inscricao_estadual || "",
        ie_local: empresa.estabelecimento.inscricoes_estaduais[0]?.estado.nome || "",
      };
    } catch (error) {
      console.log(error);
      return {
        razao: "",
        porte: "",
        simples: "",
        nome_fantasia: "",
        end: "",
        numero: "",
        complemento: "",
        bairro: "",
        cep: "",
        tel: "",
        tel2: "",
        email: "",
        cnae: "",
        cnae_descricao: "",
        pais: "",
        uf: "",
        cidade: "",
        ie: "",
        ie_local: "",
      };
    }
  },
};

export default ConsultarCNPJ;

