
const GetUnixTime = () => {
    return !Date.now() ? Date().GetUnixTime() : Date.now() / 1000
}