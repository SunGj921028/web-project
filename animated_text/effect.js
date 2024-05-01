function splitTextIntoSpans(text) { 
    let source = document.querySelectorAll(text);
    source.forEach((src) => { 
        src.classList.add('split-text');
        let text = src.innerText;
        let split_text = text.split(" ").map(function (word) { 
            let char = word.split('').map(char => { 
                return `<span class="split-char">${char}</span>`;
            }).join('');
            return `<div class="split-word">${char}&nbsp</div>`;
        }).join('');

        src.innerHTML = split_text;
    });
}

splitTextIntoSpans('.effect-text');