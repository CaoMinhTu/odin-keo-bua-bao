const cácGiáTrị = ['Kéo', 'Búa', 'Bao'];

function getComputerChoice(cácGiáTrị) {
    /* Trả về giá trị ngẫu nhiên trong mảng các giá trị đầu vào */
    return cácGiáTrị[Math.floor(Math.random() * cácGiáTrị.length)];
}

