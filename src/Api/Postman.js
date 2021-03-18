import axios from 'axios';

export default axios.create({

    baseURL:'http://creando.ebslon.com/api/subadmin',
    headers: {
        Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9jcmVhbmRvLmVic2xvbi5jb21cL2FwaVwvbG9naW4iLCJpYXQiOjE2MTQxNjA3ODAsImV4cCI6MTYxNDE2NDM4MCwibmJmIjoxNjE0MTYwNzgwLCJqdGkiOiJWeXhZTHpPNzcydGVyS3FWIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.m4NqxLYyoeVpnYKV4XC2_bU5jn7V_OWC_JXnim22lBw'
    }

});