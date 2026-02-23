async function getProducts() {
    try {
        const response = await fetch('http://localhost:8080/produtos');
        if (!response.ok) {
            // Mensagem de erro 
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const produtos = await response.json();
        return produtos;
    } catch (error) {
        console.error('Falha ao buscar produtos:', error);
        // Retorna um array vazio 
        return [];
    }
}
