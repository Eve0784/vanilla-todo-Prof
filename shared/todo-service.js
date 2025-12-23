function getAllTodos() {
    const apiUrl = "https://6942665069b12460f310f9c1.mockapi.io/api/v1/todos"

    return fetch(apiUrl)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.error('Aiuuutoooo!', error));
}

function getTodo(id) {
    const apiUrl = "https://6942665069b12460f310f9c1.mockapi.io/api/v1/todos/" + id;

    return fetch(apiUrl)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.error('Aiuuutoooo!', error));
}

function deleteTodo(id) {

    const apiUrl = "https://6942665069b12460f310f9c1.mockapi.io/api/v1/todos/" + id;

    return fetch(apiUrl, {method: 'DELETE'})
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.error('Aiuuutoooo!', error))
}

function changeDoneStatus(id, newStatus) {

    const apiUrl = "https://6942665069b12460f310f9c1.mockapi.io/api/v1/todos/" + id;

    return fetch(apiUrl, {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ done: newStatus })
    }).then(response => response.json())
    .then(result => result)
    .catch(error => console.error('Aiuuutoooo!', error))
}

function postTodo(todo) {

    const apiUrl = "https://6942665069b12460f310f9c1.mockapi.io/api/v1/todos"

    return fetch(apiUrl, {
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(todo)
    }).then(res => res.json())
    .then(result => result)
    .catch(error => console.error('Error:', error));
}