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
        // Retorna null para indicar erro de conexão
        return null;
    }
}

async function getMesas() {
    try {
        const response = await fetch('http://localhost:8080/mesas');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const mesas = await response.json();
        return mesas;
    } catch (error) {
        console.error('Falha ao buscar mesas:', error);
        return null;
    }
}

async function postPedido(order) {
    try {
        const response = await fetch('http://localhost:8080/pedidos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const newOrder = await response.json();
        return newOrder;
    } catch (error) {
        console.error('Falha ao enviar pedido:', error);
        throw error;
    }
}
