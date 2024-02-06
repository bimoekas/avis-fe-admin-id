import Axios from 'axios';

export const getToken = () => {
    Axios.get(
        `https://stage.abgapiservices.com/oauth/token/v1`,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'client_id': '04e19f27',
                'client_secret': '4ed319e489d262258325686bf0902603'
            }
        }
    ).then((res) => {
        //  console.log(res.data.access_token);
        localStorage.setItem('bebe', res.data.access_token);
        return res.data.access_token;
    })
}

export const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(number);
}

export const generateRandomNumbers =
    () => {
        var randomNumbers = [];
        for (var i = 0; i < 9; i++) {
            randomNumbers.push(Math.floor(Math.random() * 100)); // Adjust the range as needed
        }
        return randomNumbers;
    }