const API_URL = "http://127.0.0.1:5000/api";

export const fetchCategories = () => {
    return fetch(`${API_URL}/categories`)
      .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      });
}

export const fetchLogs = () => {
    return fetch(`${API_URL}/logs`)
      .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      });
}


export const sendNotification = (category_id, message) => {
    return fetch('http://127.0.0.1:5000/api/notifications', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({category_id, message}),
    });
}