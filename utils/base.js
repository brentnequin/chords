const bass = (content) => {
    return content.replace(CHORD_REGEX, function (_, $1, $2, $3) {
        return '[' + ($2 == '/' ? $3 : $1) + ']'
    });
}

export {bass}