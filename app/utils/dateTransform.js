const dateTransform = (data) => {
    const dately = data.split("-");
    const output = [dately[0]]

    switch (dately[1]) {
        case '01':
            output.unshift("Jan");
            break;
        case '02':
            output.unshift("Feb");
            break;
        case '03':
            output.unshift("Mar");
            break;
        case '04':
            output.unshift("Apr");
            break;
        case '05':
            output.unshift("May");
            break;
        case '06':
            output.unshift("Jun");
            break;
        case '07':
            output.unshift("Jul");
            break;
        case '08':
            output.unshift("Aug");
            break;
        case '09':
            output.unshift("Sep");
            break;
        case '10':
            output.unshift("Oct");
            break;
        case '11':
            output.unshift("Nov");
            break;
        case '12':
            output.unshift("Dec");
            break;
    }

    return output.join(" ");
}

export default dateTransform;