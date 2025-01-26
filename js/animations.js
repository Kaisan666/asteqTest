const eyeSVG = document.getElementById('eyeSVG');
const eye = document.getElementById('eye');



const eyeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          eye.classList.add('visible'); // Показываем eye
        } else {
          eye.classList.remove('visible'); // Скрываем eye
        }
      });
    },
    { threshold: 0.5 } // Сработает, когда 50% SVG видно
  );
  eyeObserver.observe(eyeSVG);

  const cloudSVG = document.getElementById('cloudSVG');
const cloud = document.getElementById('cloud');

const cloudObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cloud.classList.add('visible'); // Показываем eye
        } else {
          cloud.classList.remove('visible'); // Скрываем eye
        }
      });
    },
    { threshold: 0.5 } // Сработает, когда 50% SVG видно
  );
  cloudObserver.observe(cloudSVG);

  const lockSVG = document.getElementById('lock');
const middleLock = document.getElementById('middleLock');
const endLock = document.getElementById('endLock');

const lockObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          middleLock.classList.add('visible'); // Показываем eye
          endLock.classList.add('visible'); // Показываем eye
        } else {
          middleLock.classList.remove('visible'); // Скрываем eye
          endLock.classList.remove('visible'); // Скрываем eye
        }
      });
    },
    { threshold: 0.5 } // Сработает, когда 50% SVG видно
  );
  lockObserver.observe(lockSVG);