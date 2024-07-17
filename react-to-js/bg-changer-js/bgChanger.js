const bgColor = [
    {
      colorName: 'Red',
      colorCode: '#bf2121'
    },
    {
      colorName: 'Green',
      colorCode: '#076107'
    },
    {
      colorName: 'Blue',
      colorCode: '#2121c9'
    },
    {
      colorName: 'Olive',
      colorCode: '#808000'
    },
    {
      colorName: 'Gray',
      colorCode: '#808080'
    },
    {
      colorName: 'Yellow',
      colorCode: '#909000'
    },
    {
      colorName: 'Pink',
      colorCode: '#bc485b'
    },
    {
      colorName: 'Purple',
      colorCode: '#800080'
    },
    {
      colorName: 'Lavender',
      colorCode: '#e6e6fa'
    },
    {
      colorName: 'White',
      colorCode: '#fff'
    },

    {
      colorName: 'Black',
      colorCode: '#000'
    },
  ];

  const btnContainer = document.querySelector("#btn-container");

  // state to change
  const color = {
    currentColor: '#bc485b'
  };

  //change the state and update the UI
  const setColor = (newColor) => {
      color.currentColor = newColor;
      document.body.style.backgroundColor = color.currentColor;
  }

  //setting the initial state and update the UI
  setColor(color.currentColor);


  // creating buttons
  bgColor.forEach((color) => {
    const button = document.createElement('button');
    button.innerHTML = `${color.colorName}`;
    button.style.backgroundColor = color.colorCode;
    if(color.colorCode !== "#fff" && color.colorCode !== "#e6e6fa"){
        button.style.color = "white";
    }
    button.className = `px-5 py-1 rounded-full shadow-lg`;
    button.setAttribute("id","btn-action");
    console.log(button);
    btnContainer.appendChild(button)
  }
)

btnContainer.addEventListener('click', e => {
    // Event Delegation
    if(e.target.tagName === "BUTTON"){
        const selectedBtnColor = e.target.style.backgroundColor;
        setColor(selectedBtnColor);
    }
})

  
