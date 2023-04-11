const [plus, minus, h1] = [
    document.querySelector('.plus'),
    document.querySelector('.minus'),
    document.querySelector('h1'),
  ];

  let count = 0;

  const handleClick = (event) => {
    count += event.target.classList.contains('plus') ? 1 : -1;
    h1.innerText = count;
    minus.disabled = count <= 0 ? true : false;
    plus.disabled = count >= 99 ? true : false;
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    h1.style.color = '#' + randomColor;
  };

  plus.addEventListener('click', handleClick);
  minus.addEventListener('click', handleClick);

