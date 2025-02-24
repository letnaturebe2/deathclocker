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

  // anime.js로 seconds 애니메이션 적용
  anime({
    targets: "#seconds",
    innerText: [parseInt(document.getElementById("seconds").innerText) || 0, seconds < 10 ? "0" + seconds : seconds], // 이전 값에서 새 값으로
    round: 1,
    duration: 800,
    easing: "easeInOutQuad",
    opacity: [0, 1], // 페이드 인 효과
    update: function (anim) {
      document.getElementById("seconds").innerText = anim.animations[0].currentValue; // 실시간 업데이트
    }
  });

  // 카운트다운이 끝나면
  if (distance < 0) {
    clearInterval(countdownInterval);
  }


}

// 1초마다 업데이트
const countdownInterval = setInterval(updateCountdown, 1000);

// 페이지 로드 시 즉시 실행
updateCountdown();

anime({
  targets: "#logo",
  scale: [1, 1.2], // 1배에서 1.1배로 커졌다 작아짐
  duration: 1000,
  easing: "easeInOutSine",
  direction: "alternate", // 앞뒤로 반복
  loop: true, // 무한 반복
});
