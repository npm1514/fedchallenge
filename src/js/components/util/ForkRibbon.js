export function ForkRibbon() {
    const a = document.createElement('a');
    const linkText = document.createTextNode('Back to Challenges');

    a.appendChild(linkText);
    a.title = 'Back to Challenges';
    a.href = '/challenges';
    a.classList.add('fork-ribbon');
    a.classList.add('right-bottom');
    a.classList.add('fixed');

    document.body.appendChild(a);
}
