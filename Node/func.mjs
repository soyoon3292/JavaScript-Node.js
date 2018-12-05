import { odd, even } from './var';

const checkOddOrEven = (num) => {
    if (num % 2) {
        return odd;
    }
    return even;
}

export default checkOddOrEven;