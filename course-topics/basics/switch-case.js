const day = 'Monday';

switch (day) {
    case 'Monday':
        console.log('This is Monday');
        break;
    case 'Tuesday':
        console.log('This is Tuesday');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('This is weekend')
        break
    default:
        console.log(day + ' is not a valid day!');
}