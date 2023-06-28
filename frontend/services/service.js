async function addMaterial(material) {
    await fetch("http://localhost:3000/material/cadastrar",
    {
        method: 'POST',
        body: JSON.stringify(material),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then( (response) => {
        console.log(response);
    })
    .catch( (error) => {
        console.log(error);
    });
}

async function listMaterial(material) {
    await fetch("http://localhost:3000/material/",
    {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    }).then( (response) => {
        console.log(response);
        return response;
    })
    .catch( (error) => {
        console.log(error);
    });
}

async function updateMaterial(material) {
    await fetch(`http://localhost:3000/material/alterar/${material.nome}`,
    {
        method: 'PUT',
        body: JSON.stringify(material),
        headers: {
            "Content-Type": "application/json"
        }
    }).then( (response) => {
        console.log(response);
        return response;
    })
    .catch( (error) => {
        console.log(error);
    });
}

async function deleteMaterial(nome) {
    await fetch(`http://localhost:3000/material/deletar/${nome}`,
    {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    }).then( (response) => {
        console.log(response);
        return response;
    })
    .catch( (error) => {
        console.log(error);
    });
}

export default {
    addMaterial,
    listMaterial,
    updateMaterial,
    deleteMaterial
}