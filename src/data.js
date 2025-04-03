export const API_KEY = 'AIzaSyC8IYgsuCgtuJb_-jgR2q2j_EmXS7fgT4Q'

const value_converter = (value) => {
    if (value >= 1000000000) {
        return (value / 1000000000).toFixed(1) + 'B'
    } else if (value >= 1000000) {
        return (value / 1000000).toFixed(1) + 'M'
    } else if (value >= 1000) {
        return (value / 1000).toFixed(1) + 'K'
    } else {
        return value
    }
}