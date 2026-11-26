(function () {
  const box = document.createElement('div');
  box.className = 'lightbox';
  const img = document.createElement('img');
  box.appendChild(img);
  document.body.appendChild(box);

  box.addEventListener('click', () => box.classList.remove('active'));

  document.querySelectorAll('.s-photos img').forEach(photo => {
    photo.parentElement.addEventListener('click', (e) => {
      e.preventDefault();
      img.src = photo.src;
      img.alt = photo.alt || '';
      box.classList.add('active');
    });
  });
})();
