//selecting HTML elements
const advice = document.querySelector('.advice');
const adviceNum = document.querySelector('.adviceNum')
const button = document.querySelector('.green-circle');

//adding new quote to list
//manipulating DOM
const addNewAdvice = async () => {
    const adviceData = await getAdvice();
    advice.innerHTML = `"${adviceData.advice}"`;
    adviceNum.innerText = `Advice #${adviceData.id}`;
};

//extracting data from json object
const getAdvice = async () => {
    // using try/catch to handle errors
    try {
        const response = await axios.get("https://api.adviceslip.com/advice");
        // return response.data.slip;
        return response.data.slip;
    } catch (e) {
        return 'error occurred :(', e;
    };
};

//listening for button click to call addNewQuote function
button.addEventListener('click', addNewAdvice);