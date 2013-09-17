module.exports = function(word) {
    var sorted = sortChars(word);
    var isAnagram = function(str) {
        return sorted === sortChars(str);
    }
    return {
        match: function(words) {
            return words.filter(isAnagram);
        }
    }
}

var sortChars = function(word) {
    return word.split("")
               .sort(String.localeCompare)
               .join("");
}