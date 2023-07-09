import { createClient } from 'contentful'

const config = {
    space: 'n1mi3chtjat9',
    accessToken: 'oc2nKM0F6r_0uQzdIGJWA9rn0rRG0W2L2o5yrg7Cag8',
}

const createClientC = () => {
    return createClient(config)
};

export default createClientC;