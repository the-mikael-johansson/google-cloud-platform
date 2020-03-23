const fetch = require('node-fetch');

const URL = process.env.SOURCE_URL;

if (!URL) {
    console.log('Environment variable SOURCE_URL is not set');
    throw new Error('Misisng env var: SOURCE_URL');
}

module.exports.handleCommand = async (command, arguments) => {
    if (arguments === undefined ||
        arguments.trim().length === 0) {
        return `Hi! I could not find any country. Try with: "${command} all" or "${command} sweden".`;
    }

    let country = arguments;
    const fetchUrl = `${URL}?country=${country}`;

    console.log(`Fetching from URL ${fetchUrl}`);

    console.time('get-from-api');
    const coronaDataString = await fetch(fetchUrl)
        .then((res) => res.text());
    console.timeEnd('get-from-api');

    const { confirmed, deaths, recovered } = JSON.parse(coronaDataString);

    if (!confirmed.date) {
        return `Could not match any reports for ${country}?`;
    }

    return `Hi! Latest corona report for ${country} is from ${confirmed.date} with the following data: \r\nConfirmed: ${confirmed.count} \r\nDeaths: ${deaths.count} \r\nRecovered: ${recovered.count}`;
}
