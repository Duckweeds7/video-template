import lodash from 'lodash';

export default {
    ...lodash,

    isUnixTimestamp(value: any) {
        return /^[0-9]{10}$/.test(`${value}`);
    }

};
