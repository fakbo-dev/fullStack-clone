// Sentence capitalization

// hello world -> Hello World
// fakbo webdev -> Fakbo Webdev




const wordCapitalize = (str: string): string => {

    const initialStr: string[] = str.toLowerCase().split(" ");
    let initialArr: string[] = [];

    for (const item of initialStr) {
        const itemsCapitalize = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
        initialArr.push(itemsCapitalize);
    }

    const result: string = initialArr.join(" ");

    return result;
}

console.log(wordCapitalize("hello world"));
console.log(wordCapitalize("faKbO webDEV"));



// Best Logic

const wordCapitalizeBetter = (str: string): string =>
    str.toLowerCase().split(" ")
        .map(word => word[0]
            .toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()).join(); 