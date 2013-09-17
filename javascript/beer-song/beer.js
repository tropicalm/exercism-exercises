module.exports = {
    verse: function(num) {
        if (num > 1) {
            return verseForMulti(num);
        } else if (num === 1) {
            return verseForOne();
        } else {
        	return verseForZero();
        }
    },
    sing: function(from, to) {
        if (to === undefined) {
            to = 0;
        }
        if (from === to) {
            return this.verse(from);
        } else {
            return this.verse(from) + "\n" + this.sing(from-1, to);
        }
    }
}

var verseForMulti = function(num) {
    return num + " bottles of beer on the wall, " 
    	+ num + " bottles of beer.\n"
    	+ "Take one down and pass it around, "
    	+ (num - 1) + " bottles of beer on the wall.\n";
}

var verseForOne = function() {
    return "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";
}

var verseForZero = function() {
    return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";

}