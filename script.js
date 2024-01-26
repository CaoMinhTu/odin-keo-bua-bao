
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

// game();

const SỐ_LẦN_THẮNG_CẦN_CÓ = 5; // mỗi người chơi phải đạt số lần thắng này để được tuyên bố là thắng cả ván

let tròChơiĐãBắtĐầu = false;

let sốLầnMáyTínhThắng = 0;
let sốLầnNgườiChơiThắng = 0;

const spanMáyTínhRa = document.querySelector('#máyTínhRa');
const spanKếtQuảLầnChơi = document.querySelector('#kếtQuảLầnChơi');

const spanĐiểmCủaNgườiChơi = document.querySelector('#điểmCủaNgườiChơi');
const spanĐiểmCủaMáyTính = document.querySelector('#điểmCủaMáyTính');
const spanBênThắngToànVán = document.querySelector('#bênThắngToànVán');

const btnKéo = document.querySelector('#kéo');
const btnBúa = document.querySelector('#búa');
const btnBao = document.querySelector('#bao');
const btnBắtĐầu = document.querySelector('#bắtĐầu');

function resetMàuCủa3NútBànTay() {
    btnKéo.style.backgroundColor = null;
    btnBúa.style.backgroundColor = null;
    btnBao.style.backgroundColor = null;    
}

btnBắtĐầu.addEventListener('click', () => {
    sốLầnMáyTínhThắng = 0;
    sốLầnNgườiChơiThắng = 0;

    spanĐiểmCủaNgườiChơi.textContent = sốLầnNgườiChơiThắng;
    spanĐiểmCủaMáyTính.textContent = sốLầnMáyTínhThắng;
    spanMáyTínhRa.textContent = '';

    resetMàuCủa3NútBànTay();

    tròChơiĐãBắtĐầu = true;
});

function cậpNhậtTỷSố() {
    /* Cập nhật tỷ số của người chơi, tuyên bố thắng cuộc nếu 1 trong 2 bên đạt SỐ_LẦN_THẮNG_CẦN_CÓ
        và dừng cuộc chơi */

    /*
    CẬP NHẬT giá trị hiển thị của spanĐiểmCủaNgườiChơi là biến sốLầnNgườiChơiThắng
    CẬP NHẬT giá trị hiển thị của spanĐiểmCủaMáyTính là biến sốLầnMáyTínhThắng

    NẾU sốLầnNgườiChơiThắng bằng SỐ_LẦN_THẮNG_CẦN_CÓ
        CẬP NHẬT giá trị hiển thị của spanBênThắngToànVán là 'Bạn thắng'
        GÁN giá trị false cho biến tròChơiĐãBắtĐầu

    NẾU sốLầnMáyTínhThắng bằng SỐ_LẦN_THẮNG_CẦN_CÓ
        CẬP NHẬT giá trị hiển thị của spanBênThắngToànVán là 'Máy tính thắng'
        GÁN giá trị false cho biến tròChơiĐãBắtĐầu
    */

    spanĐiểmCủaNgườiChơi.textContent = sốLầnNgườiChơiThắng;
    spanĐiểmCủaMáyTính.textContent = sốLầnMáyTínhThắng;

    if (sốLầnNgườiChơiThắng === SỐ_LẦN_THẮNG_CẦN_CÓ) {
        spanBênThắngToànVán.textContent = 'Bạn thắng';
        tròChơiĐãBắtĐầu = false;
    }

    if (sốLầnMáyTínhThắng === SỐ_LẦN_THẮNG_CẦN_CÓ) {
        spanBênThắngToànVán.textContent = 'Máy tính thắng';
        tròChơiĐãBắtĐầu = false;
    }
}

function playRound2(ngườiChơiRa) {
    /*
    ĐẶT BIẾN máyTínhRa là kết quả của hàm getComputerChoice
    CẬP NHẬT giá trị hiển thị của spanMáyTínhRa là biến máyTínhRa
    ĐẶT BIẾN kếtQuảLầnChơi nhận kết quả của hàm playRound với đối số là biến ngườiChơiRa và máyTínhRa
    TRƯỜNG HỢP kếtQuảLầnChơi ĐẠT
        giá trị 0:
            GÁN giá trị hiển thị của spanKếtQuảLầnChơi là 'Hòa'
        giá trị 1:
            GÁN giá trị hiển thị của spanKếtQuảLầnChơi là 'Máy tính thắng'
            TĂNG biến sốLầnMáyTínhThắng lên 1
            GỌI HÀM cậpNhậtTỷSố
        giá trị -1:
            GÁN giá trị hiển thị của spanKếtQuảLầnChơi là 'Bạn thắng'
            TĂNG biến sốLầnNgườiChơiThắng lên 1
            GỌI HÀM cậpNhậtTỷSố
    KẾT THÚC TRƯỜNG HỢP
    */

    let máyTínhRa = getComputerChoice();
    spanMáyTínhRa.textContent = máyTínhRa;
    let kếtQuảLầnChơi = playRound(ngườiChơiRa, máyTínhRa);

    switch (kếtQuảLầnChơi) {
        case 0:
            spanKếtQuảLầnChơi.textContent = 'Hòa';
            break;
        case 1:
            spanKếtQuảLầnChơi.textContent = 'Máy tính thắng';
            sốLầnMáyTínhThắng++;
            cậpNhậtTỷSố();
            break;
        case -1:
            spanKếtQuảLầnChơi.textContent = 'Bạn thắng';
            sốLầnNgườiChơiThắng++;
            cậpNhậtTỷSố();
            break;
    }
}

btnKéo.addEventListener('click', () => {
    if (tròChơiĐãBắtĐầu) {
        resetMàuCủa3NútBànTay();
        playRound2('Kéo');
        btnKéo.style.backgroundColor = 'lime';
    }
});

btnBúa.addEventListener('click', () => {
    if (tròChơiĐãBắtĐầu) {
        resetMàuCủa3NútBànTay();
        playRound2('Búa');
        btnBúa.style.backgroundColor = 'lime';
    }
});

btnBao.addEventListener('click', () => {
    if (tròChơiĐãBắtĐầu) {
        resetMàuCủa3NútBànTay();
        playRound2('Bao');
        btnBao.style.backgroundColor = 'lime';
    }
});

