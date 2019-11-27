
    let question = [
        '1: Điền từ còn thiếu vào câu ca dao: "Gần mực thì đen, gần đèn thì..."gì?',
        '2: Từ nào sau đây khác nghĩa với 3 từ còn lại?',
        '3: Mưa ngâu là vào khoảng tháng mấy trong năm?'
    ];
    let answer = [
        ['A. Sáng', 'B. Chói mù mắt', 'C. Lóa', 'D. Tối'],
        ['A. Sinh nở, B. Sinh sôi, C. Sinh trưởng, D. Sinh viên'],
        ['A. Tháng 1 âm lịch, B. Tháng 3 âm lịch, C. Tháng 7 âm lịch, D. Tháng 11 âm lịch'],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],


    ]

    let true_Answer = ['0'];

let haveAnswered = false;
function myFunction(id) {
    if (!haveAnswered) {
        document.getElementsByTagName("button")[id].setAttribute("class", "democlass");
        haveAnswered = true;
    }
}

function startGame() {
    displayQuestion()
}

function displayQuestion() {
    document.getElementById('question').innerHTML =  question [0];
    document.getElementById('0').innerHTML = answer [0][0];
    document.getElementById('1').innerHTML = answer [0][1];
    document.getElementById('2').innerHTML = answer [0][2];
    document.getElementById('3').innerHTML = answer [0][3];
}

function nextQuestion() {


}
function checkWin(id) {
    if (true_Answer[0] == id)
        alert('Ban da tra loi dung');
    else
        alert('Tra loi sai, choi lai tu dau');
    nextQuestion()
}
