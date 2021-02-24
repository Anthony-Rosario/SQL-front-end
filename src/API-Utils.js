import request from 'superagent';

const URL = 'https://lit-tundra-00068.herokuapp.com/';


export async function getSkateboards() {
    const response = await request.get(`${URL}/skateboards`);

    return response.body;
}


export async function getCategories() {
    const { body } = await request.get(`${URL}/categories`);

    return body;
}


export async function getBoard(id) {
    const { body } = await request.get(`${URL}/skateboards/${id}`);

    return body;
}


export async function makeSkateboard(aBoard) {
    const { body } = await (await request.post(`${URL}/skateboards/`)).send(aBoard);

    return body;
}


export async function deleteSkateboard(id) {
    const { body } = await request.delete(`${URL}/skateboards/${id}`);

    return body;
}

export async function updateSkateboard(id, aBoard) {
    const { body } = await request.put(`${URL}/skateboards/${id}`).send(aBoard);

    return body;
}