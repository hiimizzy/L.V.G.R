// Função para buscar categorias da API
async function getCategorias() {
    try {
        const response = await fetch('https://uapi.lunarvoid.online/categorias');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Falha ao buscar categorias:', error);
        return null;
    }
}

// Função para buscar produtos da API
async function getProducts() {
    //https://uapi.lunarvoid.online
    try {
        const response = await fetch('https://uapi.lunarvoid.online/produtos');
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

// Função para buscar mesas da API
async function getMesas() {
    try {
        const response = await fetch('https://uapi.lunarvoid.online/mesas'); 
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

// Função para buscar pedidos da API
async function postPedido(order) {
    try {
        const response = await fetch('https://uapi.lunarvoid.online/pedidos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Falha ao enviar pedido:', error);
        throw error;
    }
}

// Função para buscar pedidos da API
async function postCategoria(data) {
    try {
        const response = await fetch('https://uapi.lunarvoid.online/categorias', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Falha ao criar categoria:', error);
        throw error;
    }
}

// Função para atualizar a ordem das categorias
async function putCategorias(data) {
    try {
        const response = await fetch('https://uapi.lunarvoid.online/categorias/ordenar', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return true;
    } catch (error) {
        console.error('Falha ao atualizar categorias:', error);
        throw error;
    }
}

async function deleteItem(endpoint, id) {
    try {
        const response = await fetch(`https://uapi.lunarvoid.online/${endpoint}/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return true;
    } catch (error) {
        console.error(`Falha ao deletar item em ${endpoint}:`, error);
        return false;
    }
}

async function postMesa(data) {
    try {
        const response = await fetch('https://uapi.lunarvoid.online/mesas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Falha ao criar mesa:', error);
        throw error;
    }
}

// Função para criar um novo produto.
async function postProduto(produto, file) {
    try {
        const formData = new FormData();
        formData.append('produto', JSON.stringify(produto));
        if (file) {
            formData.append('file', file);
        }

        const response = await fetch('https://uapi.lunarvoid.online/produtos', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            const errorBody = await response.text();
            console.error('Corpo do erro:', errorBody);
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Falha ao criar produto:', error);
        throw error;
    }
}

// Função para chamar o garçom
async function chamarGarcom(mesaId) {
    try {
        const response = await fetch('https://uapi.lunarvoid.online/chamados', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mesa: { id: mesaId }, status: "PENDENTE" })
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Falha ao chamar o garçom:', error);
        throw error;
    }
}
