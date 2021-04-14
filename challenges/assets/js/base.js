(() => {
    const a = document.createElement('a');
    const linkText = document.createTextNode('Back to Challenges');

    a.appendChild(linkText);
    a.title = 'Back to Challenges';
    a.href = '/challenges';
    a.classList.add('fork-ribbon');
    a.classList.add('right-bottom');
    a.classList.add('fixed');

    document.body.appendChild(a);
})();

/* eslint-disable */
function printAnswer(result) {
    const answerBlock = document.getElementById('answer');
    const answerText = document.createTextNode(result);

    answerBlock.appendChild(answerText);
    return true;
}
function isEquivalent(a, b) {
    const aProps = Object.getOwnPropertyNames(a);
    const bProps = Object.getOwnPropertyNames(b);
    if (aProps.length !== bProps.length) {
        return false;
    }
    for (let i = 0; i < aProps.length; i += 1) {
        const propName = aProps[i];

        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}
function checkParsingAnswer(result) {
    let statusIcon = 'Object doesn\'t exist';
    const initObj = {
        index: 61,
        sort: 'Relevance',
        count: 60,
        landingPage: true,
        CID: 8675309
    };
    console.log('Original: ', initObj, '\nResult: ', result);
    if (isEquivalent(initObj, result)) {
        statusIcon = 'Object exists!';
    }
    printAnswer(statusIcon);
    return statusIcon;
}

/* eslint-enable */
