function generateScreenSizeString(sizes) {
    let output = '';

    for (let i= 0; i < sizes.length; i++) {
        const sizeInches = sizes[i];
        const sizeCentimeters = Math.round(sizes[i]* 2.54);

        output = output + `${sizeInches} inch (${sizeCentimeters} cm)`;
        if (i < sizes.length-1) {
            output = `${output} | `
        }
    }

    return output;
}

export default generateScreenSizeString;


