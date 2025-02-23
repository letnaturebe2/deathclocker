// 카운트다운 목표 날짜 설정 (예: 2025년 12월 31일)
const countdownDate = new Date("Dec 31, 2025 23:59:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // 일, 시간, 분, 초 계산
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // HTML에 값 업데이트
  document.getElementById("days").innerText = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

  // 카운트다운이 끝나면
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerText = "시간이 만료되었습니다!";
  }
}

// 1초마다 업데이트
const countdownInterval = setInterval(updateCountdown, 1000);

// 페이지 로드 시 즉시 실행
updateCountdown();