/**
 * Fonction pour sauvegarder des données dans le localStorage.
 *
 * @param {string} key - La clé sous laquelle les données seront enregistrées.
 * @param {Object} data - Les données à sauvegarder.
 */
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

/**
 * Fonction pour récupérer des données depuis le localStorage.
 *
 * @param {string} key - La clé sous laquelle les données sont enregistrées.
 * @returns {Object|null} - Les données récupérées ou null si la clé n'existe pas.
 */
function getData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

/**
 * Fonction pour mettre à jour des données dans le localStorage.
 *
 * @param {string} key - La clé sous laquelle les données sont enregistrées.
 * @param {Object} newData - Les nouvelles données à fusionner avec les anciennes.
 * @returns {Object|null} - Les données mises à jour ou null si la clé n'existe pas.
 */
function updateData(key, newData) {
    const existingData = getData(key);

    if (existingData) {
        // Fusionner les anciennes données avec les nouvelles données
        saveData(key, newData);
    } else {
        console.error("Les données que vous essayez de mettre à jour n'existent pas.");
    }
}

/**
 * Fonction pour supprimer des données du localStorage.
 *
 * @param {string} key - La clé sous laquelle les données sont enregistrées.
 */
function deleteData(key) {
    localStorage.removeItem(key);
}

/**
 * Fonction pour vérifier si une clé existe dans le localStorage.
 *
 * @param {string} key - La clé à vérifier.
 * @returns {boolean} - true si la clé existe, false sinon.
 */
function keyExists(key) {
    return localStorage.getItem(key) !== null;
}

// Exports des fonctions pour les rendre accessibles depuis d'autres fichiers
module.exports = { saveData, getData, updateData, deleteData, keyExists };
