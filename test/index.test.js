const getClientIp = require('../dist/index.min');

test(`假设使用了nginx`, () => {
    const setIp = '192.168.51.93';
    const getIp = getClientIp({
        headers: {
            'x-real-ip': setIp,
            'x-forwarded-for': setIp,
        },
        connection: {},
        socket: {},
    }, 'nginx');
    expect(getIp).toEqual(setIp);
});
