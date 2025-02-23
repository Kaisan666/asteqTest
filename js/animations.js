const eyeSVG = document.getElementById('eyeSVG');
const eye = document.getElementById('eye');



const eyeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          eye.classList.add('visible');
        } else {
          eye.classList.remove('visible'); 
        }
      });
    },
    { threshold: 0.5 }
  );
  eyeObserver.observe(eyeSVG);

  const cloudSVG = document.getElementById('cloudSVG');
const cloud = document.getElementById('cloud');

const cloudObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cloud.classList.add('visible'); 
        } else {
          cloud.classList.remove('visible');
        }
      });
    },
    { threshold: 0.5 } 
  );
  cloudObserver.observe(cloudSVG);

  const lockSVG = document.getElementById('lock');
const middleLock = document.getElementById('middleLock');
const endLock = document.getElementById('endLock');

const lockObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          middleLock.classList.add('visible');
          endLock.classList.add('visible');
        } else {
          middleLock.classList.remove('visible');
          endLock.classList.remove('visible'); 
        }
      });
    },
    { threshold: 0.5 }
  );
  lockObserver.observe(lockSVG);