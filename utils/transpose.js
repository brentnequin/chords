const transpose = (content, steps) => {

    return content.replace(CHORD_REGEX, function (_, $1, $2, $3) {

        // $1: note + b|#|etc
        // $2: '/' or maj|dim|m|etc
        // $3: if $2=='/': bass note, otherwise 7|etc
    
        var new_note = CHROMATIC_SEQUENCE_SHARPS[(((CHROMATIC_SEQUENCE_SHARPS.indexOf($1) + steps) % CHROMATIC_SEQUENCE_SHARPS.length) + CHROMATIC_SEQUENCE_SHARPS.length) % CHROMATIC_SEQUENCE_SHARPS.length]

        if ($2 === '/') {
            var new_bass_note = CHROMATIC_SEQUENCE_SHARPS[(((CHROMATIC_SEQUENCE_SHARPS.indexOf($3) + steps) % CHROMATIC_SEQUENCE_SHARPS.length) + CHROMATIC_SEQUENCE_SHARPS.length) % CHROMATIC_SEQUENCE_SHARPS.length]
            return '[' + new_note + '/' + new_bass_note + ']'
        } else {
            return '[' + new_note + ($2 || '') + ($3 || '') + ']'
        }
    });
}

export {transpose}