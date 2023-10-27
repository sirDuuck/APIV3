function normalizeString  (input) {
    if (!input) {
        return ''; // ou qualquer valor padrão que você queira
    }

    return input
        .toUpperCase()
        .replace(/[Çç]/g, 'C')
        .replace(/&/g, 'E')
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
};

export default normalizeString