
function getComputerChoice() {
    /* Trả về giá trị ngẫu nhiên trong mảng các giá trị */

    const cácGiáTrị = ['Kéo', 'Búa', 'Bao'];
    return cácGiáTrị[Math.floor(Math.random() * cácGiáTrị.length)];
}

function playRound(playerSelection, computerSelection) {
    /* trả về giá trị -1 nếu người chơi thắng, 1 nếu máy tinh thắng, 0 nếu hòa

    CHUYỂN playerSelection về dạng proper case để có thể so sánh với các giá trị đã có

    NẾU playerSelection bằng với computerSelection THÌ
        TRẢ VỀ giá trị 0
    KẾT THÚC NẾU

    NẾU playerSelect bằng giá trị 'Kéo' và computerSelection bằng giá trị 'Búa'
        hoặc playerSelect bằng giá trị 'Búa' và computerSelection bằng giá trị 'Bao'
        hoặc playerSelect bằng giá trị 'Bao' và computerSelection bằng giá trị 'Kéo'
    THÌ
        TRẢ VỀ giá trị 1 (máy tính thắng)
    KẾT THÚC NẾU

    NẾU playerSelect bằng giá trị 'Búa' và computerSelection bằng giá trị 'Kéo'
        hoặc playerSelect bằng giá trị 'Bao' và computerSelection bằng giá trị 'Búa'
        hoặc playerSelect bằng giá trị 'Kéo' và computerSelection bằng giá trị 'Bao'
    THÌ
        TRẢ VỀ giá trị -1 (người chơi thắng)
    KẾT THÚC NẾU
    */

    // chuyển playerSelection về dạng proper case để có thể so sánh với các giá trị đã có
    playerSelection = playerSelection[0].toLocaleUpperCase() + playerSelection.slice(1).toLocaleLowerCase();

    if (playerSelection === computerSelection) {
        return 0;
    }

    if ((playerSelection == 'Kéo' && computerSelection === 'Búa')
        || (playerSelection === 'Búa' && computerSelection === 'Bao')
        || (playerSelection === 'Bao' && computerSelection === 'Kéo')) {
        return 1; // máy tính thắng
    }

    if ((playerSelection === 'Búa' && computerSelection === 'Kéo')
        || (playerSelection === 'Bao' && computerSelection === 'Búa')
        || (playerSelection === 'Kéo' && computerSelection === 'Bao')) {
        return -1; // người chơi thắng
    }
}