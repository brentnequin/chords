const CHORD_REGEX = /\[([A-G]{1}[b#♭♯]*)(\/|M|Δ|[Mm]aj|m|[Mm]in|‑|[Dd]im|°|ø|[Aa]ug|\+|[Ss]usp?|[Aa]dd)?(\d|[A-G]{1}[b#♭♯]*)?\]/g;
const CHROMATIC_SEQUENCE_SHARPS = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const CHROMATIC_SEQUENCE_FLATS =  ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']

export {CHORD_REGEX, CHROMATIC_SEQUENCE_SHARPS, CHROMATIC_SEQUENCE_FLATS}