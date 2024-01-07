
function getComputerChoice() {
    /* Trả về giá trị ngẫu nhiên trong mảng các giá trị */

    const cácGiáTrị = ['Kéo', 'Búa', 'Bao'];
    return cácGiáTrị[Math.floor(Math.random() * cácGiáTrị.length)];
}

function playRound(playerSelection, computerSelection) {
    /* trả về giá trị -1 nếu người chơi thắng, 1 nếu máy tinh thắng, 0 nếu hòa


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

function game() {
    /* cho người chơi đấu với máy tính 5 lần và in ra kết quả */

    /*
    TẠO BIẾN sốLầnMáyTínhThắng với giá trị ban đầu bằng 0
    TẠO BIẾN sốLầnNgườiChơiThắng với giá trị ban đầu bằng 0
    LẶP 5 lần
        TẠO BIẾN roundResult chứa giá trị 0
        KHI roundResult bằng 0
            HỎI lựa chọn của người chơi và lưu vào biến playerSelection
            CHUYỂN playerSelection về dạng proper case để có thể so sánh với các giá trị đã có
            GỌI hàm getComputerChoice và lưu kết quả vào biến computerSelection
            GỌI HÀM playRound với playerSelection và computerSelection, lưu kết quả vào roundResult
            TRƯỜNG HỢP roundResult BẰNG
                0:
                    IN thông báo 'hòa, hãy chọn lại'
                1:
                    IN thông báo 'máy tính thắng'
                    TĂNG biến sốLầnMáyTínhThắng thêm 1
                -1:
                    IN thông báo 'bạn thắng'
                    TĂNG biến sốLầnNgườiChơiThắng thêm 1
            KẾT THÚC TRƯỜNG HỢP
        KẾT THÚC KHI
    KẾT THÚC LẶP
    NẾU sốLầnMáyTínhThắng lớn hơn sốLầnNgườiChơiThắng THÌ
        IN thông báo 'kết quả chung cuộc: máy tính thắng'
    KHÁC
        IN thông báo 'kết quả chung cuộc: bạn thắng'
    KẾT THÚC NẾU
    */

    let sốLầnMáyTínhThắng = 0;
    let sốLầnNgườiChơiThắng = 0;
    for (let i = 0; i < 5; i++) {
        let roundResult = 0;
        while (roundResult === 0) {
            let playerSelection = prompt('Nhập một trong 3 giá trị "Kéo", "Búa", "Bao"');

            // chuyển playerSelection về dạng proper case để có thể so sánh với các giá trị đã có
            playerSelection = playerSelection[0].toLocaleUpperCase()
                                + playerSelection.slice(1).toLocaleLowerCase();

            let computerSelection = getComputerChoice();
            roundResult = playRound(playerSelection, computerSelection);
            switch(roundResult) {
                case 0:
                    console.log(`Bạn ra "${playerSelection}", máy tính ra "${computerSelection}" - hòa, chơi lại`);
                    break;
                case 1:
                    console.log(`Bạn ra "${playerSelection}", máy tính ra "${computerSelection}" - máy tính thắng`);
                    sốLầnMáyTínhThắng++;
                    break;
                case -1:
                    console.log(`Bạn ra "${playerSelection}" Máy tính ra "${computerSelection}" - bạn thắng`);
                    sốLầnNgườiChơiThắng++;
                    break;
            }
        }
    }
    if (sốLầnMáyTínhThắng > sốLầnNgườiChơiThắng) {
        console.log(`Kết quả chung cuộc: máy tính thắng ${sốLầnMáyTínhThắng} - ${sốLầnNgườiChơiThắng}`);
    } else {
        console.log(`Kết quả chung cuộc: bạn thắng ${sốLầnNgườiChơiThắng} - ${sốLầnMáyTínhThắng}`);
    }
}